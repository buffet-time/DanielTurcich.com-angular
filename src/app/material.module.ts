import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule, 
    MatTabsModule
} from '@angular/material';


@NgModule({
  imports: [
	MatSidenavModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatInputModule,
	MatTabsModule
	],
  exports: [
	MatSidenavModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatInputModule,
	MatTabsModule
	],
})
export class MaterialModule { }