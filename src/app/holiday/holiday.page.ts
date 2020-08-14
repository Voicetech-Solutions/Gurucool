import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.page.html',
  styleUrls: ['./holiday.page.scss'],
})
export class HolidayPage  {
array1: any;
posts: any;
Database : any;

  constructor(private httpClient: HttpClient, private storage: Storage) {
    this.storage.get('UserDatabase').then((UserDatabase) => {
    let Db = UserDatabase;
    this.httpClient.get('http://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_holidays.php?Database='+Db)
    .subscribe
    ((data) =>{
      console.log(data);
        this.array1 = data;
		
    });
  });
   }

  

}
