import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


// Importa las funciones de configuración de ng2-charts
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
// import { DonaComponent } from './components/dona/dona.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    // DonaComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    PagesModule,
  ],
  providers: [
    // Proporciona la configuración global de ng2-charts
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';

// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { PagesModule } from './pages/pages.module';
// import { AuthModule } from './auth/auth.module';

// import { AppComponent } from './app.component';
// import { NopagefoundComponent } from './nopagefound/nopagefound.component';


// @NgModule({
//   declarations: [
//     AppComponent,
//     NopagefoundComponent,
//   ],
//   imports: [
//     AppRoutingModule,
//     AuthModule,
//     BrowserModule,
//     PagesModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
