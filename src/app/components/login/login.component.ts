import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { StorageserviceService } from 'src/app/services/storageservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private loginServic: LoginserviceService, private storageService: StorageserviceService,
    private route: Router, private toastr: ToastrService) {
    this.formGroup = this.fb.group(
      {
        userId: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
    var isLoggedIn = this.storageService.isLoggedIn();
    if (isLoggedIn) this.route.navigate(['dashboard']);

  }

  get f() {
    return this.formGroup.controls;
  }


  UserLogin() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.loginServic.userLogin(this.formGroup.value)
        .subscribe(res => {
          this.storageService.saveLoginInfo(res.data, "data");
          this.toastr.success(" Login Success")
          this.route.navigate(['dashboard']);
        }, err => {
          this.toastr.error("Invalid username or password")
          console.log(err);
          this.route.navigate(['']);
        })
    }


  }



}
