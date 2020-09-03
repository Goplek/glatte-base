module latte{

    export class DemoExplorerItem extends ExplorerItem{

        constructor(readonly caption: string, readonly viewLoader: () => Promise<View>){
            super();

            this.loadsChildrenFolders = false;
        }

        getChildrenView(): ExplorerChildrenView{

            const childrenView = new ExplorerChildrenView();

            this.viewLoader().then(v => childrenView.view = v);

            return childrenView;
        }

        getName(): string{
            return this.caption;
        }

    }

}