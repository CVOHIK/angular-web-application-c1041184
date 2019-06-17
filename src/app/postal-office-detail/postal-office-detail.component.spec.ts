import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalOfficeDetailComponent } from './postal-office-detail.component';

describe('PostalOfficeDetailComponent', () => {
  let component: PostalOfficeDetailComponent;
  let fixture: ComponentFixture<PostalOfficeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalOfficeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalOfficeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
