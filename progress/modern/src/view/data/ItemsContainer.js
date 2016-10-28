Ext.define('progress.view.data.ItemsContainer', {

    extend : 'Ext.form.FieldSet',

    alias : 'widget.progress_modern_data_items_container',

    requires : [
        'Ext.data.StoreManager',
        'progress.view.data.ItemsContainerController'
    ],

    controller : 'progress_modern_data_items_container',

    viewModel : {},

    config : {
        store : null,
        valueStore : null
    },

    items : [],

    applyStore : function(store) {
        if (store) {
            store = Ext.data.StoreManager.lookup(store);
        }

        return store;
    },

    updateStore : function(store, oldStore) {
        var me = this;

        if (oldStore && oldStore.getAutoDestroy()) {
            oldStore.destroy();
        }

        if (store) {
            store.on({
                scope : this,
                add : 'onStoreDataChanged',
                remove : 'onStoreDataChanged',
                update : 'onStoreDataChanged',
                refresh : 'onStoreDataChanged'
            });
            me.onStoreDataChanged(store);
        }
    },

    /**
     * Called when the internal {@link #store}'s data has changed.
     */
    onStoreDataChanged : function(store) {},

    applyValueStore : function(store) {
        if (store) {
            store = Ext.data.StoreManager.lookup(store);
        }

        return store;
    },

    updateValueStore : function(store, oldStore) {
        var me = this;

        if (oldStore && oldStore.getAutoDestroy()) {
            oldStore.destroy();
        }

        if (store) {
            store.on({
                scope : this,
                add : 'onValueStoreDataChanged',
                remove : 'onValueStoreDataChanged',
                update : 'onValueStoreDataChanged',
                refresh : 'onValueStoreDataChanged'
            });
            me.onValueStoreDataChanged(store);
        }
    },

    /**
     * Called when the internal {@link #store}'s data has changed.
     */
    onValueStoreDataChanged : function(store) {
        this.buildItems();
    },

    buildItems : function() {
        // permanent

        // value chooser
        this.add({
            xtype : 'selectfield',
            label : 'Тип нагрузки',
            store : this.getStore(),
            valueField : 'id',
            displayField : 'name'
        });

        // values
    }

});
