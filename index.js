const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.json({
        name:'Adi Fatkhurozi'
    })
})

app.listen('9000',()=>{
    console.log('app listen to 9000')
})