const models = require("../models");
const articles = models.articles;
const categories = models.categories;
const users = models.users;

exports.index = (req, res) => {
  articles
    .findAll({
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ]
    })
    .then(articles => res.send(articles));
};

exports.latest = (req, res) => {
  articles
    .findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ],
      limit: 5
    })
    .then(articles => res.send(articles));
};

exports.detail = (req, res) => {
  articles
    .findOne({
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        },
      ],
      where: {
        id: req.params.id
      }
    })
    .then(articles => res.send(articles));
};


exports.show = (req, res) => {
  articles
    .findAll({
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ],
      where: {
        category_id: req.params.id
      }
    })
    .then(articles => res.send(articles));
};

exports.store = (req, res) => {
  articles.create(req.body).then(articles => {
    res.send({
      message: "success",
      articles
    });
  });
};


exports.update = (req, res) => {
  Todo.update(req.body, { where: { id: req.params.id } }).then(todo => {
    res.send({
      message: "success",
      todo
    });
  });
};

exports.delete = (req, res) => {
  Todo.destroy({ where: { id: req.params.id } }).then(todo => {
    res.send({
      message: "success",
      todo
    });
  });
};


