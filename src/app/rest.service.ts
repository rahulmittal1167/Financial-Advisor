import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
url:string="http://localhost:3000/users/";
role:string;

constructor(private http:Http) { 

}


getItem(id)
{
  return this.http.get(this.url+id).map(
    (response:any)=>response
  )

}
postUser(myform)
{
  console.log('put successfully');
  
  return this.http.post(this.url,JSON.stringify(myform))
  .map((response:any)=>response)
}
}
