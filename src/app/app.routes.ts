import { Routes } from '@angular/router';
import {MainPanelComponent} from './core/main-panel/main-panel.component';

export const AppRoutes: Routes = [{


    path: '',
    component: MainPanelComponent,
    children: [
        {
            path: '',
            loadChildren: () =>
            import("./dashboard/dashboard.module").then(m => m.DashboardModule),
          },
          {
            path: 'about',
            loadChildren: () =>
            import("./about/about.module").then(m => m.AboutModule),
          },
          {
            path: 'contact_us',
            loadChildren: () =>
            import("./contact-us/contact-us.module").then(m => m.ContactUsModule),
          },
          {
            path: 'projects',
            loadChildren: () =>
            import("./projects/projects.module").then(m => m.ProjectsModule),
          },
          {
            path: 'dashboard',
            loadChildren: () =>
            import("./dashboard/dashboard.module").then(m => m.DashboardModule),
          },
    ]
}]