const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req,res)=>{
app.res("hello world")
})
app.listen(port,()=>{
console.log(`listning on port ${port}`)
})
