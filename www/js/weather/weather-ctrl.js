angular.module('Weather').controller('WeatherCtrl', ['$stateParams','locatApi','weatherApi',WeatherCtrl]); 

	function WeatherCtrl($stateParams,locatApi,weatherApi) {
		var vm = this;
		
		console.log("stateParams:" + $stateParams.idw);

		weatherApi.getWeather($stateParams.idw).then(function(data){
			var x2js = new X2JS();
			var json = x2js.xml_str2json(data);
			console.log(json);
			vm.weather = json;
		});
	}
	

	