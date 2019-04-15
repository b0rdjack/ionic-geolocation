import { Component } from '@angular/core';
// You may import any optional interfaces
import BackgroundGeolocation, {
  State,
  Config,
  Location,
  LocationError,
  Geofence,
  HttpEvent,
  MotionActivityEvent,
  ProviderChangeEvent,
  MotionChangeEvent,
  GeofenceEvent,
  GeofencesChangeEvent,
  HeartbeatEvent,
  ConnectivityChangeEvent
} from "cordova-background-geolocation-lt";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public platform: Platform) {
    platform.ready().then(this.configureBackgroundGeolocation.bind(this));
}
  // Like any Cordova plugin, you must wait for Platform.ready() before referencing the plugin.
  configureBackgroundGeolocation() {
    // 1.  Listen to events.
    BackgroundGeolocation.onLocation((location) => {
      BackgroundGeolocation.changePace(true).then(response => {
        console.log(response);
      });
      console.log('[onLocation] success: ', location);
    }, (error) => {
      console.log('[onLocation] ERROR: ', error);
    });

    // BackgroundGeolocation.onMotionChange(event => {
    //   console.log('[motionchange] - ', event.isMoving, event.location);
    // });

    BackgroundGeolocation.onHttp(response => {
      console.log('[http] - ', response.success, response.status, response.responseText);
    });

    // BackgroundGeolocation.onProviderChange(event => {
    //   console.log('[providerchange] - ', event.enabled, event.status, event.gps);
    // });

    // 2.  Configure the plugin with #ready
    BackgroundGeolocation.ready({
      reset: true,
      debug: true,
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      desiredAccuracy: 0,
      distanceFilter: 0,
      url: 'http://192.168.0.12:9000/locations',
      autoSync: true,
      stopOnTerminate: false,
      startOnBoot: true
    }, (state) => {
      console.log('[ready] BackgroundGeolocation is ready to use');
      if (!state.enabled) {
        // 3.  Start tracking.
        BackgroundGeolocation.start();
      }
    });
  }
}
