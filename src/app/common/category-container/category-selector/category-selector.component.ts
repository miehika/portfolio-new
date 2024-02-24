import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorySelectorComponent {
  @Input() categoryTitles: any[] = [];
  @Output() categorySelected: EventEmitter<number> = new EventEmitter<number>();
  selectedIndex: number = 0;

  onCategorySelect(idx: number): void {
    this.categorySelected.emit(idx);
    this.selectedIndex = idx;
  }
}
