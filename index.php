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
	<img ng-src="{{country.flag}}" alt="{{country.name}}"/>
</div>
<div>
	<input type="text" ng-model="details.firstName"> <br/>
	{{details.firstName}}
</div>
<div>
	<table>
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Salary</th>
			</tr>
		</thead>		
		<tbody>
			<tr ng-repeat="employee in employees">
				<td>{{employee.firstName}}</td>
				<td>{{employee.lastName}}</td>
				<td>{{employee.Salary}}</td>
				<td>{{employee.likes}}</td>
				<td>{{employee.dislikes}}</td>				
				<td>
					<input type="button" value="Like" ng-click="incrementLikes(employee)"> 
				</td>
				<td>
					<input type="button" value="dislike" ng-click="incrementDislikes(employee)"> 
				</td>				
			</tr>
		</tbody>	
	</table>
</div>
</body>
</html>