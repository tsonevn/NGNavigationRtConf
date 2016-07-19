import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {APP_ROUTER_PROVIDERS} from "./app.routes"

class DataItem {
    constructor(public id: number, public name: string) { }
}


@Component({
    selector: "first",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    <StackLayout>
        <Label text="First component" class="title"></Label>
        <Button text="GO TO SECOND" [nsRouterLink]="['/second']" class="link"></Button>
    </StackLayout>`
})
export class FirstComponent { }

@Component({
    selector: "second",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    <StackLayout>
        <Label text="Second component" class="title"></Label>
        <Button text="GO TO FIRST" [nsRouterLink]="['/first']" class="link"></Button>
        <ListView [items]="myItems" (itemTap)="onItemTap($event)">
            <template let-item="item" let-i="index" let-odd="odd" let-even="even">
                <StackLayout [class.odd]="odd" [class.even]="even">
                    <Label [text]='"index: " + i'></Label>
                    <Label [text]='"[" + item.id +"] " + item.name'></Label>
                </StackLayout>
            </template>
        </ListView>
    </StackLayout>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent { 

  public myItems: Array<DataItem>;
    private counter: number;

    constructor() {
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }

}