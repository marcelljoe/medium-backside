require("express-group-routes");

//instantiate express module
const express = require("express");

//use express in app variable
const app = express();

//init bodyparser
const bodyParser = require("body-parser");
//define the server port
const port = 4000;

const CategoryController = require("./controllers/categories");
const ArticleController = require("./controllers/articles");
const LoginController = require("./controllers/login");
const RegisterController = require("./controllers/register");
const CommentsController = require("./controllers/comments");

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

//create the homepage route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.group("/api/v1", router => {
  router.get("/categories", CategoryController.index);
  router.get("/category/:id", CategoryController.show);
  router.post("/category", CategoryController.store);

  
  router.get("/articles", ArticleController.index);
  router.get("/latestarticles", ArticleController.latest);
  router.get("/category/:id/articles", ArticleController.show);
  router.get("/article/:id", ArticleController.detail);


  router.get("/article/:id/comments", CommentsController.show);

  router.post("/login", LoginController.login);
  router.post("/register", RegisterController.register);
});

//when the nodejs app exed, make it lesten the port
app.listen(port, () => console.log(`Listening on port ${port}!`));
