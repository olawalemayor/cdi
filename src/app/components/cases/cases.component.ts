import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CaseService } from '../../services/case.service';
import { User } from '../../models/user';
import { Case } from '../../models/case';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent implements OnInit {
  constructor(
    private userService: UserService,
    private caseService: CaseService
  ) {}

  user: User = { id: 0, name: '', password: '', role: '', username: '' };
  cases: Case[] = [];
  stateCases: any[] = [];
  allCases: any[] = [];

  setStateCases() {
    this.userService.getUsers().subscribe((res) => {
      const users = res.filter(
        (user) => user.state === this.user.state && user.role === 'CSO'
      );

      this.setCaseResult(users);
    });
  }

  setAdminCases() {
    this.userService.getUsers().subscribe((res) => {
      const users = res.filter((user) => user.role === 'CSO');

      this.setCaseResult(users);
    });
  }

  setCaseResult(users: User[]) {
    this.caseService.getCases().subscribe((res) => {
      users.forEach((user) => {
        const resultCases = res.filter((_case) => _case.userId === user.id);

        resultCases.forEach((result) => {
          if (result) this.allCases.push({ case: result, user });
        });
      });
    });
  }

  validateCase() {
    console.log('Case has been validated');
  }

  rejectCase() {
    console.log('case has been rejected');
  }

  ngOnInit(): void {
    this.user = this.userService.user;

    this.setAdminCases();

    this.caseService.getCases().subscribe((cases) => {
      this.cases = cases.filter((_case) => _case.userId === this.user.id);
    });

    if (this.user.state) this.setStateCases();
  }
}
