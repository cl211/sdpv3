class GeolocCtrl {
  static IID: string = "GeolocCtrl";
  static $inject: Array<string> = [];
  constructor() {

  }
}
angular.module("sdp").controller(GeolocCtrl.IID, GeolocCtrl);
