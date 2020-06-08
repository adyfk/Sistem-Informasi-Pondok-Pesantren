const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.json({
        name:'Tifa'
    })
})

app.listen('9000',()=>{
    console.log('app listen to 9000')
})