import mongoose from "mongoose";



 const Connection =async(username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.erpew0h.mongodb.net/ECOMM0?retryWrites=true&w=majority`;
try{
   await mongoose.connect(URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('database connected ');

}catch(erro){
    console.log('Error while connecting with the database',erro.message);

}


}
export default Connection;