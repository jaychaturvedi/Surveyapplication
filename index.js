const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyparser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors')
require('./models/User');
require('./models/Survey');
require('./services/passport');


const app = express()

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log("connected to survey db")).on('error',(error) => console.log(error))


app.use(cors())
app.use(bodyparser.json())
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  
  require('./routes/authRoutes')(app);
  require('./routes/billingRoutes')(app);
  require('./routes/surveyRoutes')(app);
  
  if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
  
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('listening on port',PORT)
})