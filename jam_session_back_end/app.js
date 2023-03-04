var express = require("express"); // We are using the express library for the web server
var app = express(); // We need to instantiate an express object to interact with the server in our code
var PORT = 8000;
var cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Import our routes
const jam_session_routes = require("./routes/jam_sessions_routes");
const message_routes = require("./routes/message_routes");
const review_routes = require("./routes/review_routes");
const media_routes = require("./routes/media_routes");
const post_routes = require("./routes/post_routes");
const user_routes = require("./routes/user_routes");
const profile_routes = require("./routes/user_profile_routes");

app.use(express.static(__dirname + "/public")); // If we have anything that needs to go in a public directory.

/**
 * Routes
 */

app.use(jam_session_routes);
app.use(message_routes);
app.use(review_routes);
app.use(media_routes);
app.use(post_routes);
app.use(user_routes);
app.use(profile_routes);

app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log(
    "Express started on http://localhost:" +
    PORT +
    "; press Ctrl-C to terminate."
  );
});
