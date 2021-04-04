import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks-and-posts',
  templateUrl: './tasks-and-posts.component.html',
  styleUrls: ['./tasks-and-posts.component.css']
})
export class TasksAndPostsComponent implements OnInit {

  @Input() user: any = null;
  @Output()
  notify:EventEmitter<any> = new EventEmitter<any>();

  
  newTask : any = {title: '' , completed: false};
  newPost : any = {title: '', body: ''};

  newTaskToggle: boolean = false
  newPostToggle: boolean = false

  sub1: Subscription = new Subscription;
  sub2: Subscription = new Subscription;

  sub3: Subscription = new Subscription;
  sub4: Subscription = new Subscription;

  constructor(private userService: UserService) 
              { }

  ngOnInit(): void {
  }
  cancelTask(){
    this.newTaskToggle = false;
  }
  cancelPost(){
    this.newPostToggle = false;
  }


 addTask($title:string){

    this.newTask.title = $title;
     this.user.tasks.push(this.newTask);
     this.sub1 = this.userService.updateUser(this.user._id , this.user).subscribe((status) => {
       alert(status);
       this.notify.emit(true);
      this.newTaskToggle = false;});
    // this.sub2=  this.userService.getUser(this.User._id).subscribe(data => this.User = data )
  }
  
  completeTask(task:any){
   task.completed = true;
   this.sub1 = this.userService.updateUser(this.user._id , this.user).subscribe((status) => {
    alert(status);
    this.notify.emit(true);
   this.newTaskToggle = false;});
   
  }

  
  addPost($post:any){

    this.newPost = {...$post};
   // this.newPost.body = $post.body;
    this.user.posts.push(this.newPost);
    this.sub3 = this.userService.updateUser(this.user._id, this.user).subscribe((status) => {
        alert(status);
       this.newPostToggle = false;});

  }
 

  ShowNewTask()
  {
    this.newTaskToggle = true;
  }

  ShowNewPost()
  {
    this.newPostToggle = true;
  }

  ngOnDestroy()
  {
    if(this.sub1 != null)
    {
      this.sub1.unsubscribe();
    }

    if(this.sub2 != null)
    {
      this.sub2.unsubscribe();
    }

    if(this.sub3 != null)
    {
      this.sub3.unsubscribe();
    }

    if(this.sub4 != null)
    {
      this.sub4.unsubscribe();
    }
  }
  
}
