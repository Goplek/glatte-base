module latte{
    export class DemoButtonView extends ExplorerChildrenView{

        constructor(){
            super();

            this.addClass('demo-view');

            const hello = () => DialogView.inform("Hello!");
            const columnView = new ColumnView();
            const dd = [
                new ButtonItem("Command 1", IconItem.fileIcon(), hello),
                new ButtonItem("Command 2", IconItem.folderIcon(), hello),
                new ButtonItem("Command 3", IconItem.saveIcon(), hello),
            ];

            columnView.items.add(new LabelItem("Simple Button"));
            columnView.items.add(new ButtonItem("Click me", null, hello));

            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Button with icon:"));
            columnView.items.add(new ButtonItem("Click me", IconItem.saveIcon(), hello));

            const btnA = new ButtonItem("Click me", IconItem.saveIcon(), hello);
            btnA.items.addArray(dd);
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Button with icon, dropdown:"));
            columnView.items.add(btnA);

            const btnB = new ButtonItem("Click me", IconItem.saveIcon(), hello);
            btnB.items.addArray(dd);
            btnB.split = true;
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Button with icon, dropdown, split:"));
            columnView.items.add(btnB);

            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Just icon:"));
            columnView.items.add(new ButtonItem(null, IconItem.saveIcon(), hello));

            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Just icon, big:"));
            columnView.items.add(new ButtonItem(null, LinearIcon.alarm.go32(), hello));

            const bigBtn = new ButtonItem("Click me", LinearIcon.file_add.go32(), hello);
            bigBtn.direction = Direction.VERTICAL;
            bigBtn.items.addArray(dd);
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Big Icon with text, vertical, with dropdown:"));
            columnView.items.add(bigBtn);

            const bigBtnSplit = new ButtonItem("Click me", LinearIcon.file_add.go32(), hello);
            bigBtnSplit.direction = Direction.VERTICAL;
            bigBtnSplit.items.addArray(dd);
            bigBtnSplit.split = true;
            bigBtnSplit.faceVisible = true;
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Big Icon with text, vertical, with dropdown:"));
            columnView.items.add(bigBtnSplit);

            this.view = columnView;
        }

    }
}