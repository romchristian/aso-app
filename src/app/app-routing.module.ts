import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'core', pathMatch: 'full' },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'socios',
    loadChildren: () =>
      import('./features/socios/socios.module').then((m) => m.SociosModule),
  },
  { path: '**', redirectTo: 'core' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
