import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOneComponent } from './home-one/home-one.component';

const routes: Routes = [
  {
    path:'home-style-1',
    component:HomeOneComponent,
    title:'Planète des Montres',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
