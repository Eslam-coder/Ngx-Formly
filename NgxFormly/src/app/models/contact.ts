import { FormlyFieldConfig } from "@ngx-formly/core/lib/components/formly.field.config";

export class Contact {
    name:string | undefined;
    phoneNumber:string | undefined;
    email :string | undefined;

    formFields(){
        return <FormlyFieldConfig[]>[
            {
                key:'name',
                type:'input',
                templateOptions:{
                  type:'text',
                  //label:'Name',
                  placeholder:'enter name',
                  required:true
                },
                validation:{
                  messages:{
                    required:'you need to provide a name!'
                  }
                }
            },
            {
                key:'phoneNumber',
                type:'input',
                templateOptions:{
                  type:'tel',
                  //label:'phoneNumber',
                  placeholder:'enter phoneNumber',
                  required:true
                },
                validation:{
                  messages:{
                    required:'you need to provide a phoneNumber!'
                  }
                }
            },
            {
                key:'email',
                type:'input',
                templateOptions:{ 
                  type:'email',
                  //label:'email',
                  placeholder:'enter email',
                  required:true
                },
                validation:{
                  messages:{
                    required:'you need to provide a email!'
                  }
                }
            }
        ]
    }
}
