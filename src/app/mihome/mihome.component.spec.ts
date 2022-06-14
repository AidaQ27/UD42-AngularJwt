import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MihomeComponent } from './mihome.component';

describe('MihomeComponent', () => {
  let component: MihomeComponent;
  let fixture: ComponentFixture<MihomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MihomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
