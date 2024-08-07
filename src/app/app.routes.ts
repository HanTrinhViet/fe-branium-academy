import {Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {CoursesComponent} from './views/courses/courses.component';
import {AboutUsComponent} from './views/about-us/about-us.component';
import {SignInComponent} from './views/auth/sign-in/sign-in.component';
import {SignUpComponent} from './views/auth/sign-up/sign-up.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
