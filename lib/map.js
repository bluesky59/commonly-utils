const qq = window.qq;
const carUrl = require('...');
import GPS from './gps';
class _TMap {
  constructor() {
    this.mapObj = null;
    this.markers = [];
    this.icon = '';
  }

  // 初始化地图
  init(options) {
    this.mapObj = new qq.maps.Map(document.getElementById(options.container), {
      center: new qq.maps.LatLng(options.lonlat.lat, options.lonlat.lon),
      zoom: options.zoom,
      zoomControlOptions: {
        position: qq.maps.ControlPosition.LEFT_BOTTOM,
        style: qq.maps.ZoomControlStyle.DEFAULT,
      },
      mapTypeControl: false,
    });
  }

  marker(locations) {
    for (const i in this.markers) {
      this.markers[i].setMap(null);
    }
    for (const i in locations) {
      const location = locations[i];
      if (location.latitude && location.longitude) {
        const latitude = location.latitude,
          longitude = location.longitude,
          latlon = GPS.gcj_encrypt(latitude, longitude),
          anchor = new qq.maps.Point(9, 8),
          size = new qq.maps.Size(50, 28),
          origin = new qq.maps.Point(0, 0);
        this.icon = new qq.maps.MarkerImage(carUrl, size, origin, anchor);
        const marker = new qq.maps.Marker({
          position: new qq.maps.LatLng(latlon.lat, latlon.lon),
          map: this.mapObj,
        });
        marker.setIcon(this.icon);
        this.markers.push(marker);
      }
    }
  }
}

export default new _TMap();
