module latte{
    export class ButtonExplorerItem extends ExplorerItem{

        constructor(){
            super();

            this.loadsChildrenFolders = false;
        }

        getChildrenView(): ExplorerChildrenView{
            return new ButtonView();
        }

        getName(): string{
            return "Button";
        }

    }
}