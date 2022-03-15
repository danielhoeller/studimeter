import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) {}

  handleStudentButtonClicked() {
    this.userService.userType = 'student';
    this.navigateToCalendar();
  }
  handleLecturerButtonClicked() {
    this.userService.userType = 'lecturer';
    this.navigateToCalendar();
  }

  private navigateToCalendar() {
    this.router.navigate(['calendar']);
  }
}
