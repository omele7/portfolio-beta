import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TablesComponent } from './pages/tables/tables.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent  },
    {path: 'dashboard', component: DashboardComponent  },
    {path: 'profile', component: ProfileComponent  },
    {path: 'tables', component: TablesComponent  },
    {path: '**', redirectTo: 'dashboard'},
];
