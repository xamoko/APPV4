import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FotosEvidenciaTareaPage } from './fotos-evidencia-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: FotosEvidenciaTareaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FotosEvidenciaTareaPage]
})
export class FotosEvidenciaTareaPageModule {}
