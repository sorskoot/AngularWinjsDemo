
(function () {
    angular.module(appConfig.appName).controller("colorDetailsController", colorDetailsController);

    colorDetailsController.$inject = ['colourLoversAPI', '$routeParams'];
    
    function colorDetailsController(colourLoversAPI, $routeParams) {
        var vm = this;
        
        colourLoversAPI.getColorById($routeParams.colorId).then(function (result) {
            vm.data = result[0];
        })
        /*
id Unique id for this Color 
title Title / Name of the Color CDATA 
userName Username of the Color's creator CDATA 
numViews Number of views this Color has received 
numVotes Number of votes this Color has received 
numComments Number of comments this Color has received 
numHearts Number of hearts this Color has 
rank This Color's rank on COLOURlovers.com 
dateCreated Date this Color was created 
hex This Color's hex value 
rgb RGB breakdown of this Color 
     red Red value 
     green Green value 
     blue Blue value 
hsv HSV breakdown of this color 
     hue Hue value 
     saturation Saturation value 
     value Value / Balance value 
description This Color's description CDATA 
url This Color's COLOURlovers.com URL CDATA 
imageUrl Link to a png version of this Color CDATA 
badgeUrl Link to a COLOURlovers.com badge for this Color CDATA 
apiUrl This Color's COLOURlovers.com API URL CDATA 

         */
    };
})();