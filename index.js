const express  = require('express')
const app = express()
const passport = require('passport')
const cookieSession = require('cookie-session')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const bodyparser = require('body-parser')
require('./models/User')
require('./services/passport')

// mongoose.set('useNewUrlParser', true);
mongoose.connect(keys.mongoURI, {useNewUrlParser: true} ); //"mongodb://localhost:27017/survey"

mongoose.connection.once('open', () => console.log("connected to survey db")).on('error',(error) => console.log(error))

app.use(bodyparser.json())
app.use(
    cookieSession({
        maxAge : 30*24*60*60*1000,
        keys : [keys.sessionKey]
    })
    )
    
app.use(passport.initialize())
app.use(passport.session())
    
require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log('listening on port',PORT)
})