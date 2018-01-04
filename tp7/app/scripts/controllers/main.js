'use strict';

/**
 * @ngdoc function
 * @name tp7sirApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp7sirApp
 */
angular.module('tp7sirApp')
        .controller('MainCtrl', function ($scope, $http, ajout) {


            // recupération des données via $http
            $http.get("http://localhost:9000/rest/person/").then(function (response) {
                $scope.persons = response.data;
            });

            $scope.ajouter = function () {
                if ($scope.name != undefined && $scope.firstName != undefined) {
                    var add = new ajout();
                    add.name = $scope.name;
                    add.firstName = $scope.firstName;
                    console.log(add);
                    add.$save(add);
                    alert("l'insertion a bien été effectuée !");
                } else {
                    alert("veuillez remplir les deux champs");
                }

            };
        });
// creation d'un service ajout pour ajouter une personne
angular.module('tp7sirApp').factory('ajout', ['$resource', function ($resource) {
        return $resource("http://localhost:9000/rest/person");
    }]);