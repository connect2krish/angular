var myApp = angular.module("myModule", [])
.controller("myController", function($scope) {
		var self = this;
	    self.simulateQuery = false;
	    self.isDisabled    = false;
	    self.repos         = loadAll();
	    self.querySearch   = querySearch;
	    self.selectedItemChange = selectedItemChange;
	    self.searchTextChange   = searchTextChange;
	

    function querySearch (query) {
       var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
           deferred;
       if (self.simulateQuery) {
         deferred = $q.defer();
         $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
         return deferred.promise;
       } else {
         return results;
       }
     }
     function searchTextChange(text) {
       $log.info('Text changed to ' + text);
     }
     function selectedItemChange(item) {
       $log.info('Item changed to ' + JSON.stringify(item));
     }
     /**
      * Build `components` list of key/value pairs
      */
     function loadAll() {
       var repos = [
         {
           'name'      : 'Angular 1',
           'url'       : 'https://github.com/angular/angular.js',
           'watchers'  : '3,623',
           'forks'     : '16,175',
         },
         {
           'name'      : 'Angular 2',
           'url'       : 'https://github.com/angular/angular',
           'watchers'  : '469',
           'forks'     : '760',
         },
         {
           'name'      : 'Angular Material',
           'url'       : 'https://github.com/angular/material',
           'watchers'  : '727',
           'forks'     : '1,241',
         },
         {
           'name'      : 'Bower Material',
           'url'       : 'https://github.com/angular/bower-material',
           'watchers'  : '42',
           'forks'     : '84',
         },
         {
           'name'      : 'Material Start',
           'url'       : 'https://github.com/angular/material-start',
           'watchers'  : '81',
           'forks'     : '303',
         }
       ];
       return repos.map( function (repo) {
         repo.value = repo.name.toLowerCase();
         return repo;
       });
     }
     /**
      * Create filter function for a query string
      */
     function createFilterFor(query) {
       var lowercaseQuery = angular.lowercase(query);
       return function filterFn(item) {
         return (item.value.indexOf(lowercaseQuery) === 0);
       };
     }









	
	
	
	
	
	
	
	
	
	
	
	
	$scope.message = "This is angular test";

	$scope.details = {
		firstName: "Krish",
		lastName: "Venkat"
	};

	$scope.country = {
		name: "India",
		Currency: "Rupee",
		flag: "img/flag-india1.gif"
	};

	var employees = [
		{firstName:"Krish", lastName:"Venkat", Salary:"100.88", likes:0, dislikes:0, dateOfBirth: new Date("January 20, 1984")},
		{firstName:"Tom", lastName:"Smith", Salary:"102.678", likes:0, dislikes:0, dateOfBirth: new Date("January 25, 1999")},
		{firstName:"Sara", lastName:"Gayle", Salary:"105", likes:0, dislikes:0, dateOfBirth: new Date("March 30, 1920")},
		{firstName:"Pat", lastName:"Hudson", Salary:"103", likes:0, dislikes:0, dateOfBirth: new Date("April 12, 1955")},
	];

	$scope.employees = employees;

	var fields = [{
		id: "1",
		name: "name",
		display: true
		}, {
			id: "2",
			name: "email",
			display: true
		}, {
			id: "3",
			name: "employees",
			display: true
		}, {
			id: "4",
			name: "custom",
			display: true
	}];

	$scope.fields = fields;

	$scope.defaultField = fields[0];

	$scope.updateSelectField = function(fieldElement) {
		for(var i=0; i < $scope.fields.length; i++) {
			if (fieldElement.name == $scope.fields[i].name) {
				$scope.fields[i].display = false;
			}
		}
		console.log(fieldElement);
	};

	$scope.rowLimit=2;
	$scope.rowLimit1=2;
	$scope.sortElement="firstName";
	$scope.reverseSort=false;

	$scope.sortData = function(column) {
		$scope.reverseSort = ($scope.sortElement == column) ? !$scope.reverseSort : false;
		$scope.sortElement = column;
	}

	$scope.getSortClass = function(column) {
		if($scope.sortElement == column) {
			return $scope.reverseSort ? "arrow-down" : "arrow-up";
		}

		return "";
	}

	$scope.incrementLikes= function(employee) {
		employee.likes++;
	}

	$scope.incrementDislikes= function(employee) {
		employee.dislikes++;
	}
});
