import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupCardComponent } from './soup-card.component';

describe('SoupCardComponent', () => {
  let component: SoupCardComponent;
  let fixture: ComponentFixture<SoupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoupCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
