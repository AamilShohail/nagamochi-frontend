import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [MainPageComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, ContentModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
