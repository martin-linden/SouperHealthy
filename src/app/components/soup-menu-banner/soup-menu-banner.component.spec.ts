import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupMenuBannerComponent } from './soup-menu-banner.component';

describe('SoupMenuBannerComponent', () => {
  let component: SoupMenuBannerComponent;
  let fixture: ComponentFixture<SoupMenuBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoupMenuBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupMenuBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
