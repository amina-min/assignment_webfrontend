import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageserviceService } from 'src/app/services/storageservice.service';
import { User } from './user.cpmponent';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User;
  formGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private route: Router, private signupservice: SignupComponent, private storageService: StorageserviceService, private toastr: ToastrService) {
    this.formGroup = this.fb.group(
      {
        userId: ['', [Validators.required]],
        password: ['', [Validators.required]],
        mobile: ['', [Validators.required]],

      }
    )

  }




  ngOnInit(): void {
    var isLoggedIn = this.storageService.isLoggedIn();
    if (isLoggedIn) this.route.navigate(['']);
  }
  get f() {
    return this.formGroup.controls;
  }



  // addUser() {
  //   this.submitted = true;
  //   if (this.formGroup.valid) {
  //     this.signupservice.userAdd(this.formGroup.value)
  //       .subscribe(res => {
  //         this.route.navigate(['/signup']);
  //         this.toastr.success("Successfully Registered")
  //       }, err => {
  //         if (err.status == 403) {
  //           this.toastr.error("User Already Exists")
  //           this.route.navigate(['/signup']);
  //         } else {
  //           this.toastr.error("Registered Failed")
  //           this.route.navigate(['/signup']);
  //         }
  //         console.log(err);
  //         this.route.navigate(['/signup']);
  //       })
  //   }

  // }

}
  
