angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SummaryCtrl', function($scope) {
    
  //TODO create a service to catch this from database or somewhere
  $scope.currency="euro";
  $scope.expenses = [
    { title: 'Shop', val: 200 , date: new Date('2014', "8", "16")},
    { title: 'Wife', val: 300 , date: new Date('2014', "8", "16")},
    { title: 'School', val: 250, date: new Date('2014', "8", "16")},
    { title: 'Rent', val: 450, date: new Date('2014', "8", "16")}
  ];
    
    $scope.earnings = [
        { title : "salary", val : 1200, date: new Date('2014', "8", "16")},
        { title : "sister", val : 20, date: new Date('2014', "8", "16")},
        { title : "bonus", val : 500, date: new Date('2014', "8", "16")}
    ];
    
    $scope.getExpenses = function(){
        var totalExpenses=0;
        for(var i=0; i < $scope.expenses.length; i++){
            totalExpenses = totalExpenses + $scope.expenses[i].val;
        }
        return totalExpenses;
    };
    
    $scope.getEarnings = function(){
        var totalEarnings=0;
        for(var i=0; i < $scope.earnings.length; i++){
            totalEarnings = totalEarnings + $scope.earnings[i].val;
        }
        return totalEarnings;
    };
    
    $scope.getBalance = function(){
        var balance=0;
        return $scope.getEarnings() - $scope.getExpenses();
    };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
