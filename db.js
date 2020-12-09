const mongoose = require('mongoose');

const connectToDatabase = () => (mongoose.connect('mongodb+srv://admin:admin@cluster0.jd9tf.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}));

module.exports = connectToDatabase