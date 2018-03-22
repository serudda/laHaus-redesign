import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconHelpCircle,
  IconX,
  IconCheck,
  IconHome,
  IconUsers,
  IconArrowRight,
  IconChevronDown,
  IconAlertTriangle
} from 'angular-feather';

const icons = [
  IconHelpCircle,
  IconX,
  IconCheck,
  IconHome,
  IconUsers,
  IconArrowRight,
  IconChevronDown,
  IconAlertTriangle
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: icons,
  declarations: []
})
export class IconsModule { }
