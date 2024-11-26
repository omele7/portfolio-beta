import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

interface Shape {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
  type: 'icosahedron' | 'dodecahedron' | 'pentagon';
  rotation: number;
}


@Component({
  selector: 'app-floating-shapes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-shapes.component.html',
  styleUrls: ['./floating-shapes.component.css'],
})
export class FloatingShapesComponent {
  shapes: Shape[] = [];
  containerWidth = 0;
  containerHeight = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.containerWidth = window.innerWidth;
      this.containerHeight = document.documentElement.scrollHeight;
  
      this.createShapes(15);
      this.animateShapes();
  
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }
  
  onResize() {
    this.containerWidth = window.innerWidth;
    this.containerHeight = document.documentElement.scrollHeight;
  
    this.shapes = [];
    this.createShapes(15);
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  createShapes(count: number) {
    const centerX = this.containerWidth / 2;
    const centerY = this.containerHeight / 2;
  
    const types: Array<Shape['type']> = ['icosahedron', 'dodecahedron', 'pentagon'];
  
    for (let i = 0; i < count; i++) {
      this.shapes.push({
        x: centerX,
        y: centerY,
        dx: (Math.random() - 0.5) * 10,
        dy: (Math.random() - 0.5) * 10,
        size: Math.random() * 50 + 20,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        type: types[Math.floor(Math.random() * types.length)],
        rotation: 2,
      });
    }
  }

  animateShapes() {
    setInterval(() => {
      this.shapes.forEach((shape) => {
        shape.x += shape.dx;
        shape.y += shape.dy;
  
        if (shape.x <= 40 || shape.x + shape.size >= this.containerWidth - 40) {
          shape.dx *= -1;
          shape.rotation += 1;
        }
  
        if (shape.y <= 40 || shape.y + shape.size >= this.containerHeight - 40) {
          shape.dy *= -1;
          shape.rotation += 1;
        }
  
        shape.rotation += 0.5;
  
        if (shape.rotation >= 360) {
          shape.rotation = 0;
        }
      });
    }, 10);
  }
  
  
  
}
