module latte {
    export class DemoSplitView extends SplitView{
        constructor(){
            super();

            const side = new DemoBaseView();
            const main = new DemoBaseView();

            side.addLabel("This is the side View");
            main.addLabel("This is the main View");

            const setSide = (side: Side) => {
                this.side = side;
                switch (side) {
                    case Side.TOP: g.checkedButton = top; break;
                    case Side.LEFT: g.checkedButton = left; break;
                    case Side.RIGHT: g.checkedButton = right; break;
                    case Side.BOTTOM: g.checkedButton = bottom; break;
                }
            };

            const top = new ButtonItem("Top", null, () => setSide(Side.TOP));
            const left = new ButtonItem("Left", null, () => setSide(Side.LEFT));
            const right = new ButtonItem("Right", null, () => setSide(Side.RIGHT));
            const bottom = new ButtonItem("Bottom", null, () => setSide(Side.BOTTOM));
            const g = new ButtonGroupItem([top, left, right, bottom]);

            main.addItem("Choose a Side for anchoring the split", g);

            this.sideView = side;
            this.view = main;
            setSide(Side.TOP);
        }
    }
}