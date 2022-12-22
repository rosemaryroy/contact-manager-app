import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { Mygroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId: string = ''
  contact: MyContact = {} as MyContact
  groups: Mygroup[] = [] as Mygroup[]

  constructor(private activateRoute: ActivatedRoute, private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data: any) => {
      console.log(data['contactId']);
      this.contactId = data['contactId']
    })

    // call api for particular contact
    this.api.viewContact(this.contactId).subscribe(
      (data: any)=>{
        this.contact=data
        console.log(this.contact);    
    }
    )
    this.api.getAllGroups().subscribe(
      (data:any)=>{
        this.groups=data
        console.log(this.groups);
        
      }
    )
  }

  // update Contact
  updateContact(){
    // api call for update contact in the existing contact, arg: updated contact, contact id
    this.api.updateContact(this.contactId,this.contact).subscribe(
      (data:any)=>{
        this.router.navigateByUrl('')
      }
    )
  }
}
