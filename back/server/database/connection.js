const mongoose = require("mongoose");
const databaseUrl =
  "mongodb+srv://RyanDjafri:09022002@cluster0.n0zszdh.mongodb.net/";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.log(databaseUrl);
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
