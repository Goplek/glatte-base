var latte;
(function (latte) {
    class ButtonExplorerItem extends latte.ExplorerItem {
        constructor() {
            super();
            this.loadsChildrenFolders = false;
        }
        getChildrenView() {
            return new latte.ButtonView();
        }
        getName() {
            return "Button";
        }
    }
    latte.ButtonExplorerItem = ButtonExplorerItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TextboxExplorerItem extends latte.ExplorerItem {
        constructor() {
            super();
            this.loadsChildrenFolders = false;
        }
        getName() {
            return "Textbox";
        }
    }
    latte.TextboxExplorerItem = TextboxExplorerItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class UiRootItem extends latte.ExplorerItem {
        constructor() {
            super();
            this.children.addArray([
                new latte.ButtonExplorerItem(),
                new latte.TextboxExplorerItem(),
            ]);
        }
        getColumnHeaders() {
            return [
                new latte.ColumnHeader("Name", 400)
            ];
        }
        getName() {
            return "UI";
        }
    }
    latte.UiRootItem = UiRootItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ButtonView extends latte.ExplorerChildrenView {
        constructor() {
            super();
            this.addClass('demo-button-view');
            const hello = () => latte.DialogView.inform("Hello!");
            const columnView = new latte.ColumnView();
            const dd = [
                new latte.ButtonItem("Command 1", latte.IconItem.fileIcon(), hello),
                new latte.ButtonItem("Command 2", latte.IconItem.folderIcon(), hello),
                new latte.ButtonItem("Command 3", latte.IconItem.saveIcon(), hello),
            ];
            columnView.items.add(new latte.LabelItem("Simple Button"));
            columnView.items.add(new latte.ButtonItem("Click me", null, hello));
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Button with icon:"));
            columnView.items.add(new latte.ButtonItem("Click me", latte.IconItem.saveIcon(), hello));
            const btnA = new latte.ButtonItem("Click me", latte.IconItem.saveIcon(), hello);
            btnA.items.addArray(dd);
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Button with icon, dropdown:"));
            columnView.items.add(btnA);
            const btnB = new latte.ButtonItem("Click me", latte.IconItem.saveIcon(), hello);
            btnB.items.addArray(dd);
            btnB.split = true;
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Button with icon, dropdown, split:"));
            columnView.items.add(btnB);
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Just icon:"));
            columnView.items.add(new latte.ButtonItem(null, latte.IconItem.saveIcon(), hello));
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Just icon, big:"));
            columnView.items.add(new latte.ButtonItem(null, latte.LinearIcon.alarm.go32(), hello));
            const bigBtn = new latte.ButtonItem("Click me", latte.LinearIcon.file_add.go32(), hello);
            bigBtn.direction = latte.Direction.VERTICAL;
            bigBtn.items.addArray(dd);
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Big Icon with text, vertical, with dropdown:"));
            columnView.items.add(bigBtn);
            const bigBtnSplit = new latte.ButtonItem("Click me", latte.LinearIcon.file_add.go32(), hello);
            bigBtnSplit.direction = latte.Direction.VERTICAL;
            bigBtnSplit.items.addArray(dd);
            bigBtnSplit.split = true;
            bigBtnSplit.faceVisible = true;
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Big Icon with text, vertical, with dropdown:"));
            columnView.items.add(bigBtnSplit);
            this.view = columnView;
        }
    }
    latte.ButtonView = ButtonView;
})(latte || (latte = {}));
