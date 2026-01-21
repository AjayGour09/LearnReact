import mongoose from "mongoose";

const ConnectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongoose Connected At :", conn.connection.host);
        console.log("DataBase Name" , conn.connection.name);
        
        
    } catch (error) {
        console.log("Error connecting Db",error);
        process.exit(1);
        
    }
}
export default ConnectDb;