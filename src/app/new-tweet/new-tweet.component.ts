import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit, OnDestroy {
  exit = new Subject();
  form: FormGroup;
  userNames = new FormArray([]);
  tweetBody = '';
  footer = false;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      scheduleType: new FormControl('1'),
      userNames: this.userNames,
      tweetBody: new FormControl(null, [Validators.required, Validators.maxLength(240)]),
      setDate: new FormControl(null, [this.scheduleChecker1.bind(this)]),
      tweetType: new FormGroup({
        public: new FormControl(null),
        Dm: new FormControl(null)
      }),
      reminders: new FormGroup({
        number: new FormControl(null, [Validators.required, Validators.min(1), this.scheduleChecker2.bind(this)]),
        unit: new FormControl('Days')
      })
    });
  }

  onLeave(): void {
    console.log(this.tweetBody);
    this.exit.next();
  }

  returnControlUsers() {
   return (this.form.get('userNames') as FormArray).controls;
  }

  newUserName() {
    (this.form.get('userNames') as FormArray).push(new FormGroup({
      userNames: new FormControl(null)
    }));
  }

  submit() {
    console.log(this.form.value);
  }

  removeUser(index: number) {
    (this.form.get('userNames') as FormArray).removeAt(index);
  }

  scheduleChecker2(control: FormControl): {[s: string]: boolean } {
    if (this.form && this.form.get('scheduleType').value == 2) {
      this.form.get('setDate').setErrors(null);
      if (control.value < 0) {
        return {'setTimeInvalid': true};
      }
    }
    return null;
  }

  scheduleChecker1(control: FormControl): {[s: string]: boolean } {
    if (this.form && this.form.get('scheduleType').value == 1) {
      this.form.get('reminders.number').setErrors(null);
      if (new Date(control.value).getTime() < new Date().getTime()) {
        console.log(new Date(control.value).getTime() < new Date().getTime() );
        return {'setDateInvalid': true};
      }
    }
    return null;
  }

  ngOnDestroy(): void {
    this.exit.unsubscribe();
  }

}
