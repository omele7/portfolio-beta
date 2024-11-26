import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();
  isClosing = false;

  closeSidebar() {
    this.isClosing = true;
    setTimeout(() => {
      this.isClosing = false;
      this.isVisible = false;
      this.close.emit();
    }, 300);
  }
}