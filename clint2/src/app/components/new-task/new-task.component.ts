import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Output()
  onNewTask:EventEmitter<string> = new EventEmitter<string>();
  @Output()
  onCancel = new EventEmitter();
  constructor() { }
  title:string="";

  ngOnInit(): void {
  }
  add(){
    this.onNewTask.emit(this.title);
  }
  cancel(){
    this.onCancel.emit();
  }

}
