import { Routes, CanDeactivate } from '@angular/router';
// app
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: DashboardComponent },
        ]
    }
];
