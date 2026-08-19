import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(
    process.env.DB_URL_CONNECTION
  );
  return mongoose.connection;
}

export default conectaNaDatabase;
