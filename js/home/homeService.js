angular.module('nbaRoutes').service('homeService', function($http, $q, teamService){
  this.getAllData = function(){
    var deferred = $q.defer();
    var promiseGroup = {
      utahjazz: teamService.getTeamData('utahjazz'),
      losangeleslakers: teamService.getTeamData('losangeleslakers'),
      miamiheat: teamService.getTeamData('miamiheat')  
    };
    $q.all(promiseGroup)
    .then(function(result){
        deferred.resolve(result);
    });
    return deferred.promise;
  };
});