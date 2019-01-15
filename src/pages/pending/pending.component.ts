import { Component } from '@angular/core';
import { WishListProvider } from '../../providers/wishlist.provider';


@Component({
    selector: 'page-pending',
    templateUrl: 'pending.component.html'
})

export class PendingPage {
    constructor(private whishListProvider: WishListProvider) {
        return;
    }
}
