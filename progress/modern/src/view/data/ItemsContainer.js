Ext.define('progress.view.data.ItemsContainer', {

    extend : 'Ext.form.FieldSet',

    alias : 'widget.progress_modern_data_items_container',

    requires : [
        'Ext.data.StoreManager',
        'progress.view.data.ItemsContainerController'
    ],

    controller : 'progress_modern_data_items_container',

    viewModel : {

    },

    config : {
        store : null,
        valueStore : null,
        valueIdent : null,
        valueName : null
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
                load : 'onStoreDataChanged'
            });
            me.onStoreDataChanged(store);
        }
    },

    /**
     * Called when the internal {@link #store}'s data has changed.
     */
    onStoreDataChanged : function(store) {
        var me = this;

        me.permanented = [];
        store.each(function(val) {
            if (val.get('is_permanent')) {
                me.permanented.push(val);
            }
        });

        this.buildItems();
    },

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
            this.getViewModel().set('values', store);

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
        this.buildValueItems();
    },

    buildItems : function() {
        var me = this,
            store = this.getStore(),
            valueStore = this.getValueStore(),
            selectorStore = Ext.data.StoreManager.lookup({
                type : store.type
            }),
            valueItems = [];

        this.removeAll();

        // permanent
        this.add({
            xtype : 'container',
            reference : 'permanentValuesBlock',
            items : []
        });

        // value chooser
        selectorStore.setData(store.getRange());
        selectorStore.setFilters([
            {
                property : 'is_permanent',
                value : false
            }
        ]);
        this.add({
            xtype : 'container',
            layout : 'hbox',
            items : [
                {
                    xtype : 'selectfield',
                    label : this.getValueName(),
                    store : selectorStore,
                    autoSelect : false,
                    valueField : 'id',
                    displayField : 'name',
                    reference : 'valueSelector',
                    flex : 1
                },
                {
                    xtype : 'button',
                    iconCls : 'x-fa fa-plus',
                    handler : 'onAddValue',
                    hidden : true,
                    bind : {
                        hidden : '{!valueSelector.selection.id}'
                    }
                }
            ],
            margin : '0 0 10 0'
        });

        // values
        if (valueStore) {
            valueStore.each(function(val) {
                valueItems.push({
                    xtype : 'selectfield',
                    store : store,
                    valueField : 'id',
                    displayField : 'name',
                    selection : store.getById(val.get(me.getValueIdent()))
                });
            });
        }

        this.add({
            xtype : 'container',
            reference : 'valuesBlock',
            items : valueItems
        });
    },

    buildValueItems : function() {
        var me = this,
            valuesBlock = this.down('[reference=valuesBlock]'),
            store = this.getStore(),
            valueStore = this.getValueStore();

        valuesBlock.removeAll();
        if (valueStore) {
            valueStore.each(function(val) {
                valuesBlock.add({
                    xtype : 'selectfield',
                    store : store,
                    valueField : 'id',
                    displayField : 'name',
                    selection : store.getById(val.get(me.getValueIdent())),
                    margin : 0
                });
            });
        }
    }

});
