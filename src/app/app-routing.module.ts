import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeHealthComponent } from './home-health/home-health.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{
		path: 'dashboard',
		component: DashboardComponent,
	},

	// { path:'', component:HomeHealthComponent},
	// { path: '', redirectTo: '/home-health', pathMatch: 'full' },
	// {
	// 	path: 'dashboard',
	// 	component: DashboardComponent
	// }
	{ path: '', redirectTo: '/home-health', pathMatch: 'full' }, // Default route
    { path: 'home-health', component: HomeHealthComponent },
    { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
