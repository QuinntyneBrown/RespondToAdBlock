import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnOffAdBlockerComponent } from './turn-off-ad-blocker.component';

describe('TurnOffAdBlockerComponent', () => {
  let component: TurnOffAdBlockerComponent;
  let fixture: ComponentFixture<TurnOffAdBlockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnOffAdBlockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnOffAdBlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
