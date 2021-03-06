import { EditpostComponent } from './views/editpost/editpost.component';
import { SanctumComponent } from './views/sanctum/sanctum.component';
import { CreatepostComponent } from './views/createpost/createpost.component';
import { AuthguardService } from './services/authguard.service';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent,     
  },
  {
    path: 'create',
    component:CreatepostComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'sanctum',
    component:SanctumComponent,
    canActivate: [AuthguardService]    
  },
  {
    path:'edit',
    component:EditpostComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
