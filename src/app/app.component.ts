import { Component } from "@angular/core";

@Component({
  selector :'pm-root',
  template : `
  <div>
    <pm-product></pm-product>
  </div>
`
  
})
export class AppComponent{
  pageTitle : string ='Product Management'
}