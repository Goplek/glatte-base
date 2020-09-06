module latte{
    export class DemoDialogView extends DemoBaseView{
        constructor(){
            super();

            this.addItem("Inform something", new ButtonItem("DialogView.inform()", null, () => {
                DialogView.inform("This is the message", "This is a long description for the message")
            }));

            this.addItem("Alert something", new ButtonItem("DialogView.alert()", null, () => {
                DialogView.alert("This is the message")
            }));

            this.addItem("Prompt info", new ButtonItem("DialogView.input()", null, () => {
                DialogView.input("Ask something", {

                        "name": {type: "string", text: "Name"},
                        "remember": {type: "boolean", text: "Don't ask me again"}
                    }
                )
            }));


        }
    }
}