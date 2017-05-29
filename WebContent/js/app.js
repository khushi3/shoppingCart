var app = angular.module ("shoppingApp", []);
app.controller('shoppingController', ['$scope', function($scope){
	
	$scope.products = [ "dress material", "shoes", "bags"];
	$scope.addItems = function() {
		
		$scope.products.push($scope.shoppingItem);
	}
	$scope.removeItems = function(items) {
		$scope.products.splice(items,1);
	}
	
}])