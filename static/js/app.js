var app = angular.module('PortfoApp', ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "/home",
    controller: "homeCtrl"
  })
  .when("/works", {
    templateUrl: "/works",
    controller: "worksCtrl"
  })
  .when("/work", {
    templateUrl: "/work",
    controller: "wokrCtrl"
  })
  .when("/about", {
    templateUrl: "/about",
    controller: "aboutCtrl"
  })
  .when("/contact", {
    templateUrl: "/contact",
    controller: "contactCtrl"
  })
  .when("/thankyou", {
    templateUrl: "/thankyou"
  })
}).run(function ($rootScope) {
})

app.controller("homeCtrl", function ($scope, $http) {
    type();
    movingBackgroundImage();
    refresh();
    $("#footer").hide();
})

app.controller("worksCtrl", function ($scope, $http) {
  navActivePage();
  refresh();
})

app.controller("workCtrl", function ($scope, $http) {
  navActivePage();
  refresh();
})

app.controller("aboutCtrl", function ($scope, $http) {
  navActivePage();
  refresh();
})

app.controller("contactCtrl", function ($scope, $http) {
  navActivePage();
  refresh();
  $scope.form = {}

  $scope.submit = function() {
    $http.post("/submit_form", $scope.form)
      .then(function success(response) {
        window.location.href = "#!thankyou"
      }, function error(response) {
        alert("Something went wrong")
      });
  }
})
