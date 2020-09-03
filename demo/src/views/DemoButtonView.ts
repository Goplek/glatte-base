/// <reference path="DemoBaseView.ts"/>
module latte{
    export class DemoButtonView extends DemoBaseView{

        constructor(){
            super();

            this.addClass('demo-view');

            const hello = () => DialogView.inform("Hello!");
            const dd = [
                new ButtonItem("Command 1", IconItem.fileIcon(), hello),
                new ButtonItem("Command 2", IconItem.folderIcon(), hello),
                new ButtonItem("Command 3", IconItem.saveIcon(), hello),
            ];

            this.items.add(new LabelItem("Simple Button"));
            this.items.add(new ButtonItem("Click me", null, hello));

            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Button with icon:"));
            this.items.add(new ButtonItem("Click me", IconItem.saveIcon(), hello));

            const btnA = new ButtonItem("Click me", IconItem.saveIcon(), hello);
            btnA.items.addArray(dd);
            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Button with icon, dropdown:"));
            this.items.add(btnA);

            const btnB = new ButtonItem("Click me", IconItem.saveIcon(), hello);
            btnB.items.addArray(dd);
            btnB.split = true;
            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Button with icon, dropdown, split:"));
            this.items.add(btnB);

            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Just icon:"));
            this.items.add(new ButtonItem(null, IconItem.saveIcon(), hello));

            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Just icon, big:"));
            this.items.add(new ButtonItem(null, LinearIcon.alarm.go32(), hello));

            const bigBtn = new ButtonItem("Click me", LinearIcon.file_add.go32(), hello);
            bigBtn.direction = Direction.VERTICAL;
            bigBtn.items.addArray(dd);
            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Big Icon with text, vertical, with dropdown:"));
            this.items.add(bigBtn);

            const bigBtnSplit = new ButtonItem("Click me", LinearIcon.file_add.go32(), hello);
            bigBtnSplit.direction = Direction.VERTICAL;
            bigBtnSplit.items.addArray(dd);
            bigBtnSplit.split = true;
            bigBtnSplit.faceVisible = true;
            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Big Icon with text, vertical, with dropdown:"));
            this.items.add(bigBtnSplit);

        }

    }
}