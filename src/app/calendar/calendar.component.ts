import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
    let k = 0;
    for(let i = 0; i < this.times.length; i++){
      k = (i == 0 ? i : i / 2);
      if(i % 2 == 0){
        this.times[i] = `${k < 10 ? 0 : ''}${k}:00`;
      }
      else {
        this.times[i] = `${k < 10 ? 0 : ''}${k-.5}:30`;
      }
    }
  }

  lectureData = [
    {
      startsAt: '08:00',
      endsAt: '11:15',
      name: '20_CNW2UEG1',
    },
    {
      startsAt: '12:10',
      endsAt: '15:25',
      name: '20_SPS2UE',
    },
  ];

  times = new Array(48).fill(0);

  ngOnInit(): void {}

  curTime(){
    return `${new Date().getHours()}:${new Date().getMinutes()}`
  }

  convertTimeToPos(str: string){
    let times = str.split(':').map((e:string)=>{return Number(e)});
    return times[0]*12 + times[1]/5;
  }

  onLectureClick() {
    if (this.userService.userType === 'lecturer') {
      this.router.navigate(['view-qr-code']);
    } else {
      this.router.navigate(['scan-qr-code']);
    }
  }
}
