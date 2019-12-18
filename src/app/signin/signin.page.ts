import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupPage } from '../signup/signup.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
//reference to the modal controller add in the constructor
  constructor( private modal:ModalController, private auth:AuthService) { }

  ngOnInit() {
  }

  signIn(){}

  async signUp(){
    const signUpModal = await this.modal.create({
      component:SignupPage
    });

    signUpModal.onDidDismiss()
    .then((response)=>{
      //handle sign up response
      const email = response.data.email;
      const password = response.data.password;

      this.auth.signUp(email,password)
      .then((userData)=>{
        //sign up success
      })
      .catch((error)=>{
        //handle error
      })
    })
    await signUpModal.present();
  }

}
