import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import QrScanner from 'qr-scanner';
import { VotingDataService } from '../voting-data.service';

@Component({
  selector: 'app-qrcode-scanner',
  templateUrl: './qrcode-scanner.component.html',
  styleUrls: ['./qrcode-scanner.component.css'],
})
export class QRCodeScannerComponent implements AfterViewInit {
  constructor(
    private votingDataService: VotingDataService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

  private qrScanner!: QrScanner;

  ngAfterViewInit(): void {
    this.qrScanner = new QrScanner(
      this.videoRef.nativeElement,
      this.handleQRResult,
      {}
    );
    this.qrScanner.start();
  }

  handleQRResult = (result: QrScanner.ScanResult) => {
    this.votingDataService.initializeStudentVotingSession(result.data);
    this.ngZone.run(() => this.router.navigate(['student']));
  };

  ngOnDestroy() {
    this.qrScanner.destroy();
  }
}
