const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let chats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date()
    },
    {
        from: "rahul",
        to: "vikram",
        msg: "please reply rahul rana",
        created_at:new Date()
    }
];
Chat.insertMany(chats)
