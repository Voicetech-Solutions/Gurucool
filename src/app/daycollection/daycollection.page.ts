import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-daycollection',
  templateUrl: './daycollection.page.html',
  styleUrls: ['./daycollection.page.scss'],
})
export class DaycollectionPage{
  Database : any;
  PostData : any;
  PostData1 : any;
  PostData2 : any;
  PostData3 : any;
  PostData4 : any;
  PostData5 : any;
  PostData6 : any;
  SelectDate : any;
  getDate : any;
  posts: any;
  AcademicFleet : any;
  Reserved : any;
  constructor(private httpClient: HttpClient, public navCtrl: NgxNavigationWithDataComponent) { }
  datefn(){
    
      let Db =  this.navCtrl.get('Databasename');
      let DateSelected = this.SelectDate.split(['T'][0]);
      let Date = DateSelected[0]
      //console.log(Date);
      //console.log(Db);
      this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_feedaycollection_data.php?Database=' +Db + '&getDate=' +Date)
      .subscribe
      ((data) =>{
        //console.log(data[0]);
          this.PostData = data;
      
      });
      
      this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_fleetdaycollection_data.php?Database=' +Db + '&getDate=' +Date)
      .subscribe
      ((data) =>{
        //console.log(data[0]);
          this.PostData1 = data;
      
      });
    
  }
  getToInfo(){
      let Db  = this.navCtrl.get('Databasename');
      let AcademicFleet = "Academic";
      let DateSelected = this.SelectDate.split(['T'][0]);
      let Date = DateSelected[0]
     // console.log(Date);
      //console.log(Db);
      console.log(AcademicFleet);
      this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_feefleet_daycollection_data.php?Database=' +Db + '&getDate=' +Date + '&DayFeeType=' + AcademicFleet)
      .subscribe
      ((data) =>{
        //console.log(data[0]);
          this.PostData2 = data;
      });
    
  }
  getToInfo1(){
    
      let Db  = this.navCtrl.get('Databasename');
      let AcademicFleet = "Fleet";
      let DateSelected = this.SelectDate.split(['T'][0]);
      let Date = DateSelected[0]
      //console.log(Date);
      //console.log(Db);
      //console.log(AcademicFleet);
      this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_feefleet_daycollection_data.php?Database=' +Db + '&getDate=' +Date + '&DayFeeType=' + AcademicFleet)
      .subscribe
      ((data) =>{
        //console.log(data[0]);
          this.PostData3 = data;
      });
  
  }
  getAmountDetail(){
   
      let Db  = this.navCtrl.get('Databasename');
      let AcademicFleet = "Academic";
      let Reserved = "N38";
      let DateSelected = this.SelectDate.split(['T'][0]);
      let Date = DateSelected[0]
      //console.log(Date);
      //console.log(Db);
      this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_feefleet_daycollectiondetails_data.php?Database=' +Db + '&getDate=' +Date + '&DayFeeType=' + AcademicFleet + '&Reserved=' + Reserved)
      .subscribe
      ((data) =>{
        //console.log(data[0]);
          this.PostData4 = data;
      });
    
  }
  getFleetAmountDetail(){
    
      let Db  = this.navCtrl.get('Databasename');
      let AcademicFleet = "Fleet";
      let Reserved = "N38";
      let DateSelected = this.SelectDate.split(['T'][0]);
      let Date = DateSelected[0]
     // console.log(Date);
     // console.log(Db);
      this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_feefleet_daycollectiondetails_data.php?Database=' +Db + '&getDate=' +Date + '&DayFeeType=' + AcademicFleet + '&Reserved=' + Reserved)
      .subscribe
      ((data) =>{
        //console.log(data[0]);
          this.PostData5 = data;
      });
    
  }
  getAcademicInfo(){
      let Db  = this.navCtrl.get('Databasename');
      let DateSelected = this.SelectDate.split(['T'][0]);
      let Date = DateSelected[0]
      console.log(Date);
      console.log(Db);
      this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/get_acdemic_data.php?Database=' +Db + '&getDate=' +Date)
      .subscribe
      ((data) =>{
        console.log(data[0]);
          this.PostData6 = data;
      });
    
  }
}
