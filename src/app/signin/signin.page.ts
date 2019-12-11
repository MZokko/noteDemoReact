import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
//reference to the modal controller add in the constructor
  constructor( private modal:ModalController) { }

  ngOnInit() {
  }

  signIn(){}

  async signUp(){
    const signUpModal = await this.modal.create({
      component:SignupPage
    });
    signUpModal.onDidDismiss().then((response)=>{
      //handle sign up response
      console.log(response)
    })
    await signUpModal.present();
  }

}
