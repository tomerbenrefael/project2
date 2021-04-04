import { Component, Input, OnInit ,EventEmitter,Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task';
import {User} from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
   task: any;

  @Output()
   notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  setToCompletedTask() {
    this.notify.emit(this.task._id);
    //window.location.reload();
  }

}
