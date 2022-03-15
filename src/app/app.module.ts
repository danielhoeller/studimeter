import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { QRCodeModule } from 'angularx-qrcode';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LecturerVotingComponent } from './lecturer-voting/lecturer-voting.component';
import { LoginComponent } from './login/login.component';
import { QRCodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { QRCodeViewerComponent } from './qrcode-viewer/qrcode-viewer.component';
import { StudentVotingComponent } from './student-voting/student-voting.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QRCodeViewerComponent,
    QRCodeScannerComponent,
    StudentVotingComponent,
    LecturerVotingComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    BrowserAnimationsModule,

    QRCodeModule,

    //Material Modules
    MatFormFieldModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatDividerModule,

    // Ngx Charts
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
