/// <reference path="DemoBaseView.ts"/>
module latte{
    export class DemoConversationView extends DemoBaseView{

        constructor(){
            super();

            this.addClass('demo-view');

            const c = new ConversationItem();

            const c1 = new CommentItem();
            c1.text = "Hello World!";
            c1.date = DateTime.now;
            c1.icon = LinearIcon.file_empty.go32();
            c1.user = "John Doe";
            c.comments.add(c1);

            c.commentAdded.add(text => {
                const c1 = new CommentItem();
                c1.text = text;
                c1.date = DateTime.now;
                c1.icon = LinearIcon.file_empty.go32();
                c1.user = "John Doe";
                c.comments.add(c1);
            });

            c.textbox.placeholder = "Enter a comment";

            this.items.add(new LabelItem("Conversation"));
            this.items.add(new SeparatorItem());
            this.items.add(c);
        }

    }
}