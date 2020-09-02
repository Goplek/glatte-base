module latte{
    export class DemoTextboxView extends ExplorerChildrenView{

        constructor(){
            super();

            this.addClass('demo-view');

            const columnView = new ColumnView();

            columnView.items.add(new LabelItem("Simple Text box"));
            columnView.items.add(new TextboxItem());

            const ta = new TextboxItem();
            ta.placeholder = "Enter a value here";
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Placeholder with indications"));
            columnView.items.add(ta);

            const tb = new TextboxItem();
            tb.sideLabel.text = "px";
            tb.value = 50..toString();
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Some indication on sideLabel"));
            columnView.items.add(tb);
            this.view = columnView;

            const tc = new TextboxItem();
            tc.filterSuggestions.add(() => {
                tc.suggestions.clear();
                for(let _ of new Array(5)){
                    const t = `${tc.value} - ${Math.round(Math.random() * 1000)}`;
                    tc.suggestions.add(new ButtonItem(t, null, () => tc.value = t))
                }

            });
            columnView.items.add(new SeparatorItem());
            columnView.items.add(new LabelItem("Suggestions"));
            columnView.items.add(tc);
            this.view = columnView;

        }

    }
}