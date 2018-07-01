//Specify myApp
var myApp = angular.module('myApp');

//Controller 
//$scope to connect the Angular system
//$routeParams to get the data
myApp.controller('GamesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log('GamesController ready...');

    //$scope to Get Games
    $scope.getGames = function(){
        $http.get("/api/games").then(function(response){
            $scope.games = response.data;
        });
    }
    
    //$scope to Get a single Game
    $scope.getGame = function(){
        var id = $routeParams.id;
        $http.get("/api/games/"+id).then(function(response){
            $scope.game = response.data;
        });
    }
    
    //$scope to Add a Game
    $scope.addGame = function(){
        console.log($scope.game);
            $http.post("/api/games/", $scope.game).then(function(response){
            window.location.assign('#/games/add');
        });
    }
    
    //$scope to Update a Game
    $scope.updateGame = function(){
            var id = $routeParams.id;
            $http.put("/api/games/"+id, $scope.game).then(function(response){
            window.location.assign('#/games');
        });
    }
    
    //$scope to Delete a Game
    $scope.removeGame = function(id){
            $http.delete("/api/games/"+id).then(function(response){
            window.location.assign('#/games');
        });
    }
    
    //$scope to Get a User
    $scope.getUser = function(){
        $http.get("/api/users/").then(function(response){
            $scope.users = response.data;
        });
    }
    
    //$scope to Add a User
    $scope.addUser = function(){
        console.log($scope.user);
            $http.post("/api/users/", $scope.user).then(function(response){
            window.location.assign('#/games');
        });
    }

}]);

