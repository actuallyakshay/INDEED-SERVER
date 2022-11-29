const mongoose = require("mongoose");

const connect = async (req, res) => {
  return await mongoose.connect(
    "mongodb+srv://actuallyakshay:akshay@cluster0.eifrxaw.mongodb.net/Indeed?retryWrites=true&w=majority"
  );
};

module.exports = connect;
