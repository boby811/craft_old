'use strict';

angular.module('craftApp')
    .controller('Cr_systemeController', function ($scope, $state, Cr_systeme, Cr_systemeSearch) {

        $scope.cr_systemes = [];
        $scope.loadAll = function() {
            Cr_systeme.query(function(result) {
               $scope.cr_systemes = result;
            });
        };
        $scope.loadAll();


        $scope.search = function () {
            Cr_systemeSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.cr_systemes = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.cr_systeme = {
                sy_nom_fr_fr: null,
                id: null
            };
        };
    });
