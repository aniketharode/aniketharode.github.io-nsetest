import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule,By } from '@angular/platform-browser';
import { TestComponent } from './test.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, inject } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../home.service';
import { HomeMockService } from '../../homemock.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de :DebugElement;
  let e1:HTMLElement;
  let service :HomeService;
  let mockservice :HomeMockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers:[{
        provide:HomeService,useClass:HomeMockService
      },HttpClient,HttpClientModule]
    })
    .compileComponents();
  }));

  

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(HomeService);
  mockservice = TestBed.get(HomeMockService);

  });

  
  
 



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit should be true', async() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('submit call on submit', async() => {
   fixture.detectChanges();
   spyOn(component,'onSubmit');
   e1 = fixture.debugElement.query(By.css('button')).nativeElement;
   e1.click();
   expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });


  it('it return one users',() => {
    mockservice.getUser().subscribe((data) => {
   expect(data.response.key).toContain('value');
    })
  });

});
