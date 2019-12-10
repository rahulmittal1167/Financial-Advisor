import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DbOperationsService {


  url:string="http://127.0.0.1:5000/users/";
  constructor( private http:Http) { }

  getItem(id)
  {
    return this.http.get(this.url+id).map(
      (response:any)=>response
    )
 
  }

  postUser(myform)
  {
    return this.http.get(this.url+"add?user_data="+myform)
    .map((response:any)=>response)
  }
  
}
