Ext.define('progress.view.data.LogGridController', {

    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_modern_data_log_grid',

    onValueSelectorChange : function(cmp, record) {
        this.getView().getStore().load({
            params : {
                units : record.getId()
            }
        })
    }
});
