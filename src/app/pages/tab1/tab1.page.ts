import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  items = [];
  ip;
  ip2;
  token;
  public data:any;
  proyectos = [];

  constructor(public navCtrl: NavController, public http: Http, public sqliteService: SqliteProvider, private router: Router) { }

  ngOnInit() {
    this.getProjects(); 
  }

  getProjects(){
    this.ip = this.sqliteService.ip;
    this.ip2 = this.sqliteService.ip2;
    this.token = this.sqliteService.token;

    //let url = this.ip + "/projects/" + this.sqliteService.GerUserId();
    let url = this.ip2 + "/getProjectsAdminId?project_admin_user_id=" + this.sqliteService.GerUserId();
    console.log(this.sqliteService.GerUserId());
    let headers2 = new Headers();
    headers2.append('Accept','application/json');
    headers2.append('content-type','application/json');
    headers2.append('Authorization','Bearer ' + this.token);
    //console.log(this.token + "homepage");
    //console.log(headers2);
    this.http.post(url,{headers: headers2}).subscribe(data => {
      this.proyectos = data.json();
      console.log("proyectos: "+JSON.stringify(this.proyectos));
    });
  }


  itemSelected(proyecto) {
    //this.navCtrl.push(TaskPage, { proyecto: proyecto });

    this.router.navigate(['/menu/first/tab3' ,proyecto]);
  }



}
