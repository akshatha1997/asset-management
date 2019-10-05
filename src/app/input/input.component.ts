import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  assetmanage:FormGroup
  public data1;
  constructor(public router:Router, private http:HttpClient) {
    this.assetmanage = new FormGroup({
      serialNo:new FormControl(),
      type:new FormControl(),
      modelNo:new FormControl(),
      manufacturingDate:new FormControl(),
      assignedTo:new FormControl(),
      assignedDate:new FormControl()
    })
    }
  ngOnInit() {
  }
  Submit(data){
    let body = {
      serialNo : data.serialNo,
      type : data.type,
      modelNo : data.modelNo,
      manufacturingDate : data.manufacturingDate,
      assignedTo : data.assignedTo,
      assignedDate : data.assignedDate,

    }
    this.http.post('http://localhost:3000/posts',body).subscribe(data =>{
      console.log(data);
    })
  }
next(){
  this.router.navigateByUrl("search");
}
}
