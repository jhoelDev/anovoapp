import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  users: any;
  hi:string;
  constructor(public navCtrl: NavController,public userService: UserServiceProvider) {
    
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data;
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )

  }

}
