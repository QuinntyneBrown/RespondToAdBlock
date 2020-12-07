import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TurnOffAdBlockerComponent } from './turn-off-ad-blocker/turn-off-ad-blocker.component';
import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TurnOffAdBlockerComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: AppModule.onLaunch, multi: true, deps: []}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  static onLaunch() {
    return function() {
      (<any>window).blockAdBlock.onNotDetected(() => {
        console.log("Ad Block not detected...")
      });

      (<any>window).blockAdBlock.onDetected(() => {
        console.log("Ad Block detected...")
      });
    }
  }
}
