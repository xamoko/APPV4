import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvanceTareaPage } from './avance-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: AvanceTareaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvanceTareaPage]
})
export class AvanceTareaPageModule {}
