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
  MatDividerModule,
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
    MatDividerModule,
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
    MatDividerModule,
  ],
})
export class SharedModule {}
