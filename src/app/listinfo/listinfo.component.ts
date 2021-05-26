import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-listinfo',
  templateUrl: './listinfo.component.html',
  styleUrls: ['./listinfo.component.css'],
  providers: [ListServiceService]
})
export class ListinfoComponent implements OnInit {
  receiveinfo1: string[] = [];
  receiveinfo2: string[] = [];
  receiveinfo3: string[] = [];

  getReceiveinfo1fromService() {
    this.receiveinfo1 = this.receiveinfoservice.getInfo1();
    console.log(this.receiveinfo1);
  }

  getReceiveinfo2fromService() {
    this.receiveinfo2 = this.receiveinfoservice.getInfo2();
  }

  getReceiveinfo3fromService() {
    this.receiveinfo3 = this.receiveinfoservice.getInfo3();
  }

  constructor(private receiveinfoservice: ListServiceService) {}

  ngOnInit() {}
}
