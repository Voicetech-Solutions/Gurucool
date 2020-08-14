import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


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
  

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  optionsFn(){
    this.storage.get('UserDatabase').then((UserDatabase) => {
    let Db = UserDatabase;
    let DateSelected = this.SelectDate.split(['T'][0]);
    let Date = DateSelected[0]
      console.log(Db);
      console.log(this.AttType);
      console.log(Date);
    this.httpClient.get('http://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_absentees_data.php?AttType='+this.AttType + '&Database=' +Db + '&getDate=' +Date)
    .subscribe
    ((data) =>{
      console.log(data);
        this.PostData = data;
		
    });
  });
    //this.httpClient.get('https://api.whatsapp.com/send?phone=8962130923&text=Text%20message%20content')
  }
}
