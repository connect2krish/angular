var myApp = angular.module("myModule", [])
.controller("myController", function($scope) {
	$scope.message = "This is angular test";
	
	$scope.details = {
		firstName: "Krish",
		lastName: "Venkat"
	};

	$scope.country ={
		name: "India",
		Currency: "Rupee",
		flag: "img/flag-india.gif"		
	};
	
	var employees = [
		{firstName:"Krish", lastName:"Venkat", Salary:"$100", likes:0, dislikes:0},
		{firstName:"Krish1", lastName:"Venkat1", Salary:"$101", likes:0, dislikes:0},
		{firstName:"Krish2", lastName:"Venkat2", Salary:"$102", likes:0, dislikes:0},
		{firstName:"Krish3", lastName:"Venkat3", Salary:"$103", likes:0, dislikes:0},
	];
	
	$scope.employees = employees;
	
	$scope.incrementLikes= function(employee) {
		employee.likes++;
	}
	
	$scope.incrementDislikes= function(employee) {
		employee.dislikes++;
	}	
});