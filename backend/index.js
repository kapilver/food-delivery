const  express = require('express');
const  app = express();

require('./Database/db');


// app.get('/api', function(req, res){
//    res.send("Hello world!");

// });
app.use((req,res,next)=>{

    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With , Content-Type,Accept"
    );
    next();

})

app.use(express.json());
app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplayData'));
app.listen(9000);