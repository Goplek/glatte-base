/// <reference path="DemoBaseView.ts"/>
module latte{
    export class DemoGroupButtonView extends DemoBaseView{

        constructor(){
            super();

            const columnView = this;

            const g1 = new ButtonGroupItem([
                new ButtonItem("Button A"),
                new ButtonItem("Button B"),
                new ButtonItem("Button C"),
            ]);
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Simple Group"));
            columnView.items.add(g1);


            const setg2bs = index => g2.checkedButton = g2bs[index];
            const g2bs = [
                new ButtonItem("Button A", null, () => setg2bs(0)),
                new ButtonItem("Button B", null, () => setg2bs(1)),
            ];
            const g2= new ButtonGroupItem(g2bs);
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Keep selection on click"));
            columnView.items.add(g2);

            const g3 = new ButtonGroupItem([
                new ButtonItem(null, LinearIcon.file_add),
                new ButtonItem(null, LinearIcon.file_empty),
                new ButtonItem(null, IconItem.saveIcon()),
            ]);
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Just icons"));
            columnView.items.add(g3);

        }

    }
}