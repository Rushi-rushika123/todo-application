import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpfieldComponent } from './inpfield.component';

describe('InpfieldComponent', () => {
  let component: InpfieldComponent;
  let fixture: ComponentFixture<InpfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpfieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
