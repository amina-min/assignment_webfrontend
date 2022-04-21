import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupserviceService } from 'src/app/services/signupservice.service';
import { StorageserviceService } from 'src/app/services/storageservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private route: Router, private signupservice:SignupserviceService, private storageService: StorageserviceService, private toastr: ToastrService) {
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



  addUser() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.signupservice.addUser(this.formGroup.value)
        .subscribe(res => {
          this.toastr.success("Successfully Registered")
        }, err => {
          if (err.status == 403) {
            this.toastr.error("User Already Exists")
            this.route.navigate(['signup']);
          } else {
            this.toastr.error("Registered Failed")
          }
        })
    }

  }

}

