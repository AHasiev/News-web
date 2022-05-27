const Category = require("../models/categories");

module.exports.categoryController = {
  getCategory: (req, res) => {
    Category.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },

  postCategory: (req, res) => {
    Category.create({
      name: req.body.name
    }).then(data => res.json(data))
  },

  deleteCategory: (req, res) => {
    Category.findByIdAndRemove(req.params.id).then(() => {
      res.json('категория удалена');
    });
  },

  findCategory: (req, res) => {
    Category.find().then((data) => {
      res.json(data);
    });
  },
};
