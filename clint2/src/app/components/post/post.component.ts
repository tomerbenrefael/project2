import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
   post: Post = new Post;

  @Input() user:any;
  constructor() { }

  ngOnInit(): void {
  }

}
