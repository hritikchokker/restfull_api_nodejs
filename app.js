const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',require('./api/userapi'));

app.use((req,res)=>{
    res.send('u have typed something wrong');
})
app.listen(process.env.PORT || 1234,(err)=>{
    if(err){
        console.log('error can start server');
        throw err;
    } else{
        console.log('server started at 1234 port');
    }
})