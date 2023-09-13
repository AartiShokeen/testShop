import { Component,  OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder, AbstractControl} from '@angular/forms';

function passwordMatchValidator(control: AbstractControl) {
  const password = control.get('password')?.value;
  const cpassword = control.get('cpassword')?.value;

  return password === cpassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent  implements OnInit {


      form: FormGroup;
  
  name!: string;
   model: any = {}; 
   isSubmitting = false; 
  
      signinForm: FormGroup = this.fb.group({
        name:  ['',Validators.pattern(/^[a-z A-Z]*$/)],
        email: ['', [Validators.required, Validators.email]],
      
      });
      // Initilization
    
      // Constructor
      constructor(private fb: FormBuilder) {
        // Declaration
        this.form = this.fb.group({
          name: ['',[Validators.required,Validators.pattern(/^[a-z A-Z]*$/)]],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
          password: [null,[Validators.required,Validators.minLength(6)]],
          cpassword: [null,[Validators.required]],
        },
        {
          validators: passwordMatchValidator,});
        // Declaration
        console.log('constructor');
      }
  
        
  
    ngOnInit() {

        console.log('ngoninit');
        this.form.reset();
        this.signinForm.reset();
      }
    get f (){return this.form.controls}
  
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
    

