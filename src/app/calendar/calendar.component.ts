import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  lectureData = [
    {
      startsAt: '08:00',
      name: '20_CNW2UEG1',
    },
    {
      startsAt: '12:10',
      name: '20_SPS2UE',
    },
  ];

  ngOnInit(): void {}

  onLectureClick() {
    if (this.userService.userType === 'lecturer') {
      this.router.navigate(['view-qr-code']);
    } else {
      this.router.navigate(['scan-qr-code']);
    }
  }
}
