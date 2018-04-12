import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
} from '@angular/material';


@NgModule({
  imports: [
	MatSidenavModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule
	],
  exports: [
	MatSidenavModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule
	],
})
export class MaterialModule { }