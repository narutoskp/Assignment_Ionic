angular.module('Weather').factory('locatApi',['$http','$q',locatApi]);
	
	function locatApi($http,$q){
		
		function getWeather1(lat,lng){
			console.log("================");
			var deferred = $q.defer();
			$http.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20geo.placefinder%20where%20text=%22"+lat+","+lng+"%22%20and%20gflags=%22R%22")
			//$http.get("http://weather.yahooapis.com/forecastrss?w="+ woeid +"&u=c")
			.success(function(datalocat){
				deferred.resolve(datalocat);
			})
			.error(function(){
				console.log("Error");
				deferred.reject();
			});
			return deferred.promise;
		}
		return{
			
			getWeather1: getWeather1 // public: private
	};
}