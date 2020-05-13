const { Path } = require('path-parser');
const _ = require('lodash')
const {URL} = require('url')
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {

  app.get('/api/surveys', requireLogin, async (req,res)=>{
    const surveys = await Survey.find( {_user : req.user.id}).select({recipients:false}) 
    res.send(surveys)
  })

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.delete('/api/surveys/:surveyId',requireLogin, async (req, res) => {
    const surveyId = req.params.surveyId
    await Survey.deleteOne({_id:surveyId}, function(err) {
      if (err) console.log("erorororo");
      console.log("1 document deleted",surveyId);
    });
   res.send({});
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    //req.body contains multiple click events send by sendgrid with url, sendgridId, surveyId, choice, etc.
    const p = new Path('/api/surveys/:surveyId/:choice');
    _.chain(req.body)
      .map(({url, email}) => {
      const pathname = new URL(url).pathname;
      const match = p.test(pathname)
        if(match){
          return { email, ...match}
        }
      })
      .compact()
      .uniqBy('email','surveyId')
      .each( ({surveyId, email, choice}) =>{
        Survey.updateOne(
          {
            _id: surveyId,
            recipients : {
              $elemMatch : { email:email, responded : false}
            }
          },
          {
            $inc : { [choice]: 1},      // same as $inc : { 'yes' : 1}
            $set : { 'recipients.$.responded' : true },
            lastResponded : new Date()
          }
        ).exec()
      })
      .value()
      console.log('saved')
      res.send({})
    
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
        
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    
    
    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));
    
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });


};