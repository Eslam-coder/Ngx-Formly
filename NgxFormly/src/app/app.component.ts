import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Contact } from './models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgxFormly';
  contactForm :FormGroup;
  contactModel : Contact;
  contactFields : Array<FormlyFieldConfig>
  constructor() {
    this.contactForm = new FormGroup({});
    this.contactModel = new Contact();
    this.contactFields = this.contactModel.formFields();
    // [
    //   //<label>name</label>
    //   //<input type="text" placeholder="enter name" required>
    //   {
    //     key:'name',
    //     type:'input',
    //     templateOptions:{
    //       type:'text',
    //       //label:'Name',
    //       placeholder:'enter name',
    //       required:true
    //     },
    //     validation:{
    //       messages:{
    //         required:'you need to provide a name!'
    //       }
    //     }
    //   },
    //   {
    //     key:'phoneNumber',
    //     type:'input',
    //     templateOptions:{
    //       type:'tel',
    //       //label:'phoneNumber',
    //       placeholder:'enter phoneNumber',
    //       required:true
    //     },
    //     validation:{
    //       messages:{
    //         required:'you need to provide a phoneNumber!'
    //       }
    //     }
    //   },
    //   {
    //     key:'email',
    //     type:'input',
    //     templateOptions:{ 
    //       type:'email',
    //       //label:'email',
    //       placeholder:'enter email',
    //       required:true
    //     },
    //     validation:{
    //       messages:{
    //         required:'you need to provide a email!'
    //       }
    //     }
    //   }
    // ]
  }

  Submit(contact:Contact){
    console.log(contact);
  }
}

