import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconHelpCircle, IconX, IconCheck } from 'angular-feather';

const icons = [
  IconHelpCircle, IconX, IconCheck
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: icons,
  declarations: []
})
export class IconsModule { }
