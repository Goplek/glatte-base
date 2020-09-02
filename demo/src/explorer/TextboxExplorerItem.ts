module latte{
    export class TextboxExplorerItem extends ExplorerItem{

        constructor(){
            super();

            this.loadsChildrenFolders = false;
        }

        getChildrenView(): ExplorerChildrenView{
            return new DemoTextboxView();
        }

        getName(): string{
            return "Textbox";
        }

    }
}