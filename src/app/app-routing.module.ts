import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagesComponent } from './Components/stages/stages.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: StagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
