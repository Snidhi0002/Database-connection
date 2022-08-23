import  Mongoose  from "mongoose";



export const Connection = async() => {
    URL='mongodb://Nidhi:Nidhi9838@ac-mlmcmgq-shard-00-00.hfqmkwo.mongodb.net:27017,ac-mlmcmgq-shard-00-01.hfqmkwo.mongodb.net:27017,ac-mlmcmgq-shard-00-02.hfqmkwo.mongodb.net:27017/?ssl=true&replicaSet=atlas-t5dh93-shard-0&authSource=admin&retryWrites=true&w=majority';
    try{
       await Mongoose.connect(URL,{useNewUrlParser:true});
       console.log('DATABASE CONNECTED');
    }catch(error) {
        console.log('..............................ERROR IN CONNECTION........................',error);
    }
}
 export default Connection;