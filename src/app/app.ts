import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {Users} from './users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

  user:any = [];
  constructor(private users:Users,private http:HttpClient){}

  ngOnInit(){
    this.users.getUsers().subscribe((data)=>{
      this.users = data;
    },error=>{
      alert("Error fetching users")
    }
  )
  }


}
