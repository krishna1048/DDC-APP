import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {SignaturePadModule} from 'angular2-signaturepad';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {Base64ToGallery} from '@ionic-native/base64-to-gallery/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SoundProviderService} from './sound-provider.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SignaturePadModule],
  providers: [SoundProviderService, AndroidPermissions, Base64ToGallery, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
