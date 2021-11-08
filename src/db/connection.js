const { MongoClient } = require("mongodb");
require("dotenv").config();

const connection = async (crudFunc, dataObject) => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    console.log("Successfully connected");

    const db = client.db("movie-CLI");
    const collection = db.collection("movies");

    await crudFunc(collection, dataObject);

    client.close();
    console.log("client closed");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
