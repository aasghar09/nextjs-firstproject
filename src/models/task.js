const { Schema, default: mongoose } = require("mongoose");

const taskschema = new Schema({
    title : {
        type : String,
        required : true, 
    },
    content : {
        type : String,
        required : true,
    },
    addedDate : {
        type: Date,
        default : Date.now(),
    },
    status :{
        type : String,
        enum : ["P","C"],
        default : "P",
    },
    userId:{
        type : mongoose.ObjectId,
        required : true,
    },

});


export const Task = mongoose.models.tasks || mongoose.model("tasks",taskschema);