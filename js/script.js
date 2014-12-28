

var MainController = function($scope, $http){
	
	var onUserComplete = function(response) {
		
		$scope.user = response.data;
	}
	
	$scope.message = "Hello Shubham!";
	$http.get("https://api.github.com/users/robconery").then(onUserComplete);
	
	
	
	
};