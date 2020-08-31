var latte;
(function (latte) {
    class UiRootItem extends latte.ExplorerItem {
        getName() {
            return "UI";
        }
    }
    latte.UiRootItem = UiRootItem;
})(latte || (latte = {}));
