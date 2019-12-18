import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//need a way to access firebase auth and so import it in the constructor
  constructor( private afAuth: AngularFireAuth) { }

  signUp(email,password){
    return new Promise((resolve,reject)=> {
      this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((response)=>{
        resolve(response);
      })
      .catch((error)=>{
        reject(error)
      })
    })
  }
}
