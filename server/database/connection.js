const mongoose = require('mongoose');



const connectDB = async () => {
    
        try {
          
          
         await mongoose.connect('mongodb://localhost:27017/hotel-booking',{
           useNewUrlParser:true,
           useUnifiedTopology:true
         });
           console.log('connected to mongodb');
        } catch (err) {
          console.log(err)
        }
     
     }
     
     

module.exports = connectDB