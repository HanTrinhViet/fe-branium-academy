import {Routes} from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {CoursesComponent} from './view/courses/courses.component';
import {AboutUsComponent} from './view/about-us/about-us.component';
import {SignInComponent} from './view/sign-in/sign-in.component';
import {SignUpComponent} from './view/sign-up/sign-up.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
