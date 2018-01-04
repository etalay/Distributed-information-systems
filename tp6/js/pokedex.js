var pokeApp = angular.module('pokedex', [ 'ngResource' ]);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config([ '$resourceProvider', function($resourceProvider) {
	$resourceProvider.defaults.stripTrailingSlashes = false;
} ]);

// création d'un service factory
pokeApp.factory('pokefactory', function($resource) {
	return $resource('http://pokeapi.co/api/v2/pokemon/:id');
});

pokeApp.service('pokeService', function($resource) {

	this.setId = function(idp) {
		this.id = idp
	};
	this.getId = function() {
		return this.id;
	};
	this.setName = function(name2) {
		this.name = name2
	};
	this.getName = function() {
		return this.name;
	};

});
// $resource
pokeApp.controller('pokeServiceController', function($scope, pokeService,
		pokefactory, $http) {

	pokeService.setId(8);

	$scope.pake = pokefactory.get({
		id : pokeService.getId()
	});
	console.log($scope.pake);
	
	// recupération des données via $http
	$http.get("http://pokeapi.co/api/v2/pokedex/1").then(function(response) {
		$scope.pokemons = response.data.pokemon_entries;
	});

	// affichage du information du pokémon selectionné en cas de click sur le
	// bouton go

	$scope.afficher = function() {
		$scope.pake2 = $scope.selected;
	};
	
	// mettre à jour les information des pokémons en modifiant le l
	$scope.$watch('selected', function(value) {
		$scope.pokemonselected = value;
	});

}).directive('pokedex', function() {
    return {
        restrict: 'E',
        templateUrl: 'pokedex.html'
      };
    });;

pokeApp.controller('PokeController', [ '$scope', '$log', '$http',
		function($scope, $log, $http) {
			// recuperations des pokemonspar le service $http

			$scope.log = $log;

			// $scope.listPoke = [ {
			// "id" : 1,
			// "name" : "Pikachu"
			//
			// },
			// {
			// "id" : 2,
			// "name" : "Bulbizarre"
			// },
			// {
			// "id" : 3,
			// "name" : "Carabaffe"
			// },
			// {
			// "id" : 4,
			// "name" : "Tortank"
			// },
			// {
			// "id" : 5,
			// "name" : "Caninos"
			// }
			//
			// ];

		} ]);
