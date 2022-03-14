import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeViewerComponent } from './qrcode-viewer/qrcode-viewer.component';
import { QRCodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { QRCodeModule } from 'angularx-qrcode';
import { StudentVotingComponent } from './student-voting/student-voting.component';
import { LecturerVotingComponent } from './lecturer-voting/lecturer-voting.component';
import { MatSliderModule } from '@angular/material/slider';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QRCodeViewerComponent,
    QRCodeScannerComponent,
    StudentVotingComponent,
    LecturerVotingComponent,
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

    // Ngx Charts
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
