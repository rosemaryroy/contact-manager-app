import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MyContact} from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl:string = 'http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }

  // function to get all contacts
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl)
  }

  // function for a particular contactid
  viewContact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }
  // function to get particular group
  getGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }
  // function to fetch all groups from http://localhost:3000/groups
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }

  // function for adding new contact to server
  addContact(contactBody:any){
    return this.http.get(this.baseUrl,contactBody)
  }

}
