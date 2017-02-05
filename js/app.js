var app = angular.module('rheinosApp', []);

app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}]);

app.controller('NewsfeedCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.news = [];

  $http.get('https://api.skymatic.de/fb/RheinosBonn/latestPosts.php')
  .then(function(successResponse) {
    $scope.news = successResponse.data;
  }, function(errorResponse) {
    console.warn('Payment failed.', errorResponse.data);
    $scope.news = [];
  });

}]);
