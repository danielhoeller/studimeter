import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { GaugeComponent, LegendPosition } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { VotingData, VotingDataService } from '../voting-data.service';

@Component({
  selector: 'app-lecturer-voting',
  templateUrl: './lecturer-voting.component.html',
  styleUrls: ['./lecturer-voting.component.css'],
})
export class LecturerVotingComponent implements OnInit, AfterViewInit {
  currentAverage$: Observable<VotingData>;

  speed$: Observable<{ value: number; name: string }>;
  answers$: Observable<{ value: number; name: string }>;
  materials$: Observable<{ value: number; name: string }>;
  motivation$: Observable<{ value: number; name: string }>;
  // coefficient$: Observable<{ value: number; name: string }>;

  @ViewChildren(GaugeComponent) gauges!: QueryList<GaugeComponent>;

  view: [number, number] = [500, 400];
  legend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  ngAfterViewInit() {
    this.gauges.forEach((gauge) => (gauge.scaleText = () => {}));
    // this.answersGauge.scaleText = () => {};
  }

  constructor(private votingDataService: VotingDataService) {
    this.currentAverage$ = votingDataService.currentAverage$;

    this.answers$ = this.currentAverage$.pipe(
      map((avg) => ({ name: 'answers', value: avg.answers }))
    );
    this.motivation$ = this.currentAverage$.pipe(
      map((avg) => ({ name: 'motivation', value: avg.motivation }))
    );
    this.materials$ = this.currentAverage$.pipe(
      map((avg) => ({ name: 'materials', value: avg.materials }))
    );
    this.speed$ = this.currentAverage$.pipe(
      map((avg) => ({ name: 'speed', value: avg.speed }))
    );
    /* this.coefficient$ = this.currentAverage$.pipe(
      map((avg) => ({ name: 'coefficient', value: avg.coefficient }))
    ); */
  }

  ngOnInit(): void {}
}
