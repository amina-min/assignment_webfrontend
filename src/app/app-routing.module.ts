import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path : "", component: LoginComponent},
  {path : "signup", component: SignupComponent},
  {path : "forgetpass", component: ForgetpasswordComponent},
  {path : "dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
