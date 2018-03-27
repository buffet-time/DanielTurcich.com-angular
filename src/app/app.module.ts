import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayContainer } from '@angular/cdk/overlay';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
    constructor(overlayContainer: OverlayContainer) 
    {
      overlayContainer.getContainerElement().classList.add('app-dark-theme');
    }
}