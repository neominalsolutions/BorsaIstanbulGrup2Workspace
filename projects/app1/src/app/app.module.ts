import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from '@neominal.solutions/lib1';
// import { Lib1Module } from 'lib1';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lib1Module, // workspace lib1 module import sanki npm üzerinden install etmiş gibi
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
