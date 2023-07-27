const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/ecomm', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Failed to connect to MongoDB', err));

module.exports = mongoose;
