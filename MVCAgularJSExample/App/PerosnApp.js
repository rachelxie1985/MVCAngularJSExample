var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.title = "Person Table";
    $scope.person = [{ "Name": "Andy", "Address": "1 Highway", "PhoneNumber": "12345" },
                      { "Name": "Jackie", "Address": "2 Highway", "PhoneNumber": "54321" },
                    { "Name": "Rachel", "Address": "3 Highway", "PhoneNumber": "22222" }];
});