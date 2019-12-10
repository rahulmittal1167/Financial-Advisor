import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { RestService } from 'app/rest.service';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form;


  

  
  constructor(private rs :RestService) {

   }

  ngOnInit() {

    this.form=new FormGroup(
      {
   
        // id:new FormControl(""),
         fname:new FormControl(""),
         email:new FormControl(""),
        
     

      })
  }

  onSubmit(myform)
  {

    console.log(myform);
    this.rs.postUser(myform)
    .subscribe(
      (response:any)=>{
        console.log('put successfully')
        alert("hello");
        this.form.reset();
      }

    )

  }




}
