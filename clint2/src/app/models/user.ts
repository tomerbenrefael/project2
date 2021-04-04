import {Post} from './post';
import {Task} from './task';

  


export interface User {
 _id : string, 
 name: string,
 email:string,
 tasks:any[],
 posts: any[],
 street?: string,
 city?: string,
 zipcode?: number,
 completed?: boolean,
 selected?:boolean
}
