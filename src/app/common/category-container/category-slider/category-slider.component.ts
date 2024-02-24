import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorySliderComponent {
  categoryPosts: any[] = [];
  @Input() set categoriesMetadata(categoryMetadata: any[]) {
    this.categoryPosts = categoryMetadata;
  }
  get categoriesMetadata() {
    return this.categoryPosts;
  }
}
