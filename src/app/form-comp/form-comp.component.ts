import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css'],
  providers: [ListServiceService]
})
export class FormCompComponent {
  constructor(private listServ: ListServiceService) {}

  submit(register: any) {
    console.log(register.value.name);
    this.listServ.addInfo(register.value.name);
  }
}
