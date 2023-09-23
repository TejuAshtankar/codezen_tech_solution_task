import { Component } from '@angular/core';
import { FormGroup ,FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
 
  constructor(private formBuilder:FormBuilder) { }

  userDetails = this.formBuilder.group({
  fName:['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]],
  lName:['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]],
  mobileNumber:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  address:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  age:['',[Validators.required]],
  dob:['',[Validators.required]],
  

 })

 get FName(): FormControl {
   return this.userDetails.get('fName') as FormControl;
 }
 get LName(): FormControl {
  return this.userDetails.get('lName') as FormControl;
}
get MobileNumber(): FormControl {
  return this.userDetails.get('mobileNumber') as FormControl;
}
get Address(): FormControl {
  return this.userDetails.get('address') as FormControl;
}

 get Email(): FormControl {
   return this.userDetails.get('email') as FormControl;
 }

 get Age(): FormControl {
   return this.userDetails.get('age') as FormControl;
 }
 get Dob(): FormControl {
  return this.userDetails.get('dob') as FormControl;
}


 onSubmit(){
console.log("user details reactive form output",this.userDetails.value)
 }
}
