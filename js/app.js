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

app.controller('PizzaCtrl', ['$scope', function($scope) {

  $scope.rheinos = [];
  $scope.result = '';

  var sumPostOrder = function(i) {
    if (i > $scope.rheinos.length-1) {
      return 0.0;
    }
    var leftChildIdx = i*2 + 1;
    var rightChildIdx = i*2 + 2;
    var rheino = $scope.rheinos[i];
    if (leftChildIdx < $scope.rheinos.length) {
      rheino.leftChild = $scope.rheinos[leftChildIdx];
      rheino.leftAmount = sumPostOrder(leftChildIdx);
    } else {
      rheino.leftChild = null;
      rheino.leftAmount = 0.0;
    }
    if (rightChildIdx < $scope.rheinos.length) {
      rheino.rightChild = $scope.rheinos[rightChildIdx];
      rheino.rightAmount = sumPostOrder(rightChildIdx);
    } else {
      rheino.rightChild = null;
      rheino.rightAmount = 0.0;
    }
    return rheino.leftAmount + rheino.rightAmount + rheino.amount;
  };

  $scope.add = function() {
    $scope.rheinos.push({name: 'Rheino', amount: 1.99});
  };

  $scope.add();

  $scope.generate = function() {
    var sum = sumPostOrder(0);
    var result = 'digraph ahu {\n  node [color=navy, style=filled, fontcolor=white];\n  edge [dir=back]\n  labelloc="t";\n  label="Total: '+ sum.toFixed(2) + '";\n';
    for (var i = 0; i < $scope.rheinos.length; i++) {
      var rheino = $scope.rheinos[i];
      rheino.nodeId = 'n' + i;
      result += '\n  ' + rheino.nodeId + ' [label="' + rheino.name + '\\n' + rheino.amount.toFixed(2) + '"]';
    }
    result += '\n';
    for (var i = 0; i < $scope.rheinos.length; i++) {
      var rheino = $scope.rheinos[i];
      if (rheino.leftChild !== null) {
        result += '\n  ' + rheino.nodeId + ' -> ' + rheino.leftChild.nodeId + '[label="' + rheino.leftAmount.toFixed(2) + '"]';
      }
      if (rheino.rightChild !== null) {
        result += '\n  ' + rheino.nodeId + ' -> ' + rheino.rightChild.nodeId + '[label="' + rheino.rightAmount.toFixed(2) + '"]';
      }
    }
    result += '\n}';
    $scope.result = result;
  };

}]);

angular.bootstrap(document, ['rheinosApp'], {strictDi: true});
