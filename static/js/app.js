var app = angular.module('PortfoApp', ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "/home",
    controller: "homeCtrl"
  })
  .when("/projects", {
    templateUrl: "/projects",
    controller: "projectsCtrl"
  })
  .when("/travel", {
    templateUrl: "/projects/travel",
    controller: "travelCtrl"
  })
  .when("/website-template", {
    templateUrl: "/projects/website-template",
    controller: "websiteTemplateCtrl"
  })
  .when("/video-collection", {
    templateUrl: "/projects/video-collection",
    controller: "videoCollectionCtrl"
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

app.controller("projectsCtrl", function ($scope, $http) {
  navActivePage();
  refresh();
})

app.controller("travelCtrl", function ($scope, $http) {
  navActivePage();
  refresh();
})

app.controller("websiteTemplateCtrl", function ($scope, $http) {
  navActivePage();
  refresh();
})

app.controller("videoCollectionCtrl", function ($scope, $http) {
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
