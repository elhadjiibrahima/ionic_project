import { CatalogueComponent } from './catalogue/catalogue.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { ShareddirectivesModule } from './directives/shareddirectives.module';

@NgModule({
  declarations: [AppComponent,CatalogueComponent,DetailBurgerComponent,],
  imports: [
    BrowserModule, 
    IonicModule.
    forRoot(), 
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShareddirectivesModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
