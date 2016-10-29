Ext.define('progress.view.data.ItemsContainerController', {

    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_modern_data_items_container',

    onAddValue : function() {
        var valueSelector = this.lookup('valueSelector'),
            valR = valueSelector.getSelection(),
            view = this.getView(),
            vm = this.getViewModel(),
            data = {
                day_id : vm.get('dayData.id')
            },
            valueStore = vm.get('values');

        data[view.getValueIdent()] = valR.getId();

        valueStore.add(data);
        valueSelector.reset();
    }
});
