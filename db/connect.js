const mongoose = require("mongoose");

const ConnectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports=ConnectDB