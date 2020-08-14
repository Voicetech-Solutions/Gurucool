import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage  {
 

  constructor(public navCtrl: NavController) {
    
   }
   getLogout()
   {
    //this.navCtrl.navigateRoot('/home'); 
    var r  = window.confirm("Are you sure, you want to logout?");
    if(r == true)
    {
      this.navCtrl.navigateRoot('/home');   
    }
   }
  callAbsenteesData(){
    this.navCtrl.navigateRoot('/absentees'); 
  }
  callHolidayData(){
    this.navCtrl.navigateRoot('/holiday'); 
  }


}
