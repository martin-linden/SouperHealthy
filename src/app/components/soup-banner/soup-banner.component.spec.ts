import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupBannerComponent } from './soup-banner.component';

describe('SoupBannerComponent', () => {
  let component: SoupBannerComponent;
  let fixture: ComponentFixture<SoupBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoupBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
