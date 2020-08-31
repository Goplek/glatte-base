module latte{
    export class UiRootItem extends ExplorerItem{

        constructor(){
            super();

            this.children.addArray([
                new ButtonExplorerItem(),
                new TextboxExplorerItem(),
            ]);

        }

        getColumnHeaders(): ColumnHeader[]{
            return [
                new ColumnHeader("Name", 400)
            ];
        }

        getName(): string{
            return "UI";
        }

    }
}
