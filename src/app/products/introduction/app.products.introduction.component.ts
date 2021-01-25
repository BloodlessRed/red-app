import { Component } from "@angular/core";

@Component({
  selector: 'introduction',
  templateUrl: './app.products.introduction.component.html',
  styleUrls: ['./app.products.introduction.component.less']
})
export class Introduction {

  constructor(){
    
  }

  title = 'Store';

  introductionText = 'Welcome to our onsite inventory collection. We sell a number of recertified and surplus tools from a variety of trusted brands.';

}