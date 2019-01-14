import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from '../blogs/blogs.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'blogs', component: BlogsComponent },
      { path: '', redirectTo: 'blogs', pathMatch: 'full'},
      { path: '**', redirectTo: 'blogs', pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
