import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'agents',
    loadChildren: () =>
      import('./pages/agents/agents.module').then((m) => m.AgentsModule),
  },
  {
    path: 'arsenal',
    loadChildren: () =>
      import('./pages/arsenal/arsenal.module').then((m) => m.ArsenalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
