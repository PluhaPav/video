import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSortComponent } from './line-sort.component';

describe('LineSortComponent', () => {
  let component: LineSortComponent;
  let fixture: ComponentFixture<LineSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
