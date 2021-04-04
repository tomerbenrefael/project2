import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:7000/api/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }


 // Get all users

  getAllUsers() {
    return this.http.get<User[]>(this.url);
  }


 // Get user

  getUser(userId: string)
   {
    return this.http.get<User>(`${this.url}/${userId}`);
  }



  // Create

  addUser(userData: User)
   {
    return this.http.post<User>(this.url, userData);
  }


 // Update user

  updateUser(userId: string, userData: User)
   {
    return this.http.put<User>(`${this.url}/${userId}`, userData);
  }



// Delete user

  deleteUser(userId: string)
   {
    return this.http.delete<User>(`${this.url}/${userId}`);
  }




// Search

  async search(search: string)
  
  {
    let all = await this.http.get<any[]>(this.url).toPromise()
    
    let result: any[] = []
    all.forEach(user => 
      {
        if(user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))
        {
          result.push(user)
        }
      })
    return result;
  }



  
 // Error handling 
 errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}


}