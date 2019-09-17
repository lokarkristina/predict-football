import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import {
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatChipsModule,
  MatRippleModule,
  MatToolbarModule,
  MatMenuModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatRippleModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    CommonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatRippleModule,
    MatToolbarModule,
    MatMenuModule,
  ],
})
export class SharedModule {}
