import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import { UserService } from 'src/app/services/user.service'
import {Post} from 'src/app/models/post';
import {Task} from 'src/app/models/task';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {



  sub1: Subscription = new Subscription;

  users : User[] = [];

  searchUser : string='';

  TasksAndPosts : boolean = false;

  newUser : boolean = false;

  currentUser : any = null;
  




  constructor(private UserService: UserService, private Router : Router) { }


  ngOnInit(): void {
    this.getAll()
  }
  addNewUserUI(){
    this.newUser = true;
  }

  onUserSelected($id:string){
    this.users = this.users.map((user)=>{
      let u = user;
      u.selected = u._id === $id;
      return u;

    })
    this.currentUser = this.users.filter((user)=>user.selected===true)[0];
    console.log(this.currentUser);
  }

  onNotify($event:boolean){
    if($event){
      this.getAll();
    } 
    this.newUser = false;
  }
  getAll() {
    this.sub1 = this.UserService.getAllUsers().subscribe(data => 
      {
        this.users = data.map((user)=>{
         let u = user;
         if(u){
          u.completed = !(u.tasks.filter(g=>g.completed === false).length > 0);
         }
         return u;
        
        })
      })
  }



  async filterUser()
  {
    if(this.searchUser!=='')
      {
        this.users = this.users.filter((user)=>{
          return user.name.includes(this.searchUser) || user.email.includes(this.searchUser);
        })
        console.log(this.users);
        console.log(this.searchUser);
      }
      else
      {
        this.getAll()
      }

  }

  visibleTasksPosts(user: User)
  {
    this.TasksAndPosts = true
    this.currentUser = user
  }
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }




}
