module latte{
    export class ButtonExplorerItem extends ExplorerItem{

        constructor(){
            super();

            this.loadsChildrenFolders = false;
        }

        getChildrenView(): ExplorerChildrenView{
            return new DemoButtonView();
        }

        getName(): string{
            return "Button";
        }

    }
}