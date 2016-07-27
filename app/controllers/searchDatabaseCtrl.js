app.controller('searchDatabaseCtrl', function($scope, $q, $http, SearchDatabaseFactory) {

  $scope.movies = [];

  $scope.searchForMovies = function(moviesToSearch) {
    SearchDatabaseFactory.movieList(moviesToSearch).then(function(movieData){
      console.log('in the controller, I see movie data', movieData);
      $scope.movies = movieData.Search;
    })
  }
})
