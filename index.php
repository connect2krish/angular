<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script src="js/testmodule1.js"></script>
</head>
<body ng-app="myModule" ng-controller="myController">
It just works. {{10 + 30}}
<br/>
<div>
	Name property: {{ {name:'test', age:'100'}.name}} <br/>
	Array: {{ ['test1', 'test2'][1]}}
</div>
<div>
	{{message}} 
</div>
<div>
	{{details.lastName}} 
</div>
<div>
	{{country.name}} <br/>
	<img ng-src="{{country.flag}}" alt="{{country.name}}" height="50px" width="75px"/>
</div>
<div>
	<input type="text" ng-model="details.firstName"> <br/>
	{{details.firstName}}
</div>
<div>
	<input type="number" step="1" min="0" max="5" ng-model="rowLimit">	
	<table>
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Salary</th>
				<th>Date of Birth (dd-mm-yyyy)</th>				
			</tr>
		</thead>		
		<tbody>
			<tr ng-repeat="employee in employees | limitTo:rowLimit | orderBy: 'firstName' : true"> <!-- true = descending , false and default is ascending-->
				<td>{{employee.firstName | uppercase}}</td>
				<td>{{employee.lastName | lowercase}}</td>
				<td>{{employee.Salary | number:2 | currency:"$":1}}</td>
				<td>{{employee.likes}}</td>
				<td>{{employee.dislikes}}</td>				
				<td>
					<input type="button" value="Like" ng-click="incrementLikes(employee)"> 
				</td>
				<td>
					<input type="button" value="dislike" ng-click="incrementDislikes(employee)"> 
				</td>				
				<td>{{employee.dateOfBirth | date:"dd-MM-yyyy"}}</td>				
			</tr>
		</tbody>	
	</table>
</div>
<div>
	<input type="number" step="1" min="0" max="5" ng-model="rowLimit1">	
	<table>
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Salary</th>
				<th>Date of Birth (dd-mm-yyyy)</th>				
			</tr>
		</thead>		
		<tbody>
			<tr ng-repeat="employee in employees | limitTo:rowLimit1 | orderBy: '+firstName'"> <!-- - = descending , + and default is ascending-->
				<td>{{employee.firstName | uppercase}}</td>
				<td>{{employee.lastName | lowercase}}</td>
				<td>{{employee.Salary | number:2 | currency:"$":1}}</td>
				<td>{{employee.likes}}</td>
				<td>{{employee.dislikes}}</td>				
				<td>
					<input type="button" value="Like" ng-click="incrementLikes(employee)"> 
				</td>
				<td>
					<input type="button" value="dislike" ng-click="incrementDislikes(employee)"> 
				</td>				
				<td>{{employee.dateOfBirth | date:"dd-MM-yyyy"}}</td>				
			</tr>
		</tbody>	
	</table>
</div>
<br/>Sort dropdown
<div>
	<select ng-model="sortElement">
		<option value="firstName">First Name ASC</option>
		<option value="lastName">Last Name ASC</option>
		<option value="-dateOfBirth">Date Of Birth DESC</option>
		<option value="-Salary">Salary DESC</option>
	</select>
	<table>
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Salary</th>
				<th>Date of Birth (dd-mm-yyyy)</th>				
			</tr>
		</thead>		
		<tbody>
			<tr ng-repeat="employee in employees | orderBy: sortElement"> <!-- - = descending , + and default is ascending-->
				<td>{{employee.firstName | uppercase}}</td>
				<td>{{employee.lastName | lowercase}}</td>
				<td>{{employee.Salary | number:2 | currency:"$":1}}</td>
				<td>{{employee.likes}}</td>
				<td>{{employee.dislikes}}</td>				
				<td>
					<input type="button" value="Like" ng-click="incrementLikes(employee)"> 
				</td>
				<td>
					<input type="button" value="dislike" ng-click="incrementDislikes(employee)"> 
				</td>				
				<td>{{employee.dateOfBirth | date:"dd-MM-yyyy"}}</td>				
			</tr>
		</tbody>	
	</table>
</div>
</body>
</html>