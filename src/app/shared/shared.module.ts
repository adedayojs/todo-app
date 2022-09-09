import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  exports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatTooltipModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
