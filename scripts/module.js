angular.module('attendanceApplication',['ngRoute'])

	.config(function ($routeProvider) {
    	$routeProvider
    	.when('/', {
        	templateUrl: 'views/home.html',
        	controller: 'HomeController'
      	})
      .when('/attendance', {
          templateUrl: 'views/attendance.html',
          controller: 'AttendanceController'
        })
      .when('/login', {
          templateUrl: 'views/signin.html'
        })
      .otherwise({
        	redirectTo: '/'
      	});
  });