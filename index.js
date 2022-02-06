const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/reserve',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log('connected to DB ...'))
.catch((error)=> console.error(error));


const Customer = mongoose.model('Customer',
   new mongoose.Schema({
    name: {
        type: String,
        required: [true, "the name field is required"],
      },
      email: {
        type: String,
        required: [true, "the email field is required"],
       
      },
      password: {
        type: String,
        required: [true, "the password field is required"],
        
      }
   })
);

const Reservation = mongoose.model('Reservation',
   new mongoose.Schema({
    hotelname: {
        type: String,
        required: [true, "the name field is required"],
      },
      roomnumber: {
        type: Number,
        required: true,
       
      },
      paimentmethode: {
        type: String,
        required: [true, "the paiment field is required"],
        
      },
      customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
      }
   })
);

async function createCustomer(name, email, password) {
    const customer = Customer({
        name, email, password
    })
    const result = await customer.save();
    console.log(result);
}

async function createReservation(hotelname, roomnumber, paimentmethode, customer) {
    const reservation = Reservation({
        hotelname, roomnumber, paimentmethode, customer
    })
    const result = await reservation.save();
    console.log(result);
}

async function getReservation() {
    const reservation = await Reservation.find()
    console.log(reservation);
}

// createCustomer('hamza', 'hamza@gmail.com', '123456');

// createReservation('hotelo', 102, 'cash', '61fe7a339e051eca8cb6da29')


// getReservation()

