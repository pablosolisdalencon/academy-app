import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  galleryImages = [
    
    { src: 'assets/logo0.jpg', alt: 'Logo 0' },
    { src: 'assets/logo1.jpg', alt: 'Logo 1' },
    { src: 'assets/evento0.jpg', alt: 'Evento 0' },
    { src: 'assets/evento0-b.jpg', alt: 'Evento 0b' },
    { src: 'assets/foto0.jpg', alt: 'Image 0' },
    { src: 'assets/foto1.jpg', alt: 'Image 1' },
    { src: 'assets/foto2.jpg', alt: 'Image 2' },
    { src: 'assets/foto3.jpg', alt: 'Image 3' },
    { src: 'assets/foto4.jpg', alt: 'Image 4' },
    { src: 'assets/foto5.jpg', alt: 'Image 5' },
    { src: 'assets/foto6.jpg', alt: 'Image 6' }
    // Add more images as needed
  ];
}
