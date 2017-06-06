import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DribbbleServiceService } from "app/providers/dribbble-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private id: string;
  public userProfile: any;
  public userShots: any;
  public show: boolean = false;

  constructor(private url: ActivatedRoute, private service: DribbbleServiceService) { }

  ngOnInit() {
    this.id = this.url.snapshot.params['id'];
    
    this.service.getUserProfile(this.id).subscribe(resp => this.userProfile = resp);
    this.service.getUserShots(this.id).subscribe(resp => {
      this.userShots = resp;
      this.showComponents();
    });

    
  }

  showComponents() {
    this.show = true;    
  }

}
