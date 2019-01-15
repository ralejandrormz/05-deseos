import { Injectable } from '@angular/core';
import { List } from '../models';

@Injectable()
export class WishListProvider {
    lists: Array<List> = [];
    constructor() {
        const list1 = new List('Recolectar priedras del infinito');
        const list2 = new List('Heroes a vencer');
        this.lists.push(list1, list2);
        console.log(this.lists);
    }
}
