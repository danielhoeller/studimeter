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
    /* {
      startsAt: '19:10',
      endsAt: '21:25',
      name: 'test',
    }, */
  ];

  times = new Array(48).fill(0);
  intervalId:number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.startUpdateDivider();
  }

  ngAfterViewChecked(): void {
    let matCards = document.getElementsByTagName('mat-card');
    matCards[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); // Scrolls first element into view
    // window.scrollBy(0, -100);
  }

  ngOnDestroy(): void {
    this.stopUpdateDivider();
  }

  startUpdateDivider(){
    const divider = document.getElementsByTagName('mat-divider')[0] as HTMLElement;
    this.intervalId = window.setInterval(
    () => {
      let gR = this.convertTimeToPos(this.curTime()).toString();
      divider.style.gridRow = gR;
    }, 60*1000);
  }

  stopUpdateDivider(){
    window.clearInterval(this.intervalId);
  }

  curTime(){
    return `${new Date().getHours()}:${new Date().getMinutes()}`
  }

  convertTimeToPos(str: string){
    let times = str.split(':').map((e:string)=>{return Number(e)});
    return Math.floor(times[0]*12 + times[1]/5);
  }

  onLectureClick() {
    if (this.userService.userType === 'lecturer') {
      this.router.navigate(['view-qr-code']);
    } else {
      this.router.navigate(['scan-qr-code']);
    }
  }
}
