// the resolved data from the router needs to be injected into the controller
app.controller('homeCtrl', function ($scope, $stateParams, homeService, allData) {

  $scope.jazzData = allData['utahjazz'];
  $scope.lakerData = allData['losangeleslakers'];
  $scope.heatData = allData['miamiheat'];


});