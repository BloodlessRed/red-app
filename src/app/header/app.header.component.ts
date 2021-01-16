import { Component } from "@angular/core";

@Component({
  selector: 'main-header',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.less']
})
export class Header{

  services: string[] = ['Services','Company','Customer Portfolio','Free Evaluation','Contacts']

}

