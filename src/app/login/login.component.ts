import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup
  constructor(public router:Router) {
    this.login = new FormGroup({
      email:new FormControl(),
      password:new FormControl()
    })
    }
  ngOnInit() {
   
  }
  doLogin(data){
      let data1 = JSON.parse(localStorage.getItem('VAL'));
      let em = data1.email;
      let ps = data1.password;
      
        if(em == data.email && ps==data.password){
          alert("login Successfully");
          this.router.navigateByUrl("inp");
        }
        else{
          alert("please check email and password")
        } 
  }
}
