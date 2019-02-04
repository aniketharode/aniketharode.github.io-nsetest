import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesthomeComponent } from './component/testhome/testhome.component';
import { NameModule } from './testhome.routes';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

@NgModule({
  declarations: [TesthomeComponent],
  imports: [
    CommonModule,
    NameModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TesthomeModule { }
