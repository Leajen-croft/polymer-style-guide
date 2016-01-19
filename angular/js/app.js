var app = angular.module('styleGuide', []);
app.controller('primaryColourController', function($scope, $http) {
  $http.get('json/primary-colours.json').success(function(data) {
    $scope.primaryColours = data;
  });
});
app.controller('secondaryColourController', function($scope, $http) {
  $http.get('json/secondary-colours.json').success(function(data) {
    $scope.secondaryColours = data;
  });
});
app.controller('buttonController', function($scope, $http) {
  $http.get('json/buttons.json').success(function(data) {
    $scope.buttons = data;
  });
});
app.controller('inputController', function($scope, $http) {
  $http.get('json/text-inputs.json').success(function(data) {
    $scope.inputs = data;
  });
});
