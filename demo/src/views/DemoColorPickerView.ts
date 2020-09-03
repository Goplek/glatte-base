/// <reference path="DemoBaseView.ts"/>
module latte{

    export class DemoColorPickerView extends DemoBaseView{

        constructor(){
            super();

            this.addClass('demo-view');

            this.items.add(new SeparatorItem());
            this.items.add(new LabelItem("Default Color Picker"));
            this.items.add(new ColorPicker());
        }

    }

}