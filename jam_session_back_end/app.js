var express = require("express"); // We are using the express library for the web server
var app = express(); // We need to instantiate an express object to interact with the server in our code
var PORT = 8000;
var cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Import our routes
const jam_session_routes = require("./routes/jam_sessions_routes");


app.use(express.static(__dirname + "/public")); // If we have anything that needs to go in a public directory.

/**
 * Routes
 */

app.use(jam_session_routes);

app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log(
    "Express started on http://localhost:" +
    PORT +
    "; press Ctrl-C to terminate."
  );
});
