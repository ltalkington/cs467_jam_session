var express = require("express"); // We are using the express library for the web server
var app = express(); // We need to instantiate an express object to interact with the server in our code
PORT = 8000;
var bodyParser = require("body-parser");
var db = require("./models/db");
var router = express.Router();
var cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//creates a jam session
app.post("/createjamsession", function (req, res) {
  req.body.postedDate = new Date();
  var newDate = new Date(req.body.gigDate);
  req.body.gigDate = newDate;

  console.log(newDate);
  let inserts = [
    req.body.userId,
    req.body.postedDate,
    req.body.gigDate,
    req.body.location,
    req.body.genre,
    req.body.instrumentsNeeded,
    req.body.experienceNeeded,
    req.body.fee,
  ];

  sql =
    "INSERT INTO Jam_Sessions (user_id, posted_date, gig_date, location, genre, instruments_needed, experience_needed, fee) VALUES (?,?,?,?,?,?,?,?)";
  db.pool.query(sql, inserts, function (error, result, fields) {
    if (error) {
      console.log(JSON.stringify(error));
      res.write(JSON.stringify(error));
    } else {
      res.send(result);
    }
  });
});

// updates rooms
app.put("/updatejamsession", function (req, res) {
  let inserts = [
    req.body.gigDate,
    req.body.location,
    req.body.genre,
    req.body.instrumentsNeeded,
    req.body.experienceNeeded,
    req.body.fee,
    req.body.post_jam_id,
  ];
  query =
    "UPDATE Jam_Sessions SET gig_date=?, location=?, genre=?, instruments_needed=?, experience_needed=?, fee=? WHERE jam_post_id=?";
  db.pool.query(query, inserts, (err, result) => {
    if (err) {
      res.write(JSON.stringify(err));
    } else {
      res.send(result);
    }
  });
});

//displays jam session
app.get("/displayjamsession", function (req, res) {
  query = "SELECT * FROM Jam_Sessions";
  db.pool.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

//deletes a jam session
app.delete("/deletejamsession/:id", function (req, res) {
  console.log(req.params.id);
  query = "DELETE FROM Jam_Sessions WHERE jam_post_id = ?";
  db.pool.query(query, req.params.id, (err, result) => {
    if (err) {
      res.write(JSON.stringify(err));
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log(
    "Express started on http://localhost:" +
      PORT +
      "; press Ctrl-C to terminate."
  );
});
