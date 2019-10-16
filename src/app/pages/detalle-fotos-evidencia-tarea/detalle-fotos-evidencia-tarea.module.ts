import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleFotosEvidenciaTareaPage } from './detalle-fotos-evidencia-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleFotosEvidenciaTareaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleFotosEvidenciaTareaPage]
})
export class DetalleFotosEvidenciaTareaPageModule {}
