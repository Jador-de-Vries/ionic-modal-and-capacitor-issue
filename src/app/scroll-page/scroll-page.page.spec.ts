import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollPagePage } from './scroll-page.page';

describe('ScrollPagePage', () => {
  let component: ScrollPagePage;
  let fixture: ComponentFixture<ScrollPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
