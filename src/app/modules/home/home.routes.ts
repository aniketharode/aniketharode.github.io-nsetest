import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { RoutePathComponent } from './components/route-path/route-path.component';
import { TesthomeComponent } from '../testhome/component/testhome/testhome.component';
import { HeaderComponent } from 'src/app/core/header/header.component';

const routes: Routes = [
    
    { path: 'routePath', component: HeaderComponent },
    
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
   
    providers: [],
})
export class NameModule { }
