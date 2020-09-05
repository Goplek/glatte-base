module latte{
    export class DemoTabView extends TabView{

        constructor() {
            super();

            const a = new TabItem("First Tab");
            const b = new TabItem("Second Tab");
            const c = new TabItem("Third Tab");

            this.tabs.addArray([a, b, c]);



            const main = new DemoBaseView();

            const top = new ButtonItem("Snap to top", null, () => this.tabsSide = Side.TOP);
            const bottom = new ButtonItem("Snap to bottom", null, () => this.tabsSide = Side.BOTTOM);
            const lblSelected = new LabelItem();

            main.addItem("Try snapping tabs to top", top);
            main.addItem("Try snapping tabs to bottom", bottom);
            main.addItem("SelectedTab:", lblSelected);

            this.selectedTabChanged.add(() => {
                lblSelected.text = this.selectedTab.text;
            });

            this.selectedTab = a;
            this.view = main;

        }


    }
}