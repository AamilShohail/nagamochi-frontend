import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AcademicInfoComponent } from './academic-info/academic-info.component';

@NgModule({
  declarations: [
    ContentComponent,
    ImageCarouselComponent,
    AcademicInfoComponent,
  ],
  imports: [CommonModule, MdbCarouselModule],
  exports: [ContentComponent],
})
export class ContentModule {}
