/// <reference path="DemoBaseView.ts"/>
module latte{
    export class DemoDateItemView extends DemoBaseView{
        constructor(){
            super();

            this.addClass('demo-view');

            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Simple Date Item"));
            this.items.add(new DateItem());

            const d2 = new DateItem();
            d2.rows = d2.columns = 2;
            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("2 x 2 Date Item"));
            this.items.add(d2);
        }
    }
}