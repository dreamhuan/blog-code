export default angular.module('app.controller', [])
    .controller('appCtrl', function ($scope, UserService) {
        $scope.user = {
            name: 123,
            pwd: 123
        };
        $scope.login = function () {
            UserService.login($scope.user);
        };
        $scope.register = function () {
            UserService.register($scope.user);
        };
    })
    .name;