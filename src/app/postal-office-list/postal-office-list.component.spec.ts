import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalOfficeListComponent } from './postal-office-list.component';

describe('PostalOfficeListComponent', () => {
  let component: PostalOfficeListComponent;
  let fixture: ComponentFixture<PostalOfficeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalOfficeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalOfficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
