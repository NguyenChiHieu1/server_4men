const mongoose = require("mongoose");
const connect = async () => {
  try {
    // console.log(`Connecting to MongoDB with USERNAME: ${process.env.USER_NAME} and PASSWORD: ${process.env.PASS_WORD}`);
    await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASS_WORD}@cluster0.fir11lf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      , { serverSelectionTimeoutMS: 5000, });
    console.log("DB connect success!");

  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connect;
