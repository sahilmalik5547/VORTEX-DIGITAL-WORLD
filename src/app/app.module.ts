import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './components/home/home.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { RouterModule } from '@angular/router';
import { ChooseusComponent } from './components/chooseus/chooseus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurservicesComponent,
    ReviewsComponent,
    ContactusComponent,
    ChooseusComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
