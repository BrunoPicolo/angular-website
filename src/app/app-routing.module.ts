import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutPageComponent } from './features/about-page/about-page.component'
import { SkillsPageComponent } from './features/skills-page/skills-page.component'
import { ProjectsPageComponent } from './features/projects-page/projects-page.component'

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'projects', component: ProjectsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
