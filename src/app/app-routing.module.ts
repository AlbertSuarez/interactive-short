import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndividualComponent } from './individual/individual.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  { path: '',           component: HomeComponent},
  { path: 'individual', component: IndividualComponent},
  { path: 'group',      component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
