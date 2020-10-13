import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupListComponent } from './soup-list.component';

describe('SoupListComponent', () => {
  let component: SoupListComponent;
  let fixture: ComponentFixture<SoupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoupListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
