import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importar componentes creados 
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { RutaComponent } from './components/ruta/ruta.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    AgregarComponent,
    RutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      domain: 'dev-f3mualny3i1mn7oo.us.auth0.com',
      clientId: 'NkInClwTDLiG4eqAStxUBtUl23q3hwKH',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
