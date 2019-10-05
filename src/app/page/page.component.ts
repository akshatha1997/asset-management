import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
val:any;
result:any;
public data1;
  constructor( private http:HttpClient) {
  }
  ngOnInit() {
    this.data1 = JSON.parse(localStorage.getItem('data'));
   
  this.http.get('http://localhost:3000/posts').subscribe(data =>{
    this.val = data;
    })
 setTimeout(()=>{
   this.click(); 
 },2000)
}
click()
{
 for(var i=0;i<this.val.length;i++)
 {
   

   if(this.data1.modelNo ==this.val[i].modelNo)
   {
    
     this.result=this.val[i];
   }
 }
 console.log(this.result);
 }
}
