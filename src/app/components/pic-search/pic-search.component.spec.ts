import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicSearchComponent } from './pic-search.component';

describe('PicSearchComponent', () => {
  let component: PicSearchComponent;
  let fixture: ComponentFixture<PicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
