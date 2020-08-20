import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.page.html',
  styleUrls: ['./holiday.page.scss'],
})
export class HolidayPage  {
array1: any;
posts: any;
Database : any;

  constructor(private httpClient: HttpClient, public navCtrl: NgxNavigationWithDataComponent) {
   // this.storage.get('UserDatabase').then((UserDatabase) => {
    let Db = this.navCtrl.get('Databasename');
    this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_holidays.php?Database='+Db)
    .subscribe
    ((data) =>{
      console.log(data);
        this.array1 = data;
		
    });
  
   }

  

}
