import { Routes, CanDeactivate } from '@angular/router';
// app
import { ContactUsComponent } from './contact-us.component';

export const ContactUsRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ContactUsComponent },
        ]
    }
];
