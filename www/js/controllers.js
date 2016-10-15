angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$location,$http) {
   
 // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

$scope.create = function() {

  $http.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(function(value) {
        $scope.search = value.data;
   //     alert(value.data);
    });
$location.path("/app/browse"); 
//alert("working");
  
};

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistsCtrl', function($scope,$http) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

// .controller('CameraCtrl',function($ionicModal,$scope,$timeout,$location,$cordovaCamera){
  
//   // $scope.pictureUrl = "http://placehold.it/350x150";
  
//   $scope.takePicture = function(){
//     var options ={
//       destinationType: Camera.DestinationType.DATA_URL,
//       encodingType: Camera.EncodingType.JPEG,

      
//     }
//       $cordovaCamera.getPicture(options)
//       .then(function(data) {
//         consol.log('camera data:' +  angular.toJson(data));
//         $scope.pictureUrl = 'data:image/jpeg;base64,' +data;
//         },function(err) {
//         consol.log('camera error:' +  angular.toJson(data));
//         });

    
//   };
// })

.controller("ExampleController", function ($scope,$cordovaCamera) {
 
                $scope.takePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
                   })

.controller('RideCtrl', function($scope, $location, $cordovaGeolocation) {
     $scope.takeGPS = function () {
$scope.lat="";
$scope.long="";
    $cordovaGeolocation
        .getCurrentPosition()
        .then(function (position) {
           
            $scope.lat  = position.coords.latitude
            $scope.long = position.coords.longitude
            
             }, function(err) {
            // error
            alert('code: '    + err.code    + '\n' +
                'message: ' + err.message + '\n');
        });

    // begin watching
    // var watch = $cordovaGeolocation.watchPosition({ frequency: 1000 });
    // watch.promise.then(function() { /* Not  used */ },
    //     function(err) {
    //         // An error occurred.
    //         alert('code: '    + err.code    + '\n' +
    //             'message: ' + err.message + '\n');
    //     },
    //     function(position) {
    //         // Active updates of the position here
    //         // position.coords.[ latitude / longitude]
    //         // var element = document.getElementById('geolocation');
    //         // $scope. element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
    //         //     'Longitude: ' + position.coords.longitude     + '<br />' +
    //         //     'Timestamp: ' + position.timestamp + '<br />' +
    //         // '<hr />'      + element.innerHTML;
    //     });
    // clear watch
    $cordovaGeolocation.clearWatch(watch.watchID);
  }
  })








.controller('PlaylistCtrl', function($scope, $stateParams) {
});
