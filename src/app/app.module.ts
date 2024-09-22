import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';

@NgModule({
  declarations: [AppComponent,MisDatosComponent ]
  ,
  imports: [BrowserModule, IonicModule.forRoot({ innerHTMLTemplatesEnabled: true }), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
