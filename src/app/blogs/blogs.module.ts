import { NgModule } from '@angular/core';
import { BlogsComponent } from './blogs.component';
import { ReversePipe } from '../shared/reverse.pipe';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../routing/app-routing.module';

@NgModule({
  declarations: [
    BlogsComponent,
    ReversePipe
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ]
})
export class BlogsModule { }
