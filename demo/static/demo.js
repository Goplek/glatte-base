var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var latte;
(function (latte) {
    class DemoExplorerItem extends latte.ExplorerItem {
        constructor(caption, viewLoader) {
            super();
            this.caption = caption;
            this.viewLoader = viewLoader;
            this.loadsChildrenFolders = false;
        }
        getChildrenView() {
            const childrenView = new latte.ExplorerChildrenView();
            this.viewLoader().then(v => childrenView.view = v);
            return childrenView;
        }
        getName() {
            return this.caption;
        }
    }
    latte.DemoExplorerItem = DemoExplorerItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class UiRootItem extends latte.ExplorerItem {
        constructor() {
            super();
            this.children.addArray([
                new latte.DemoExplorerItem("Button", () => __awaiter(this, void 0, void 0, function* () { return new latte.DemoButtonView(); })),
                new latte.DemoExplorerItem("ButtonGroup", () => __awaiter(this, void 0, void 0, function* () { return new latte.DemoGroupButtonView(); })),
                new latte.DemoExplorerItem("ColorPicker", () => __awaiter(this, void 0, void 0, function* () { return new latte.DemoColorPickerView(); })),
                new latte.DemoExplorerItem("Conversation", () => __awaiter(this, void 0, void 0, function* () { return new latte.DemoConversationView(); })),
                new latte.DemoExplorerItem("DateItem", () => __awaiter(this, void 0, void 0, function* () { return new latte.DemoDateItemView(); })),
                new latte.DemoExplorerItem("Ribbon", () => __awaiter(this, void 0, void 0, function* () { return new latte.DemoRibbonView(); })),
                new latte.DemoExplorerItem("Textbox", () => __awaiter(this, void 0, void 0, function* () { return new latte.DemoTextboxView(); })),
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
    class DemoBaseView extends latte.ColumnView {
        constructor() {
            super();
            this.addClass('demo-view');
        }
        addSeparator() {
            this.items.add(new latte.SeparatorItem());
        }
        addLabel(text) {
            this.items.add(new latte.LabelItem(text));
        }
        addItem(text, item) {
            this.addSeparator();
            this.addLabel(text);
            this.items.add(item);
        }
    }
    latte.DemoBaseView = DemoBaseView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DemoButtonView extends latte.DemoBaseView {
        constructor() {
            super();
            this.addClass('demo-view');
            const hello = () => latte.DialogView.inform("Hello!");
            const dd = [
                new latte.ButtonItem("Command 1", latte.IconItem.fileIcon(), hello),
                new latte.ButtonItem("Command 2", latte.IconItem.folderIcon(), hello),
                new latte.ButtonItem("Command 3", latte.IconItem.saveIcon(), hello),
            ];
            this.items.add(new latte.LabelItem("Simple Button"));
            this.items.add(new latte.ButtonItem("Click me", null, hello));
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Button with icon:"));
            this.items.add(new latte.ButtonItem("Click me", latte.IconItem.saveIcon(), hello));
            const btnA = new latte.ButtonItem("Click me", latte.IconItem.saveIcon(), hello);
            btnA.items.addArray(dd);
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Button with icon, dropdown:"));
            this.items.add(btnA);
            const btnB = new latte.ButtonItem("Click me", latte.IconItem.saveIcon(), hello);
            btnB.items.addArray(dd);
            btnB.split = true;
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Button with icon, dropdown, split:"));
            this.items.add(btnB);
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Just icon:"));
            this.items.add(new latte.ButtonItem(null, latte.IconItem.saveIcon(), hello));
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Just icon, big:"));
            this.items.add(new latte.ButtonItem(null, latte.LinearIcon.alarm.go32(), hello));
            const bigBtn = new latte.ButtonItem("Click me", latte.LinearIcon.file_add.go32(), hello);
            bigBtn.direction = latte.Direction.VERTICAL;
            bigBtn.items.addArray(dd);
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Big Icon with text, vertical, with dropdown:"));
            this.items.add(bigBtn);
            const bigBtnSplit = new latte.ButtonItem("Click me", latte.LinearIcon.file_add.go32(), hello);
            bigBtnSplit.direction = latte.Direction.VERTICAL;
            bigBtnSplit.items.addArray(dd);
            bigBtnSplit.split = true;
            bigBtnSplit.faceVisible = true;
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Big Icon with text, vertical, with dropdown:"));
            this.items.add(bigBtnSplit);
        }
    }
    latte.DemoButtonView = DemoButtonView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DemoColorPickerView extends latte.DemoBaseView {
        constructor() {
            super();
            this.addClass('demo-view');
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Default Color Picker"));
            this.items.add(new latte.ColorPicker());
        }
    }
    latte.DemoColorPickerView = DemoColorPickerView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DemoConversationView extends latte.DemoBaseView {
        constructor() {
            super();
            this.addClass('demo-view');
            const c = new latte.ConversationItem();
            const c1 = new latte.CommentItem();
            c1.text = "Hello World!";
            c1.date = latte.DateTime.now;
            c1.icon = latte.LinearIcon.file_empty.go32();
            c1.user = "John Doe";
            c.comments.add(c1);
            c.commentAdded.add(text => {
                const c1 = new latte.CommentItem();
                c1.text = text;
                c1.date = latte.DateTime.now;
                c1.icon = latte.LinearIcon.file_empty.go32();
                c1.user = "John Doe";
                c.comments.add(c1);
            });
            c.textbox.placeholder = "Enter a comment";
            this.items.add(new latte.LabelItem("Conversation"));
            this.items.add(new latte.SeparatorItem());
            this.items.add(c);
        }
    }
    latte.DemoConversationView = DemoConversationView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DemoDateItemView extends latte.DemoBaseView {
        constructor() {
            super();
            this.addClass('demo-view');
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("Simple Date Item"));
            this.items.add(new latte.DateItem());
            const d2 = new latte.DateItem();
            d2.rows = d2.columns = 2;
            this.items.add(new latte.SeparatorItem());
            this.items.add(new latte.LabelItem("2 x 2 Date Item"));
            this.items.add(d2);
        }
    }
    latte.DemoDateItemView = DemoDateItemView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DemoGroupButtonView extends latte.DemoBaseView {
        constructor() {
            super();
            const columnView = this;
            const g1 = new latte.ButtonGroupItem([
                new latte.ButtonItem("Button A"),
                new latte.ButtonItem("Button B"),
                new latte.ButtonItem("Button C"),
            ]);
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Simple Group"));
            columnView.items.add(g1);
            const setg2bs = index => g2.checkedButton = g2bs[index];
            const g2bs = [
                new latte.ButtonItem("Button A", null, () => setg2bs(0)),
                new latte.ButtonItem("Button B", null, () => setg2bs(1)),
            ];
            const g2 = new latte.ButtonGroupItem(g2bs);
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Keep selection on click"));
            columnView.items.add(g2);
            const g3 = new latte.ButtonGroupItem([
                new latte.ButtonItem(null, latte.LinearIcon.file_add),
                new latte.ButtonItem(null, latte.LinearIcon.file_empty),
                new latte.ButtonItem(null, latte.IconItem.saveIcon()),
            ]);
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Just icons"));
            columnView.items.add(g3);
        }
    }
    latte.DemoGroupButtonView = DemoGroupButtonView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DemoRibbonView extends latte.DemoBaseView {
        constructor() {
            super();
            const r = new latte.Ribbon();
            r.startButton.text = "Options";
            r.startButton.items.addArray([
                new latte.ButtonItem("Option A"),
                new latte.ButtonItem("Option B"),
                new latte.ButtonItem("Option C"),
                new latte.ButtonItem("Option D"),
            ]);
            const t1 = new latte.TabItem("File");
            const t2 = new latte.TabItem("Edit");
            const t3 = new latte.TabItem("View");
            r.tabs.addArray([t1, t2, t3]);
            const b1 = new latte.ButtonItem("Open", latte.LinearIcon.file_empty.go32(), null, t1);
            b1.split = true;
            b1.items.addArray([
                new latte.ButtonItem("Option A"),
                new latte.ButtonItem("Option B"),
                new latte.ButtonItem("Option C"),
            ]);
            const sep = () => {
                const s = new latte.SeparatorItem();
                s.tab = t1;
                return s;
            };
            const b2 = new latte.ButtonGroupItem([
                new latte.ButtonItem("A"),
                new latte.ButtonItem("B"),
                new latte.ButtonItem("C"),
            ]);
            b2.tab = t1;
            const b3 = new latte.ButtonItem("Some command");
            b3.tab = t1;
            r.items.addArray([
                b1,
                sep(),
                b2, sep(), b3
            ]);
            r.selectedTab = t1;
            this.addItem("Simple Ribbon", r);
        }
    }
    latte.DemoRibbonView = DemoRibbonView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DemoTextboxView extends latte.DemoBaseView {
        constructor() {
            super();
            this.addClass('demo-view');
            const columnView = this;
            columnView.items.add(new latte.LabelItem("Simple Text box"));
            columnView.items.add(new latte.TextboxItem());
            const ta = new latte.TextboxItem();
            ta.placeholder = "Enter a value here";
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Placeholder with indications"));
            columnView.items.add(ta);
            const tb = new latte.TextboxItem();
            tb.sideLabel.text = "px";
            tb.value = 50..toString();
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Some indication on sideLabel"));
            columnView.items.add(tb);
            const tc = new latte.TextboxItem();
            tc.filterSuggestions.add(() => {
                tc.suggestions.clear();
                for (let _ of new Array(5)) {
                    const t = `${tc.value} - ${Math.round(Math.random() * 1000)}`;
                    tc.suggestions.add(new latte.ButtonItem(t, null, () => tc.value = t));
                }
            });
            columnView.items.add(new latte.SeparatorItem());
            columnView.items.add(new latte.LabelItem("Suggestions"));
            columnView.items.add(tc);
        }
    }
    latte.DemoTextboxView = DemoTextboxView;
})(latte || (latte = {}));
