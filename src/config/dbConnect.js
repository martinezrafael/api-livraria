import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@livraria-cluster.f59pao2.mongodb.net/?appName=livraria-cluster"
  );

  return mongoose.connection;
}

export default conectaNaDatabase;
