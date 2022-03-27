import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('inputText') inputText!: ElementRef;
  @ViewChild('inputNo') inputNo!: ElementRef;
  error:any=false;
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

    // if(this.inputText){
    //   this.inputText.addEventListener('keydown', function(event:any){
    //     if((/\d/g).test(event.key)) event.preventDefault();
    //   })
    // }
  }

  Submit(contact:Contact){
    console.log(contact);
  }

  enterText(event:any){
    console.log(event);
    
    this.inputText.nativeElement.addEventListener('keydown', function(event:any){
        if((/\d/g).test(event.key)) event.preventDefault();
      })
  }
  
  enterNo(event:any){
    this.inputNo.nativeElement.addEventListener('keydown',(event:any)=>{
      if(!(/^(?:[1-9]|\d\d\d*)$/).test(event.key)) {
        console.log(!(/^(?:[1-9]|\d\d\d*)$/).test(event.key))
        event.preventDefault();
        this.error = true;
      }
    })
  }
}

