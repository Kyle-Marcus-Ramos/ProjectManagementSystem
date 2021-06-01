import { Routes } from '@angular/router';

import { ProjectComponent } from './project.component';

export const ProjectRoutes: Routes = [
  {

    path: '',
    children: [{
      path: 'project',
      component: ProjectComponent
    }]
  }
];
