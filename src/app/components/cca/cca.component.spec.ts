import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcaComponent } from './cca.component';

describe('CcaComponent', () => {
  let component: CcaComponent;
  let fixture: ComponentFixture<CcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
