import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { VotingDataService } from '../voting-data.service';

@Component({
  selector: 'app-student-voting',
  templateUrl: './student-voting.component.html',
  styleUrls: ['./student-voting.component.css'],
})
export class StudentVotingComponent implements OnInit {
  public votingForm = new FormGroup({
    materials: new FormControl(3),
    speed: new FormControl(3),
    motivation: new FormControl(3),
    answers: new FormControl(3),
  });
  constructor(private votingDataService: VotingDataService) {}

  ngOnInit(): void {
    this.votingForm.valueChanges.pipe(debounceTime(500)).subscribe((values) => {
      this.votingDataService.updateVoting(values);
    });
  }
}
