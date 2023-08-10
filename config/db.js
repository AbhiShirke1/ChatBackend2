const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        // console.log(process.env.MONGO_URI);
        const conn = await mongoose.connect("mongodb+srv://sem5:sem5123@cluster0.pjn4ow7.mongodb.net/ChatApp?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('Mongodb connection successful');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB; 