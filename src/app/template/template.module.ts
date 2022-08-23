// Modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';

//Components

import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { SwitchesComponent } from './switches/switches.component';

// Directives

import { CustomMinDirective } from './directives/custom-min.directive';


@NgModule({
  declarations: [
    BasicsComponent,
    DynamicsComponent,
    SwitchesComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
