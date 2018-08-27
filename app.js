var express = require('express');

var app = express();

app.set('view engine','ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// Routes

// home
// app.get('/', function(req, res) {
//     // res.send("This is a server response on the home page");
//     res.render('home', {
//         title : "Star Wars Movies",
//         // movies: ["The First Movie","The Second Movie","The Third Movie"]
//     });
// });

// movie_single
// app.get('/star_wars_episode/:episode_number?', function(req, res) {
//     // res.send("This is a server response on the darth page");
//     var episode_number= req.params.episode_number;
//     res.send("This is the page for episode" + episode_number)
// });

// notFound

// app.get('*', function(req, res){
//     res.send("This is not the page that you are looking for");
// });

// home
app.get('/', routes.home);
    
// movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//  notFound

app.get('*', routes.notFound);


// app.listen(3000, function(){
//     console.log("The application is running at localhost:3000");
// });

app.listen(process.env.PORT || 3000);

