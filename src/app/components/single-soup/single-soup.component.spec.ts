import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSoupComponent } from './single-soup.component';

describe('SingleSoupComponent', () => {
  let component: SingleSoupComponent;
  let fixture: ComponentFixture<SingleSoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
