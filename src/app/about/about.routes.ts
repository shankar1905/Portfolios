import { Routes, CanDeactivate } from '@angular/router';
// app
import { AboutComponent } from './about.component';

export const AboutRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: AboutComponent },
        ]
    }
];
