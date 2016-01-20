angular.module('Weather').factory('weatherApi',['$http','$q',weatherApi]);
	
	function weatherApi($http,$q){
		
		function getWeather(idw){
			console.log("==============");
			var deferred = $q.defer();
			$http.get("https://weather.yahooapis.com/forecastrss?w="+idw+"&u=c")
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(){
				console.log("Error");
				deferred.reject();
			});
			return deferred.promise;
		}
		return{
			
			getWeather: getWeather // public: private
	};
}