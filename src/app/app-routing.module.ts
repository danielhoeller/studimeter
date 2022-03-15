import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LecturerVotingComponent } from './lecturer-voting/lecturer-voting.component';
import { LoginComponent } from './login/login.component';
import { QRCodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { QRCodeViewerComponent } from './qrcode-viewer/qrcode-viewer.component';
import { StudentVotingComponent } from './student-voting/student-voting.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'view-qr-code', component: QRCodeViewerComponent },
  { path: 'scan-qr-code', component: QRCodeScannerComponent },
  { path: 'lecturer', component: LecturerVotingComponent },
  { path: 'student', component: StudentVotingComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
