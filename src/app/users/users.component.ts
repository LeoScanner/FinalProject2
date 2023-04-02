import { Component, OnInit } from '@angular/core';
import { UserService } from '../servizio/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private userService: UserService){}
  salva : any; 


  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.salva = res;
      console.log(res)
    })
  }

  

}
