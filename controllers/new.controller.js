const News = require("../models/new");

module.exports.newsController = {
  postNews: (req, res) => {
    News.create({
      header: req.body.header,
      text: req.body.text,
      categoryId: req.body.categoryId,
    }).then((data) => {
      res.json(data);
    });
  },

  deleteNews: (req, res) => {
    News.findByIdAndDelete(req.params).then(() => {
      res.json("Новость удалена");
    });
  },

  patchNews: (res, req) => {
    News.findByIdUpdate({
      header: req.body.header,
      text: req.body.text,
    }).then((data) => {
      res.json(data);
    });
  },

  getNewsById: (req, res) => {
    News.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },

  getNews: (req, res) => {
    News.find().then((data) => {
      res.json(data);
    });
  },
};
