import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect('mongodb+srv://rafaelbackendcontato_db_user:8aavitOUaGJfUwmY@cluster0.fhbvs4d.mongodb.net/livraria?appName=Cluster0')
    return mongoose.connection;
}

export default conectaNaDatabase;