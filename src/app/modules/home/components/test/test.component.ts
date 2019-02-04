import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder ,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  users=[];

  constructor(private formBuilder: FormBuilder,private service:HomeService) { 
  this.service.getUser();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
     
  }, {
      //validator: MustMatch('password', 'confirmPassword')
  });
  }
 
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

}

}
