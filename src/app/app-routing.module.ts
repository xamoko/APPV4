import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  /* { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)}, */
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'descripcion-tarea', loadChildren: './pages/descripcion-tarea/descripcion-tarea.module#DescripcionTareaPageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'avance-tarea', loadChildren: './pages/avance-tarea/avance-tarea.module#AvanceTareaPageModule' },
  { path: 'evidencia-tarea', loadChildren: './pages/evidencia-tarea/evidencia-tarea.module#EvidenciaTareaPageModule' },
  { path: 'detalle-foto-avance', loadChildren: './pages/detalle-foto-avance/detalle-foto-avance.module#DetalleFotoAvancePageModule' },
  { path: 'fotos-evidencia-tarea', loadChildren: './pages/fotos-evidencia-tarea/fotos-evidencia-tarea.module#FotosEvidenciaTareaPageModule' },
  { path: 'detalle-fotos-evidencia-tarea', loadChildren: './pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.module#DetalleFotosEvidenciaTareaPageModule' },
  { path: 'signaturepage', loadChildren: './pages/signaturepage/signaturepage.module#SignaturepagePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
