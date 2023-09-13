import { Component,  OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  form: FormGroup;
  loginMode:boolean=true;
  model: any = {}; 
 
  
      signinForm: FormGroup = this.fb.group({
        
        email: ['', [Validators.required, Validators.email]],
      
      });
      // Initilization
    
      // Constructor
      constructor(private fb: FormBuilder) {
        // Declaration
        this.form = this.fb.group({

          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
          password: [null,[Validators.required]],
         
        });
        // Declaration
        console.log('constructor');
      }
  
        
    ngOnInit() {

        console.log('ngoninit');
        this.form.reset();
        this.signinForm.reset();
      }
    


      submitForm() {
        if (this.form.valid) {
          console.log('Form submitted:', this.form.value);
        }
      }
      handleClick() {
        console.log('form value', this.form.value);
      }
      space(e:any){
        console.log(e);
        if(e.charCode === 32){
          e.preventDefault();
        }
        
      }
    }