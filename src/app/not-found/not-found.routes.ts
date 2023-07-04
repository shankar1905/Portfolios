import { Routes, CanDeactivate } from '@angular/router';
// app
import { NotFoundComponent } from './not-found/not-found.component';

export const Not_FoundRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: NotFoundComponent },
        ]
    }
];
