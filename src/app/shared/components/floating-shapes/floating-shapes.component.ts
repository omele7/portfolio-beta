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
      this.containerHeight = window.innerHeight;

      this.createShapes(10);
      this.animateShapes();
    }
  }

  createShapes(count: number) {
    for (let i = 0; i < count; i++) {
      this.shapes.push({
        x: Math.random() * this.containerWidth,
        y: Math.random() * this.containerHeight,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        size: Math.random() * 50 + 20,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      });
    }
  }

  animateShapes() {
  setInterval(() => {
    this.shapes.forEach((shape) => {
      shape.x += shape.dx;
      shape.y += shape.dy;

      if (shape.x <= 0 || shape.x + shape.size >= this.containerWidth) {
        shape.dx *= -1;
      }

      if (shape.y <= 0 || shape.y + shape.size >= this.containerHeight) {
        shape.dy *= -1;
      }
    });
  }, 10);
}
}
