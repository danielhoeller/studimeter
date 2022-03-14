import { Injectable } from '@angular/core';
import {
  Database,
  DatabaseReference,
  objectVal,
  onValue,
  ref,
} from '@angular/fire/database';
import { DataSnapshot, get, set } from 'firebase/database';
import { filter } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { v4 as uuid } from 'uuid';

export type UserId = string;
export type Timestamp = number;

export interface VotingData {
  materials: number;
  speed: number;
  motivation: number;
  answers: number;
}

export type HistoricalData = Array<VotingData & { timestamp: Timestamp }>;

@Injectable({
  providedIn: 'root',
})
export class VotingDataService {
  private databaseReference!: DatabaseReference;

  private historicalData: HistoricalData = [];

  private currentAverage = new BehaviorSubject<VotingData>({
    answers: 3,
    materials: 3,
    motivation: 3,
    speed: 3,
  });

  public currentAverage$ = this.currentAverage.asObservable();

  private studentId!: string;

  constructor(private db: Database) {}

  initializeVotingSession(sessionId: string) {
    this.databaseReference = ref(this.db, sessionId);
    objectVal<Record<UserId, VotingData>>(this.databaseReference)
      .pipe(filter((value) => !!value))
      .subscribe((votingDataByUser) => {
        // 1 calculate average
        const sums = Object.values(votingDataByUser).reduce<
          VotingData & { sum: number }
        >(
          (acc, curr) => {
            acc.sum++;
            acc.answers += curr.answers;
            acc.materials += curr.materials;
            acc.motivation += curr.motivation;
            acc.speed += curr.speed;
            return acc;
          },
          { sum: 0, speed: 0, answers: 0, motivation: 0, materials: 0 }
        );

        const { sum, answers, materials, motivation, speed } = sums;
        const average: VotingData = {
          materials: materials / sum,
          answers: answers / sum,
          motivation: motivation / sum,
          speed: speed / sum,
        };

        // add to historical data:
        const timestamp: Timestamp = Date.now();
        this.historicalData.push({ ...average, timestamp });

        this.currentAverage.next(average);
      });
  }

  initializeStudentVotingSession(sessionId: string) {
    this.studentId = uuid();
    this.databaseReference = ref(this.db, `${sessionId}/${this.studentId}`);
    this.updateVoting({ answers: 3, materials: 3, motivation: 3, speed: 3 });
  }

  updateVoting(votingData: VotingData) {
    set(this.databaseReference, votingData);
  }
}
