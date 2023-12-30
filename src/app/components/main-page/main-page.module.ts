import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentModule } from './content/content.module';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';

@NgModule({
  declarations: [MainPageComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, ContentModule, MdbTooltipModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
