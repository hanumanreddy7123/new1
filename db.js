const mongoose=require('mongoose')
mongoose.set('strictQuery',true)
mongoose.connect('mongodb+srv://hanumanreddy:reddy9398@cluster.pqs5jfb.mongodb.net/?retryWrites=true&w=majority',(err)=>
{
    if(!err)
    {
        console.log("connected to database")
    }
    else
    {
        console.log("error")
    }
})