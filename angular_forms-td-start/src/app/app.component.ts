import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupform: NgForm
  defaultquestion ='pet'
  answer=""
  genders = ['male','female']
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupform.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })
    this.signupform.form.patchValue(
      {userData:{
          username:suggestedName
        }})
  }

  // onSubmit(form:NgForm){
  //      console.log(form)
  // }

  onSubmit(){
    console.log(this.signupform)
  }
}
