import { Component } from '@angular/core';
//import { NavController } from '@ionic/angular';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage  {
  Data : any;

  constructor(public navCtrl: NgxNavigationWithDataComponent) {
   // const Database = this.navCtrl.get('Databasename');
   }

  
   getLogout()
   {
    
    var r  = window.confirm("Are you sure, you want to logout?");
    if(r == true)
    {
      this.navCtrl.navigate('/home');   
    }
   }
   
  callAbsenteesData(){
    this.Data = this.navCtrl.get('Databasename');
    this.navCtrl.navigate('absentees', {Databasename:this.Data}); 
  }
  callHolidayData(){
    this.Data = this.navCtrl.get('Databasename');
    this.navCtrl.navigate('holiday', {Databasename:this.Data}); 
  }
  callDaycollectionData()
  {
    this.Data = this.navCtrl.get('Databasename');
    this.navCtrl.navigate('daycollection', {Databasename:this.Data});  
  }
  callTimeTableData(){
    this.Data = this.navCtrl.get('Databasename');
    this.navCtrl.navigate('timetable', {Databasename:this.Data}); 
  }



}
