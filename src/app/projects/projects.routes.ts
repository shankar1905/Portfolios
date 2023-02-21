import { Routes, CanDeactivate } from '@angular/router';
// app
import { ProjectsComponent } from './projects.component';

export const ProjectsRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ProjectsComponent },
        ]
    }
];
