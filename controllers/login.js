const jwt = require("jsonwebtoken");

const models = require("../models");
const users = models.users;


exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  const email = req.body.email;
  const password = req.body.password; //use encryption in real world case!
  users.findOne({ where: { email, password } }).then(users => {
    if (users) {
      const email = users.email;
      const fullname = users.fullname
      const token = jwt.sign({ id: users.id }, "theToken");
      res.send({
        email,
        fullname,
        token
      });
    } else {
      res.send({
        error: true,
        message: "Wrong Email or Password!"
      });
    }
  });
};
