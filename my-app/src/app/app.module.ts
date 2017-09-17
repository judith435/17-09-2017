import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyClassComponent } from './my-class/my-class.component';
import { SecondClassComponent } from './second-class/second-class.component';
import { ThirdClassComponent } from './third-class/third-class.component';
import { CmpOneComponent } from './cmp-one/cmp-one.component';
import { CmpTwoComponent } from './cmp-two/cmp-two.component';
import { DirectorComponent } from './director/director.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MyClassComponent,
    SecondClassComponent,
    ThirdClassComponent,
    CmpOneComponent,
    CmpTwoComponent,
    DirectorComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
