import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:FormGroup
  public data1;
  public result: any;
  constructor(public router:Router) {
    this.search = new FormGroup({
      modelNo:new FormControl()
    })
  }
  ngOnInit() {
  }
  Submit(values){
  localStorage.setItem('data', JSON.stringify(values));
  this.router.navigateByUrl('res');
}
}

