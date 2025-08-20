import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifHistory } from './gif-history';

describe('GifHistory', () => {
  let component: GifHistory;
  let fixture: ComponentFixture<GifHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
