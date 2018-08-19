import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	MatSidenavModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule 
{
    constructor(overlayContainer: OverlayContainer) 
    {
      overlayContainer.getContainerElement().classList.add('app-dark-theme');
    }
}