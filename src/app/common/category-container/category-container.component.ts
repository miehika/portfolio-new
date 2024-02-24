import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryContainerComponent {
  categoryTitles: any[] = [];
  categoryMetadata: any;
  selectedCategoryMetadata: any[] = [];
  @Input() set categoryData(categories: any) {
    if (categories && Object.keys(categories).length) {
      this.categoryTitles = Object.keys(categories);
      this.categoryMetadata = Object.values(categories);
      this.selectedCategoryMetadata = this.categoryMetadata[0]?.posts;
    }
  }
  get categoryData() {
    return this.categoryTitles;
  }
  get selectedCategoryData() {
    return this.selectedCategoryMetadata;
  }
  onCategorySelect(idx: any): void {
    this.selectedCategoryMetadata = this.categoryMetadata[idx]?.posts;
  }
}
