import express from 'express';
import * as db from "../models/db";

const jamSessionRouter = express.Router();

jamSessionRouter
//creates a jam session
    .put("/", function (req, res) {
        req.body.postedDate = new Date();
        const newDate = new Date(req.body.gigDate);
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

        let sql =
            "INSERT INTO Jam_Sessions (user_id, posted_date, gig_date, location, genre, instruments_needed, experience_needed, fee) VALUES (?,?,?,?,?,?,?,?)";
        db.pool.query(sql, inserts, function (error, result, fields) {
            if (error) {
                console.log(JSON.stringify(error));
                res.write(JSON.stringify(error));
            } else {
                res.send(result);
            }
        });
    })

    .put("/:id", function (req, res) {
        let inserts = [
            req.body.gigDate,
            req.body.location,
            req.body.genre,
            req.body.instrumentsNeeded,
            req.body.experienceNeeded,
            req.body.fee,
            req.params.id,
        ];
        let query =
            "UPDATE Jam_Sessions SET gig_date=?, location=?, genre=?, instruments_needed=?, experience_needed=?, fee=? WHERE jam_post_id=?";
        db.pool.query(query, inserts, (err, result) => {
            if (err) {
                res.write(JSON.stringify(err));
            } else {
                res.send(result);
            }
        });
    })

    .get("/", function (req, res) {
        let query = "SELECT * FROM Jam_Sessions";
        db.pool.query(query, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    })

    .delete("/:id", function (req, res) {
        console.log(req.params.id);
        let query = "DELETE FROM Jam_Sessions WHERE jam_post_id = ?";
        db.pool.query(query, req.params.id, (err, result) => {
            if (err) {
                res.write(JSON.stringify(err));
            } else {
                res.send(result);
            }
        });
    })

export { jamSessionRouter };