Ext.define('progress.view.data.ItemsContainerController', {

    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_modern_data_items_container',

    onClickAddValue : function() {
        this.lookup('valueSelector').showPicker();
    },

    onAddValue : function() {
        var valueSelector = this.lookup('valueSelector'),
            valR = valueSelector.getSelection();

        this._addValue(valueSelector, valR);
    },

    onValueSelectorChange : function(valueSelector, valR) {
        if (valR) {
            this._addValue(valueSelector, valR);
        }
    },

    _addValue : function(valueSelector, valR) {
        var view = this.getView(),
            vm = this.getViewModel(),
            data = {
                day_id : vm.get('dayData.id')
            },
            valueStore = vm.get('values');

        data[view.getValueIdent()] = valR.getId();

        valueStore.add(data);
        valueSelector.reset();
    },

    onRemoveValue : function(cmp) {
        this.getView().getValueStore().remove(cmp._record);
    }
});
