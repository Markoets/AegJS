const express = require('express');
const mainRoutes = require ('./routes/mainRoutes');
const app = express();


app.use(mainRoutes);

var date = new Date(Date.now());
date.toString()




app.get('/',(request,response)=>{
    response.send(`${date}`)
});




port = 3001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
}); 