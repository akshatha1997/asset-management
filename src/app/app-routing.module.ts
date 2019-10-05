import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InputComponent } from './input/input.component';
import { SearchComponent } from './search/search.component';
import { PageComponent } from './page/page.component';




const routes: Routes = [
{path:'',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'inp', component:InputComponent},
{path:'search',component:SearchComponent},
{path:'res',component:PageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
