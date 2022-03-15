import { Injectable } from '@angular/core';

export type UserType = 'student' | 'lecturer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #userType: UserType = 'student';

  set userType(userType: UserType) {
    this.#userType = userType;
  }

  get userType(): UserType {
    return this.#userType;
  }

  constructor() {}
}
