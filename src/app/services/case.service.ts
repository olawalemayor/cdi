import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Case } from '../models/case';
import { User } from '../models/user';

@Injectable({
  providedIn: 'any',
})
export class CaseService {
  constructor(private _http: HttpClient) {}

  singleCase: Case = {
    description: '',
    id: 0,
    status: '',
    title: '',
    userId: 0,
  };

  cases: Case[] = [];
  stateCases: Case[] = [];
  filteredCases: Case[] = [];

  getCases() {
    return this._http.get<Case[]>('../../assets/cases.json');
  }

  getCasesByCSO_State(state: string) {
    this.stateCases = [];
    this._http
      .get<User[]>('../../assets/users.json')
      .subscribe((users) => {
        this._http
          .get<Case[]>('../../assets/cases.json')
          .subscribe((cases) => {
            const stateUsers = users.filter((user) => user.state === state);
            stateUsers.forEach((user) => {
              cases.forEach((_case) => {
                if (user.id === _case.userId) this.cases.push(_case);
              });
            });
          })
          .unsubscribe();
      })
      .unsubscribe();
  }

  validateCase(caseId: number) {
    //get case
    const _case = this.stateCases.find((_case) => _case.id === caseId);

    if (!_case) return;
    //get case index
    const caseIndex = this.stateCases.indexOf(_case);

    //Create new case with validated status
    const newCase = { ..._case };
    newCase.status = 'validated';

    //replace case
    this.stateCases[caseIndex] = newCase;
  }

  rejectCase(caseId: number) {
    //get case
    const _case = this.stateCases.find((_case) => _case.id === caseId);

    if (!_case) return;
    //get case index
    const caseIndex = this.stateCases.indexOf(_case);

    //Create new case with rejected status
    const newCase = { ..._case };
    newCase.status = 'rejected';

    //replace case
    this.stateCases[caseIndex] = newCase;
  }

  filterCase(status: string) {
    this.filteredCases = this.stateCases.filter(
      (cases) => cases.status === status
    );
  }
}
