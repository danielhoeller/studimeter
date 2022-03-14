import { Component, OnInit } from '@angular/core';
import { Database, ref } from '@angular/fire/database';
import { Router } from '@angular/router';
import { set } from 'firebase/database';
import { v4 as uuid } from 'uuid';
import { VotingDataService } from '../voting-data.service';
@Component({
  selector: 'app-qrcode-viewer',
  templateUrl: './qrcode-viewer.component.html',
  styleUrls: ['./qrcode-viewer.component.css'],
})
export class QRCodeViewerComponent implements OnInit {
  public id: string;
  constructor(
    private votingDataService: VotingDataService,
    private router: Router
  ) {
    this.id = uuid();
  }

  ngOnInit(): void {
    this.votingDataService.initializeVotingSession(this.id);
  }

  handleClick() {
    this.router.navigate(['lecturer']);
  }
}
