import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleFotoAvancePage } from './detalle-foto-avance.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleFotoAvancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleFotoAvancePage]
})
export class DetalleFotoAvancePageModule {}
