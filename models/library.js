const mongoose=require("mongoose")
const schema = mongoose.Schema(
{

    "title":String,
    "author":String,
    "price":String,
    "description":String
}
)

let librarymodel=mongoose.model("libraries",schema)
module.exports={librarymodel}