'use strict';

angular.module('craftApp')
    .controller('Cr_corps_elementController', function ($scope, $state, Cr_corps_element, Cr_corps_elementSearch) {

        $scope.cr_corps_elements = [];
        $scope.loadAll = function() {
            Cr_corps_element.query(function(result) {
               $scope.cr_corps_elements = result;
            });
        };
        $scope.loadAll();


        $scope.search = function () {
            Cr_corps_elementSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.cr_corps_elements = result;
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
            $scope.cr_corps_element = {
                ce_quantite: null,
                id: null
            };
        };
    });
