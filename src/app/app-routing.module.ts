import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministratorComponent } from './administrator/administrator.component';

const routes: Routes = [
  {
    path: '', component: MainContainerComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full', },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'administrator', component: AdministratorComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
