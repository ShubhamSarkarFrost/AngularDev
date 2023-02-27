import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Black', 'Sissy', 'Cucky'];
  forbiddenEmail = ['blackpussy@dingo.com', 'bigsissy@cuckfest.com', 'fagbitch@fag.com']

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // Value Changes
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
    // Status Changes
    // this.signupForm.statusChanges.subscribe((value) => {
    //   console.log(value)
    // } )

    // Set Value
    // this.signupForm.setValue({
    //   userData: {
    //     'username': 'Max',
    //     'email': 'theriot@outlook.com',
    //
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // })
    //
    // //Patch Value
    // this.signupForm.patchValue({
    //   userData: {
    //     'username': 'Anna',
    //     'email': 'theriot@outlook.com',
    //
    //   }
    // })
  }
  onSubmit() {
    console.log(this.signupForm)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenEmail.indexOf(control.value) !== -1) {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
