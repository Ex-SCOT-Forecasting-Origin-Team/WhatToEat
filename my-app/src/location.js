export function geoFindMe() {
  var latitude;
  var longitude;
    function success(position) {
      latitude  = position.coords.latitude;
      longitude = position.coords.longitude;
      return [latitude, longitude]
    }
    function error() {
      latitude = -1;
      longitude = -1;
    }
    
    if (!navigator.geolocation) {
      latitude = -2;
      longitude = -2;
    } else {
      latitude = -1;
      longitude = -1;
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
 