import { db } from "./config.js";
import { MongoClient } from "mongodb";

let dbConnection = null;

async function connection() {
  if (dbConnection) {
    return dbConnection;
  }
  try {
    const url = `mongodb+srv://${db.user}:${db.pass}@cluster0.rhimngz.mongodb.net/${db.dbname}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(url, options);
    dbConnection = client.db();
    return dbConnection;
  } catch (error) {
    return { status: 500, message: error };
  }
}

const connect = async (coleccion) => {
  const db = await connection();
  const newCollection = db.collection(coleccion);
  return newCollection;
};

const startTransaction = async () => {
  const db = await connection();
  const session = db.client.startSession();
  session.startTransaction();
  return session;
};

export { connect, startTransaction };
