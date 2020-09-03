module latte{
    export class DemoBaseView extends ColumnView{
        constructor(){
            super();
            this.addClass('demo-view');
        }

        addSeparator(){
            this.items.add(new SeparatorItem());
        }

        addLabel(text: string){
            this.items.add(new LabelItem(text));
        }

        addItem(text: string, item: Item){
            this.addSeparator();
            this.addLabel(text);
            this.items.add(item);
        }
    }
}