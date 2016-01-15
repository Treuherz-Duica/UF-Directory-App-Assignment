angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {};
    $scope.oldListing = {};
    $scope.currentDetail = {};
    $scope.var = $scope.listings.length;
    $scope.showDets = true;
    $scope.hideAdd = true;
    $scope.hideEdit = true;


    $scope.addListing = function() {
      $scope.listings.push($scope.newListing);
      $scope.newListing = {};
      $scope.showDets = true;
      $scope.hideAdd = true;
    };

    $scope.clearForm = function(){
      $scope.showDets = true;
      $scope.hideAdd = true;
      $scope.hideEdit = true;
      $scope.newListing = {};
    }

    // I am passing in the object rather than the index because when a filter is
    // applied the index in ng-repeat will not match the index in listings.
    $scope.deleteListing = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.listings.splice(index, 1);
      if(listing == $scope.currentDetail)
        $scope.currentDetail = {};
    };

    $scope.showDetails = function(listing) {
      var index = $scope.listings.indexOf(listing);
      $scope.currentDetail = $scope.listings[index];
    };

    $scope.editListing = function(listing){

      $scope.showDets = false;
      $scope.hideEdit = false;
      $scope.hideAdd = true;
      var index = $scope.listings.indexOf(listing);
      $scope.oldListing = $scope.listings[index];
    }
    $scope.finishEdit = function(){
      $scope.oldListing = {};
      $scope.showDets = true;
      $scope.hideEdit = true;
    }
  }
]);
