import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TesthomeComponent } from './testhome.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TesthomeComponent', () => {
  let component: TesthomeComponent;
  let fixture: ComponentFixture<TesthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesthomeComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [TesthomeComponent],
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
