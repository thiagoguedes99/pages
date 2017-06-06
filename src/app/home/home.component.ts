import { Component, OnInit } from '@angular/core';

import { DribbbleServiceService } from "app/providers/dribbble-service.service";

@Component({
  selector: 'homePage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listShots: any[] = [];
  public show: boolean = false;

  constructor(private service: DribbbleServiceService) { }

  ngOnInit() {
    this.service.getListShot()
                .subscribe(resp =>{
                   this.listShots = resp;
                  this.show = true;
                });
  }

}
