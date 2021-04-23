const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@cluster0.bz191.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority`,
      { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true }
    );
    console.log('Database connect');
  } catch (error) {
    console.error(error);
    throw new Error('Error in connect database');
  }
};

module.exports = {
  dbConnection,
};
