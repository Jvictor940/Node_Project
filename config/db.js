const mongoose = require('mongoose');
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        UseNewUrlParser: true, 
        useUnifiedTopology: true 
    })

    console.log(conn)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB; 
