import { Component } from "@angular/core";

@Component({
  selector: 'introduction',
  templateUrl: './app.main-body.introduction.component.html',
  styleUrls: ['./app.main-body.introduction.component.less']
})
export class Introduction {

  constructor(){
    
  }

  title = 'Store';

  introductionText = 'Welcome to our onsite inventory collection. We sell a number of recertified and surplus tools from a variety of trusted brands.';

}