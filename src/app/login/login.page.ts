import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { NavController } from '@ionic/angular';
//import { Storage } from '@ionic/storage';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  
  userName : string;
  userPassword : string;
  userInstitute : string;
  //private arrayData : any;
  userDatabase : any;
  userInsId:any;
  constructor(private httpClient: HttpClient, private navCtrl: NgxNavigationWithDataComponent) {}
  
  getLogin()
  {
    var flag = 'false';
    this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/login_credential.php?userInsId='+this.userInstitute)
    //.map((data) =>data.json())
    .subscribe(data => {

      //this.arrayData = data;
      
          if(data == null)
          {
            alert("Incorrect Institute Id");
          }
          else
          {
            flag = 'True';
            //alert("Institute Id Correct");
            let Db = 'ramin_ramanujan_';
            let customDatabase = Db.concat(this.userInstitute);
            let customUser = btoa(this.userName);
            let customPassword = btoa(this.userPassword);
            
            this.httpClient.get('https://www.ramanujan.in/RAMANUJAN_GURUCOOL/RAMANUJAN_APP/userProfile.php?userDatabase=' + customDatabase + '&customUser=' + customUser + '&customPassword=' +customPassword)
            .subscribe((data1) => {
              
             console.log(data1);
              if(data1 == null)
              {
                alert("You have entered wrong username and password");
              }
              else
              {
               // this.storage.set('UserDatabase', customDatabase);

                //this.navCtrl.navigate('/welcome');    
                this.navCtrl.navigate('welcome', {Databasename:customDatabase});
              }
            });

          }
          
    
    
      
    })
  }

    
  
}
