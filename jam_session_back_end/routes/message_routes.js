/**
 * For routes regarding jam sessions
 */
const express = require("express");
const app = express.Router();
const db = require("../controllers/db");

app.use(
    express.urlencoded({
        extended: true,
    })
);
//creates a message
app.post("/messages/new", function (req, res) {
    req.body.postedDate = new Date();
    var newDate = new Date(req.body.gigDate);
    req.body.gigDate = newDate;

    let inserts = [
        req.body.userId,
        req.body.postedDate,
        req.body.gigDate,
        req.body.jam_city,
        req.body.jam_state,
        req.body.genre,
        req.body.instrumentsNeeded,
        req.body.experienceNeeded,
        req.body.fee,
        req.body.title,
        req.body.body,
    ];

    sql =
        "INSERT INTO Jam_Sessions (user_id, posted_date, gig_date, jam_city, jam_state, genre, instruments_needed, experience_needed, fee, title, body) VALUES (?,?,?,?,?,?,?,?,?,?, ?)";
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
        req.body.city,
        req.body.state,
        req.body.genre,
        req.body.instrumentsNeeded,
        req.body.experienceNeeded,
        req.body.fee,
        req.body.title,
        req.body.body,
        req.body.post_jam_id,
    ];
    query =
        "UPDATE Jam_Sessions SET gig_date=?, jam_city=?, jam_state=?, genre=?, instruments_needed=?, experience_needed=?, fee=?, title=?, body=? WHERE jam_post_id=?";
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
        res.send(result);
    });
});

app.get("/displayjamsession/:id", function (req, res) {
    query = "SELECT * FROM Jam_Sessions WHERE user_id = ?";
    db.pool.query(query, req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//deletes a jam session
app.delete("/deletejamsession", function (req, res) {
    console.log(req.body.jam_post_id);
    query = "DELETE FROM Jam_Sessions WHERE jam_post_id = ?";
    db.pool.query(query, req.body.jam_post_id, (err, result) => {
        if (err) {
            res.write(JSON.stringify(err));
        } else {
            res.send(result);
        }
    });
});
module.exports = app;