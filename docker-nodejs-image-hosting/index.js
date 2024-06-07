import express from "express"

const PORT=4000
const app=express()

app.get("/",(req,res)=>{
    res.json({
        "Hey":"Nodejs"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is Listening on port ${PORT}`)
})



