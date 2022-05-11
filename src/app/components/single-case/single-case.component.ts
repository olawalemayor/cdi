import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Case } from 'src/app/models/case';
import { CaseService } from '../../services/case.service';

@Component({
  selector: 'app-single-case',
  templateUrl: './single-case.component.html',
  styleUrls: ['./single-case.component.css'],
})
export class SingleCaseComponent implements OnInit {
  caseId: number = 0;
  singleCase: Case = {
    description: '',
    id: 0,
    status: '',
    title: '',
    userId: 0,
  };

  setCaseFromUrl(id: number) {
    return this.caseService.getCases().subscribe((cases) => {
      const result = cases.find((singleCase) => `${singleCase.id}` === `${id}`);
      if (result) this.singleCase = result;
    });
  }

  constructor(
    private route: ActivatedRoute,
    private caseService: CaseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.setCaseFromUrl(param['id']);
    });
  }
}
