import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BindingEventsComponent } from './features/binding-events/binding-events.component';
import { BindingPropertyComponent } from './features/binding-property/binding-property.component';
import { InterpolationComponent } from './features/interpolation/interpolation.component';
import { NgModelComponent } from './features/ng-model/ng-model.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: HomeComponent },
  { path: 'bindingProperty', component: BindingPropertyComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'bindingEvents', component: BindingEventsComponent },
  { path: 'ngModel', component: NgModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
