import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreModule} from '@angular/fire/firestore' ;
import { Observable, Subscription } from 'rxjs';
import {Note} from '../models/note.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private noteCollection : AngularFirestoreCollection<Note>;
  public notes:Observable<Note[]>;
  private uid :string;
  private authStatus:Subscription;

  constructor(private afs:AngularFirestore, private afauth: AngularFireAuth) {
    //get the user auth status
    this.authStatus = afauth.authState.subscribe((user)=>{
      if(user){
        //get user ID
        this.uid= user.uid;
        //create the path
        let path = `notes/${this.uid}/usernotes`;
        //set collection
        this.noteCollection =afs.collection<Note>('notes')
      }
    })
    this.noteCollection = afs.collection<Note>('notes');
   }

   addNote(data:Note){
     this.noteCollection.add(data);
   }
}
