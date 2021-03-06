import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HerosComponent }  from './heros.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'heroes',
                    component: HerosComponent
                },
                {
                    path: 'dashboard',
                    component: DashboardComponent
                },
                {
                    path: 'detail/:id',
                    component: HeroDetailComponent
                },
        ])
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HerosComponent,
        DashboardComponent
    ],
    providers:[HeroService],
    bootstrap: [ AppComponent ],

})
export class AppModule { }