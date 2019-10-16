import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EvidenciaTareaPage } from './evidencia-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: EvidenciaTareaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EvidenciaTareaPage]
})
export class EvidenciaTareaPageModule {}
