const express  = require('express')
const app = express()
require('./services/passport')
//718141363812-fijpr3s6uo8kpq2jaro2oes9s42vqnmj.apps.googleusercontent.com
//1Vccji74aYfUzLcZei2lC2Z0


require('./routes/authRoutes')(app)
const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log('listening on port',PORT)
})