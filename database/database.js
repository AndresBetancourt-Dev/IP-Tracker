const mongoose = require("mongoose");

async function database() {
  try {
    const URI = process.env.MONGODB_URI;
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(error.message);
  }
}

database();
