import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { NameModule } from './home.routes';
import { RoutePathComponent } from './components/route-path/route-path.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TestComponent, RoutePathComponent],
  imports: [
    CommonModule,
    NameModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ReactiveFormsModule,HttpClient,HttpClientModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
