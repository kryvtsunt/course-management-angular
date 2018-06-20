//Install express server
const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '/dist/tk-course-management-angular')));

app.get('*', function(req,res) {

res.sendFile(path.join(__dirname, '/dist/tk-course-management-angular/index.html'));
});

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 4200;
app.listen(PORT, function(){
    console.log("Our app is running on port" + PORT)
