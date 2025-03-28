
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CampanhaComponent } from './campanha/campanha.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CampanhaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
    
  ],
  providers: [
    provideHttpClient(),
  ],

  bootstrap: [AppComponent],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
