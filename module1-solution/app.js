(function () {
'use strict';
 
angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.status = "";
  $scope.quantity = 0 ; 
  $scope.warning="";
  
  $scope.colorWarning="";
  $scope.colorStatus="";
  $scope.colorNormal="";
  $scope.colorTextbox="";

  var lista = [];
  var x =0 ;

   var myRed = {
        "color" : "FireBrick",
        "background-color" : "red",
        "font-size" : "20px",
        "padding" : "20px",
        "border-radius": "25px",
        "border": "solid 2px black",
        "width": "400px"
    };

    var myGreen = {
        "color" : "LimeGreen",
        "background-color" : "green",
        "font-size" : "20px",
        "padding" : "20px",
        "border-radius": "25px",    
        "border": "solid 2px black",    
        "width": "200px"
       
    };

    var textboxGreen ={
       "color" : "LimeGreen",
       "box-shadow": "0 0 3px LawnGreen"
       
    };

     var textboxRed = {
       "color" : "DarkRed",
       "box-shadow": "0 0 3px Red"
    };


    var myWhite = {
        "color" : "black",
        "background-color" : "white",
        "border-radius": "25px",
        "border-color" :"black", 
        "border-width" :"thin medium thick 10px",
        "width": "400px"
       
    };

 	$scope.colorNormal=myWhite;


  $scope.addLunch = function () {

	if ($scope.lunch.trim() == "") {
		$scope.status ="Please enter data first"; 
		$scope.colorStatus= myRed;
		$scope.colorTextbox = textboxRed;
 
	
	} else {

		 		$scope.status ="";
			
		 
				lista[x]= $scope.lunch.trim();

				++ $scope.quantity ; 

				if ( $scope.quantity <=3  ){
						$scope.warning ="Enjoy!";
						$scope.colorWarning= myGreen;
						$scope.colorTextbox = textboxGreen;

				}else {
						$scope.warning ="Too much!";
						$scope.colorWarning = myGreen;
						$scope.colorTextbox = textboxGreen;
				}
		  
	    		$scope.status += $scope.returnList(lista) ;
	    		$scope.colorStatus= myWhite;
				console.log($scope.returnList(lista));
	    		x++; 


	}


	
	
  }; //final addLunch


$scope.returnList = function (lista) {
	var len,text="";

		   		for (var i = 0; i < lista.length; i++) {
      			text += lista[i] + ", ";
    			} 
    		return text;
}


}

})();
