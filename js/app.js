/**
 * Created by Winters on 5/5/14.
 */
var pageHub = angular.module("pageHub", ['ngRoute', 'ngResource'])
	.config(function($routeProvider){
		/*
		 * $routeProvider is an object with two methods:
		 * when - which allow us to define a route
		 * otherwise - which allow us to define default behavior.
		 */

//		$routeProvider.when('/hello', {
//			controller: helloCtrl,
//			templateUrl: 'hello.html'
//		}).when('/about', {
//			controller: aboutCtrl,
//			templateUrl: 'about.html'
//		}).otherwise({redirectTo: '/hello'});
	});
//	.run(function ($templateCache){
//		$templateCache.put('hello.html', '<h1>{{message}}!</h1>');
//		$templateCache.put('about.html', '<h1>About</h1><p>{{description}}</p>');
//	});



pageHub.controller("PageHubCtrl", function($scope, resourceAPI){

	/**
	 * $scope - service to communicating with a view. It's usually used by all controller
	 * $http - http requests services
	 * $q - a promise/deferred implementation service
	 * $log - javascript console. It takes care about browser differences as well.
	 * $window - window object
	 * $interval - window.setInterval
	 * $timeout - window.setTimeout
	 * **/

	$scope.title = "Hybird";
	$scope.layout = 'grid';
	$scope.order = '';
	$scope.favatarAPIKey = "2iy4ooxu37k0gw4wck84w8w8ckgc4wwc0s404400gsc400cows";
	$scope.pages = [
		{pageName:"Google", url:"https://www.google.com/"},
		{pageName:"Weibo", url:"http://www.weibo.com/"},
		{pageName:"Gmail", url:"http://www.gmail.com/"},
		{pageName:"cnBeta", url:"http://www.cnbeta.com/"},
		{pageName:"Linkedin", url:"http://www.linkedin.com/"},
		{pageName:"DigitalOcean", url:"http://www.digitalocean.com/"},
		{pageName:"Facebook", url:"https://www.facebook.com/"},
		{pageName:"Renren", url:"http://www.renren.com/"},
		{pageName:"Steam", url:"http://store.steampowered.com/"}
	];

	$scope.showPages = function (page){
		console.log(page);
	};

	$scope.mentionFavionCreator = function(siteUrl){
		return "http://favatar.mention.com/image?format=image&api_key=" + $scope.favatarAPIKey + "&url=" + siteUrl;
	};
	$scope.fviconFavionCreator = function(siteUrl){
		return "http://x.fvicon.com/" + siteUrl + "?canAudit=false";
	};
	$scope.googleFavionCreator = function(siteUrl){
		return "http://www.google.com/s2/favicons?domain=" + siteUrl;
	};



	resourceAPI.fetchData(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
//		$scope.pics = data;
	});

});

pageHub.filter("searchNameFor", function(){
	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){
			if(item.pageName.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
		});

		return result;
	};
});

pageHub.factory('resourceAPI', function($resource){

	return {
		fetchData: function(callback){
//			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
//				client_id: '642176ece1e7445e99244cec26f4de1f'
//			},{
//				// This creates an action which we've chosen to name "fetch". It issues
//				// an JSONP request to the URL of the resource. JSONP requires that the
//				// callback=JSON_CALLBACK part is added to the URL.
//
//				fetch:{method:'JSONP'}
//			});
//
//			api.fetch(function(response){
//				// Call the supplied callback function
//				callback(response.data);
//			});
		}
	}
});


/*
* @ngdoc directive
* @name customAttribute
* @param {expression} customAttribute
* */
pageHub.directive("customAttribute", function(){
	return {
		restrict: "A"
	}
});