const jwt = require("jsonwebtoken");

const models = require("../models");
const follow = models.follow;

exports.followingUser = (req, res) => {
  //check if email and pass match in db tbl user
  follow.create(req.body).then(users => {
    const token = jwt.sign({ id: users.id }, "theToken");
    const email = users.email;
    const name = users.fullname;
    res.send({
      users,
      email,
      name,
      token
    });
  });
};
