export default angular.module('app.service', [])
    .service('UserService', function ($http) {
        this.login = function (user) {
            $http.post('http://localhost:8080/user/login', user)
                .then(function ({data}) {
                    console.log(data);
                })
        };
        this.register = function (user) {
            $http.post('http://localhost:8080/user/register', user)
                .then(function ({data}) {
                    console.log(data);
                })
        }
    })
    .name;