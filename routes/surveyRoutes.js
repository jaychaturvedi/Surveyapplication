const requireLoggin  =require('../middlewares/requireLogin')
const requireCredits =require('../middlewares/requireCredits')
const mongoose = require('mongoose')
const Mailer = require('../services/Mailer')
const template = require('../services/emailTemplate/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys', requireLoggin, requireCredits ,(req, res) => {
        const {title, body, subject, recipients} = req.body

        const survey = new Survey({
            title,
            body,
            subject,
            recipients: recipients.split(",").map( email => ({ email: email.trim() }) ),
            dateSent : Date.now()
            
        })

        const mailer = new Mailer( survey, template(survey))
        mailer.send()

    })
}