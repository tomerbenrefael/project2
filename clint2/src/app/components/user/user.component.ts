import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  @Input() user: any = {}
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  onUserSelected:EventEmitter<string> = new EventEmitter<string>();
  moreInfo: boolean = false


  sub1: Subscription = new Subscription;
  sub2: Subscription = new Subscription;
  sub3: Subscription = new Subscription;




  constructor(private userService: UserService) { }



  toggleInfo() {
    this.moreInfo = true
  }




  closeInfo() {
    this.moreInfo = false
  }

  selectUser(){
    this.onUserSelected.emit(this.user._id);
  }



  updateUser() {
    this.sub1 = this.userService.updateUser(this.user._id, this.user).subscribe(data => {
      console.log(data);
      //this.sub3 = this.userService.getUser(this.user._id).subscribe(refresh => this.user = refresh)
    })
  }




  deleteUser() {
    this.sub2 = this.userService.deleteUser(this.user._id).subscribe(data => {
      console.log(data)
      this.notify.emit(true);
    })
  }



  userTasksStatus(u: User) {
    let overAllTasks: boolean;
    let tasks: any[] = []

    u.tasks.forEach((t: { completed: any; }) =>
      tasks.push(t.completed)
    );
    overAllTasks = tasks.every(x => x === true)

    return overAllTasks
  }
 


  ngOnInit(): void {
    console.log(this.user);
  }




  ngOnDestroy() {
    if (this.sub1 != null) {
      this.sub1.unsubscribe()
    }

    if (this.sub2 != null) {
      this.sub2.unsubscribe()
    }

    if (this.sub3 != null) {
      this.sub3.unsubscribe()
    }
  }





}
