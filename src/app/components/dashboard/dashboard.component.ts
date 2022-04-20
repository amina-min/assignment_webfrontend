import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageserviceService } from 'src/app/services/storageservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:StorageserviceService, private router:Router) { }

  ngOnInit(): void {

  }

  logout(){
    this.service.logout();
    this.router.navigateByUrl("");
  }

}
