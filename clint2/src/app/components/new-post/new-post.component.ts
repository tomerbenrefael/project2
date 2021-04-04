import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor() { }
  @Output() onNewPost:EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter();

  title:string= '';
  body:string = '';

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit();
  }
  add(){
    this.onNewPost.emit({title:this.title,body:this.body});
  }

}
