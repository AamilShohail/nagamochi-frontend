import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselImage } from '@app/components/model/carousel-image.model';
import { carouselImageFileNames } from '@app/components/model/carousel-images';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss',
})
export class ImageCarouselComponent implements OnInit {
  carouselImages: CarouselImage[] = [];

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    carouselImageFileNames.forEach((imageFile: string) => {
      this.carouselImages.push({
        sanitizedUrl: this.sanitizer.sanitize(
          SecurityContext.RESOURCE_URL,
          this.sanitizer.bypassSecurityTrustResourceUrl(
            `assets/carousel/${imageFile}.jpeg`
          )
        ),
        imageFileName: `${imageFile}.jpeg`,
      });
    });
  }
}
