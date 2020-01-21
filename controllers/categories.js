const models = require("../models");
const categories = models.categories;

exports.index = (req, res) => {
  categories.findAll({}).then(categories => res.send(categories));
};

exports.show = (req, res) => {
  categories
    .findOne({where: {id: req.params.id} })
    .then(categories => res.send(categories));
};

exports.store = (req, res) => {
  categories.create(req.body).then(categories => {
    res.send({
      message: "success",
      categories
    });
  });
};