import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-daily-expense',
  templateUrl: './daily-expense.component.html',
  styleUrls: ['./daily-expense.component.css']
})
export class DailyExpenseComponent implements OnInit {

  name;
  form;


  constructor() { }

  ngOnInit() {

    this.form=new FormGroup(
      {
        name:new FormControl("")
   
      })
    }

    onSubmit(myform)
    {
      let name=myform['name'];

      console.log(name);
    
    }





}
