import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signonForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signonForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'pet',
    //   gender: 'female'
    // });

    this.signonForm.form.patchValue({
       userData: {
           username: suggestedName
       }
    });
  }

  // onSubmit(form: NgForm ) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    //console.log(this.signonForm);
    this.user.userName = this.signonForm.value.userData.username;
    this.user.email = this.signonForm.value.userData.email;
    this.user.secretQuestion = this.signonForm.value.secret;
    this.user.secretAnswer = this.signonForm.value.questionAnswer;
    this.user.gender = this.signonForm.value.gender;
    this.signonForm.reset();
  }
}
