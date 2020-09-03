module latte{
    export class UiRootItem extends ExplorerItem{

        constructor(){
            super();

            this.children.addArray([
                new DemoExplorerItem("Button", async () => new DemoButtonView()),
                new DemoExplorerItem("ButtonGroup", async () => new DemoGroupButtonView()),
                new DemoExplorerItem("ColorPicker", async () => new DemoColorPickerView()),
                new DemoExplorerItem("Conversation", async () => new DemoConversationView()),
                new DemoExplorerItem("DateItem", async () => new DemoDateItemView()),
                new DemoExplorerItem("Ribbon", async () => new DemoRibbonView()),
                new DemoExplorerItem("Textbox", async () => new DemoTextboxView()),
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
