var moviesJSON = require('../movies.json');

// home
exports.home = function(req, res) {
    // res.send("This is a server response on the home page");
    var movies = moviesJSON.movies;
    res.render('home', {
        title : "Star Wars Movies",
        movies: movies
        // movies: ["The First Movie","The Second Movie","The Third Movie"]
    });
};

// movie_single
exports.movie_single = function(req, res) {
    // res.send("This is a server response on the darth page");
    var episode_number= req.params.episode_number;
    // res.send("This is the page for episode" + episode_number)
    var movies = moviesJSON.movies;

    if(episode_number>= 1 && episode_number<=6){

    var movie = movies[episode_number - 1];

    var title = movie.title;

    var main_characters = movie.main_characters;

    res.render('movie_single', {
        movies: movies,
        title: title,
        movie: movie,
        main_characters: main_characters
        });
    } else {
        // res.send("<h1>This is not the page you are looking for.</h1>");
        res.render('notFound', {
            movies: movies,
            title: "This is not the page you are looking for."
        });
    }
};
// notFound

exports.notFound = function(req, res){
    // res.send("This is not the page that you are looking for");
    var movies = moviesJSON.movies;
    res.render('notFound', {
        movies: movies,
        title: "This is not the page you are looking for."
    });
};