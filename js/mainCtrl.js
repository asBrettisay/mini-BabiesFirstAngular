var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope) {
  $scope.friends = ['Ashleigh','Pepperoni','Mike','Daniel','Marlon','Cody']

  $scope.addFriend = function addFriend(friend) {
    $scope.friends.push($scope.friend.name)
    $scope.friend.name = '';
  }

});
