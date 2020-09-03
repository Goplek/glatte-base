/// <reference path="DemoBaseView.ts"/>
module latte{
    export class DemoRibbonView  extends DemoBaseView{
        constructor(){
            super();

            const r = new Ribbon();
            r.startButton.text = "Options";
            r.startButton.items.addArray([
                new ButtonItem("Option A"),
                new ButtonItem("Option B"),
                new ButtonItem("Option C"),
                new ButtonItem("Option D"),
            ]);

            const t1 = new TabItem("File");
            const t2 = new TabItem("Edit");
            const t3 = new TabItem("View");
            r.tabs.addArray([t1, t2, t3]);

            const b1 = new ButtonItem("Open", LinearIcon.file_empty.go32(), null, t1);
            b1.split = true;
            b1.items.addArray([
                new ButtonItem("Option A"),
                new ButtonItem("Option B"),
                new ButtonItem("Option C"),
            ]);

            const sep = () => {
                const s = new SeparatorItem();
                s.tab = t1;
                return s;
            };

            const b2 = new ButtonGroupItem([
                new ButtonItem("A"),
                new ButtonItem("B"),
                new ButtonItem("C"),
            ]);
            b2.tab = t1;

            const b3 = new ButtonItem("Some command");
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
}