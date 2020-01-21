const models = require("../models");
const comments = models.comments;
const categories = models.categories;
const users = models.users;


exports.show = (req, res) => {
  comments
    .findAll({
      include: [
        {
          model: users,
          as: "user"
        },
      ],
      where: {
        article_id: req.params.id
      }
    })
    .then(comments => res.send(comments))
    .catch(err => res.send(err));
};