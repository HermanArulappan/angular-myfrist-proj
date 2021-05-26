import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HermancompComponent } from './hermancomp/hermancomp.component';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { ListinfoComponent } from './listinfo/listinfo.component';
import { ListServiceService } from './list-service.service';
import { FormCompComponent } from './form-comp/form-comp.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HermancompComponent, SecondcompComponent, ListinfoComponent, FormCompComponent],
  bootstrap: [AppComponent],
  providers: [ListServiceService]
})
export class AppModule {}
