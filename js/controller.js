angular.module('quoteBook').controller('mainController', function($scope, mainService){
  $scope.getQuotes = function(){
    $scope.quotes = mainService.getQuotes();
  }

  $scope.getQuotes();

  $scope.addQuote = function(){
    $scope.result = mainService.addQuote($scope.quoteText, $scope.authorText);
  }

  $scope.remove = mainService.removeQuote;


  // $scope.removeQuote = function(index){
  //   $scope.quotes.splice(index, 1)
  // }
})
