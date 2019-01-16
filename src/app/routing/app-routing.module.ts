import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from '../blogs/blogs.component';
import { BlogComponent } from '../blogs/blog.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'blogs', component: BlogsComponent },
      { path: 'blogs/:id',
        component: BlogComponent } // needs a guard
    ]),
    RouterModule.forRoot([
      { path: '', redirectTo: 'blogs', pathMatch: 'full'},
      { path: '**', redirectTo: 'blogs', pathMatch: 'full'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
