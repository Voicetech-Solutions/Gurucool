import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';


@Component({
  selector: 'app-absentees',
  templateUrl: './absentees.page.html',
  styleUrls: ['./absentees.page.scss'],
})
export class AbsenteesPage {
  AttType : any;
  Database : any;
  PostData : any;
  SelectDate : any;
  getDate : any;
  posts: any;
  

  constructor(private httpClient: HttpClient, public navCtrl: NgxNavigationWithDataComponent) { }

  optionsFn(){
    //this.storage.get('UserDatabase').then((UserDatabase) => {
    let Db = this.navCtrl.get('Databasename');
    let DateSelected = this.SelectDate.split(['T'][0]);
    let Date = DateSelected[0]
     
    this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_absentees_data.php?AttType='+this.AttType + '&Database=' +Db + '&getDate=' +Date)
    .subscribe
    ((data) =>{
      console.log(data);
        this.PostData = data;
		
    });

    
  }
}
