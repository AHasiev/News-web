const  mongoose = require("mongoose")

const commentsSchema = mongoose.Schema({
    nameComments: String,
    textComments: String,
    
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;