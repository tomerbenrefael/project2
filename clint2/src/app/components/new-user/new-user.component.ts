import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgZone } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  sub1: Subscription = new Subscription;

  newUser: User ={name:'',email:'',_id:'',tasks:[],posts:[]};

  cancelnewuser: boolean = false;

  constructor(private userService: UserService) { }

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {

   }


  cancelAdd() {
    this.notify.emit(false);
  }



  addNewUser() {
    this.sub1 = this.userService.addUser(this.newUser)
      .subscribe(status => {
        this.notify.emit(true);
       
      })
  }



  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
