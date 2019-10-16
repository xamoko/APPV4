import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FirstWithTabsPage } from './first-with-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: FirstWithTabsPage,

    children: [
      {
        path: 'tab1',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab1/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
      {
        path:'tab3',
        loadChildren:'../tab3/tab3.module#Tab3PageModule'
      },
      {
        path:'descripcion-tarea',
        loadChildren:'../descripcion-tarea/descripcion-tarea.module#DescripcionTareaPageModule'
      },
      {
        path:'avance-tarea',
        loadChildren:'../avance-tarea/avance-tarea.module#AvanceTareaPageModule'
      },
      {
        path:'detalle-foto-avance',
        loadChildren:'../detalle-foto-avance/detalle-foto-avance.module#DetalleFotoAvancePageModule'
      },
      {
        path:'evidencia-tarea',
        loadChildren:'../evidencia-tarea/evidencia-tarea.module#EvidenciaTareaPageModule'
      },
      {
        path:'fotos-evidencia-tarea',
        loadChildren:'../fotos-evidencia-tarea/fotos-evidencia-tarea.module#FotosEvidenciaTareaPageModule'
      },
      {
        path:'detalle-fotos-evidencia-tarea',
        loadChildren:'../detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.module#DetalleFotosEvidenciaTareaPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstWithTabsPage]
})
export class FirstWithTabsPageModule {}
