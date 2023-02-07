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
  answer="";
  genders = ['male','female'];
  user = {
    username: '',
    mail: '',
    secretquestion: '',
    secretanswer: '',
    gender: ''
  };
  submitted = false
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
    this.submitted = true;
     this.user.username = this.signupform.value.userData.username;
     this.user.mail = this.signupform.value.userData.email;
     this.user.secretquestion = this.signupform.value.secret;
     this.user.secretanswer = this.signupform.value.questionAnswer;
     this.user.gender = this.signupform.value.gender;

     this
  }
  onReset() {
    this.signupform.reset()
  }
}
