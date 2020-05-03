import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditsComponent } from './audits.component';


const routes: Routes = [
  {
    path: '',component:AuditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditsRoutingModule { }
