import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:FormGroup
  constructor(private router:Router) { 
    this.signup = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      confirm: new FormControl()
    })
   }
  ngOnInit() {
  }
  open(values){
    console.log(values)
    if(values.password == values.confirm){
      localStorage.setItem('VAL', JSON.stringify(values));
      console.log("data stored locally" ,values)
        this.router.navigateByUrl("login")
    }
     else
  {
    alert("password & confirm password doesn't match")
  }
  }
}
