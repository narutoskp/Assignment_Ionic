angular.module('Weather').controller('locatCtrl', ['$scope','locatApi','$state', locatCtrl]); 

function locatCtrl($scope,locatApi,$state){
	var idw = this;
	
	$scope.onClicked = function(lat,lng){

		console.log(lat,lng);					
			locatApi.getWeather1(lat,lng).then(function(datalocat){
				var x2js = new X2JS();
				var json = x2js.xml_str2json(datalocat);
				console.log(json.query.results.Result.woeid);
				idw.weather1 = json.query.results.Result.woeid;
				console.log(idw);

				console.log("ID: "+ idw.weather1);
				$state.go('weather',{idw: idw});	
	 	})		


		// $state.go('weather',{Woeid: id.weather});
		//alert("lat:" + lat + "lng:" + lng);
		//alert("กรุณารับค่าใหม่");
	};
	
}