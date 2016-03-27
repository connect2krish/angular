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
		{firstName:"Krish", lastName:"Venkat", Salary:"100.88", likes:0, dislikes:0, dateOfBirth: new Date("January 20, 1984")},
		{firstName:"Tom", lastName:"Smith", Salary:"102.678", likes:0, dislikes:0, dateOfBirth: new Date("January 25, 1999")},
		{firstName:"Sara", lastName:"Gayle", Salary:"105", likes:0, dislikes:0, dateOfBirth: new Date("March 30, 1920")},
		{firstName:"Pat", lastName:"Hudson", Salary:"103", likes:0, dislikes:0, dateOfBirth: new Date("April 12, 1955")},
	];
	
	$scope.employees = employees;
	
	$scope.rowLimit=2;
	$scope.rowLimit1=2;
	$scope.sortElement="firstName";
	
	$scope.incrementLikes= function(employee) {
		employee.likes++;
	}
	
	$scope.incrementDislikes= function(employee) {
		employee.dislikes++;
	}	
});