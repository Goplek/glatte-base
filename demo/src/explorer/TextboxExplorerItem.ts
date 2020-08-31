module latte{
    export class TextboxExplorerItem extends ExplorerItem{

        constructor(){
            super();

            this.loadsChildrenFolders = false;
        }

        getName(): string{
            return "Textbox";
        }

    }
}