import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  formGroup: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginserviceService, private toastr: ToastrService) {
    this.formGroup = this.fb.group(
      {
        userId: ['', [Validators.required]],
        mobile: ['', [Validators.required]],
        password:[]
        
      }
    )

  }

  ngOnInit(): void {
    
  }
  get f() {
    return this.formGroup.controls;
  }

  

  resetPass() {

    this.submitted = true;
    if (this.formGroup.valid) {

      this.loginService.resetPassword(this.formGroup.value)
        .subscribe(res => {
          this.loginService.updatePassword(this.formGroup.value).subscribe(res => {
            this.toastr.success("Password reset success")
          })
          
        }, err => {
          this.toastr.error("data Doesn't Match")
          console.log(err);
          this.route.navigate(['forgetpass']);
        })
    }

}
}