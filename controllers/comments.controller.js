const Comments = require('../models/comments')

module.exports.commentsController = {

    postComments: (req, res) => {
        Comments.create({
            nameComments: req.body.nameComments,
            textComments: req.body.textComments,
        }).then((data) => {
            res.json(data)
        })

    },

    deleteComments: (req, res) => {
        Comments.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json("Удален")
        })
    },

    getComments: (req, res) => {
        Comments.find()
        .then(() => {
            res.json(data)
        })
    },
}
