const cookieSession = require('cookie-session');
const express = require('express')
const app = express()

app.use(cookieSession({
    name: 'session',
    keys: ['rose'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

  app.use(passport.initiliaze())
  app.use(passport.session())

  app.use(cors({
    origin:"http://localhost:3000",
    method:"GET, POST ,PUT , DELETE",
    credential:true
  }))
app.listen("5000",()=>{
    console.log('server running');
})