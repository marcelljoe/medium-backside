const connection = require("../db");
const dummies = [
  {
    id: 1,
    name: "Data1"
  },
  {
    id: 2,
    name: "Data2"
  }
];

exports.index = (req, res) => {
  connection.query("select * from dummies", (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
};

exports.show = (req, res) => {
  connection.query(
    `select * from dummies where id=${req.params.id}`,
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
};

exports.store = (req, res) => {
  const data = req.body;
  dummies.push(data);
  res.send(data);
};

exports.update = (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  const data = req.body;
  dummies[index] = { ...dummies[index], ...data };
  res.send(dummies[index]);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  dummies.splice(index, 1);
  res.send(dummies);
};
