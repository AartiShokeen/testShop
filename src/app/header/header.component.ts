import { Component } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  form: FormGroup;

  Form: FormGroup = this.fb.group({
        
    search: ['', [Validators.required, Validators.email]],
  
  });
  // Initilization

  // Constructor
  constructor(private fb: FormBuilder) {
    // Declaration
    this.form = this.fb.group({

      
      search: [null,[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]')]]
     
    });
    // Declaration
    console.log('constructor');
  }

}
