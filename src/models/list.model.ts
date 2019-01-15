import { ItemList } from './item-list.model';

export class List {
  id: number;
  title: string;
  createdAt: Date;
  finsihed: boolean;
  items: Array<ItemList>;

  constructor(title: string) {
    this.title = title;
    this.finsihed = false;
    this.createdAt = new Date();
    this.items = [];
    this.id = new Date().getTime();
  }
}
