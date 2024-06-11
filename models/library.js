const mongoose=require("mongoose")
const schema = mongoose.Schema(
{

    "title":{type:String,required:true},
    "author":{type:String,required:true},
    "price":{type:String,required:true},
    "description":{type:String,required:true}
}
)

let librarymodel=mongoose.model("libraries",schema)
module.exports={librarymodel}