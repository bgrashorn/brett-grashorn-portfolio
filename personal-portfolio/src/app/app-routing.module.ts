import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
{
  path: '',
  component: BaseLayoutComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
      title: 'Brett Grashorn: Home'
    },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Brett Grashorn: Home'
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'Brett Grashorn: About'
    },
    {
      path: 'projects',
      component: ProjectsComponent,
      title: 'Brett Grashorn: Projects'
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
