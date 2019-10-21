import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import {  NavController, NavParams, ToastController, ModalController } from '@ionic/angular';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import {Location} from '@angular/common';



@Component({
  selector: 'app-signaturepage',
  templateUrl: './signaturepage.page.html',
  styleUrls: ['./signaturepage.page.scss'],
})
export class SignaturepagePage implements OnInit {

  @ViewChild(SignaturePad,{static:true}) public signaturePad:SignaturePad;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firestore: AngularFirestore, public sqliteService: SqliteProvider, private storage: AngularFireStorage, public toastCtrl: ToastController, /* private screenOrientation: ScreenOrientation */ private _location: Location, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  private signatureImage: string;
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': window.innerWidth * 0.90,
    'canvasHeight': window.innerHeight * 0.65,
    'margin-left': window.innerWidth * 0.05,
    'margin-right': window.innerWidth * 0.05
  };

  async drawComplete(){
    this.signatureImage = this.signaturePad.toDataURL();
    let ProjectId = this.sqliteService.GerProjectId();
    const filePath = `${ProjectId}/Firma del proyecto`;
    const pictures = this.storage.ref(filePath);
    var task = pictures.putString(this.signatureImage, 'data_url');

    const toast = await this.toastCtrl.create({
      message: 'Firma agregada satisfactoriamente.',
      duration: 3000
    });
    toast.present();
    /* this.navCtrl.pop(); 
    this._location.back();*/

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  
  }

  drawClear(){
    /* this.signaturePad.clear(); */
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  drawCancel(){
     /*  this.signaturePad.clear();
  this.navCtrl.pop(); 
    this._location.back();*/

    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
