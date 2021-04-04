import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UserComponent } from './components/user/user.component';
import { TaskComponent } from './components/task/task.component';
import { PostComponent } from './components/post/post.component';
import { TasksAndPostsComponent } from './components/tasks-and-posts/tasks-and-posts.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserService } from 'src/app/services/user.service';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const appRoutes : Routes = 
                       [{path : "",component :MainpageComponent},
                       ]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UserComponent,
    TaskComponent,
    PostComponent,
    TasksAndPostsComponent,
    NewUserComponent,
    NewTaskComponent,
    NewPostComponent
  ],


  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,  
    RouterModule.forRoot(appRoutes),
    
    NoopAnimationsModule    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
