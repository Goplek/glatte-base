module latte{
    export class DemoCalendarView extends SplitView{
        constructor(){
            super();

            this.side = Side.TOP;
            this.view = new CalendarView();
        }
    }
}