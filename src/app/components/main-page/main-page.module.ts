import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [MainPageComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
