import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePipesComponent } from './table-pipes.component';

describe('TablePipesComponent', () => {
  let component: TablePipesComponent;
  let fixture: ComponentFixture<TablePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
