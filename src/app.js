const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000


const static_path = path.join(__dirname,'../public')

app.set('view engine','ejs')

app.use(express.static(static_path))



app.get('/',(req,res)=>{
    res.render('index',{status1:'active',status2: 'none', status3: 'none'})
})

app.get('/about',(req,res)=>{
    res.render('about',{status1:'none',status2: 'active', status3: 'none'})
})

app.get('/weather',(req,res)=>{
    res.render('weather',{status1:'none', status2: 'none', status3: 'active'})
})

app.get('*',(req,res)=>{
    res.render('404error')
})

app.listen(port,()=>{
    console.log(`listening on the port ${port}`)
}) 