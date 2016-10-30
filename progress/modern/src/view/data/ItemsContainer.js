Ext.define('progress.view.data.ItemsContainer', {

    extend : 'Ext.form.FieldSet',

    alias : 'widget.progress_modern_data_items_container',

    requires : [
        'Ext.data.StoreManager',
        'progress.view.data.ItemsContainerController',
        'Ext.field.Slider',
        'Ext.field.Spinner'
    ],

    controller : 'progress_modern_data_items_container',

    viewModel : {

    },

    config : {
        store : null,
        valueStore : null,
        valueIdent : null,

        /**
         * @accessor
         */
        valueName : null
    },

    withPermanent : false,

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

        if (this.withPermanent) {
            me.permanented = [];
            store.each(function(val) {
                if (val.get('is_permanent')) {
                    me.permanented.push(val);
                }
            });
        }

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
                load : 'onValueStoreDataChanged'
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
        if (this.withPermanent) {
            selectorStore.setFilters([
                {
                    property : 'is_permanent',
                    value : false
                }
            ]);
        }

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
                    labelAlign : 'placeholder',
                    flex : 1
                },
                {
                    xtype : 'button',
                    iconCls : 'x-fa fa-plus-circle',
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
            permanentBlock = this.down('[reference=permanentValuesBlock]'),
            store = this.getStore(),
            valueIdent = this.getValueIdent(),
            valueStore = this.getValueStore();

        valuesBlock.removeAll();
        permanentBlock.removeAll();
        if (valueStore) {
            valueStore.each(function(val) {
                var unit = store.getById(val.get(valueIdent));

                if (unit.get('is_permanent')) {
                    permanentBlock.add(me.getValueField(val));
                } else {
                    valuesBlock.add(me.getValueField(val));
                }
            });
        }
    },

    getValueField : function(val) {
        var store = this.getStore(),
            unit = store.getById(val.get(this.getValueIdent())),
            type = unit.get('type'),
            min = unit.get('min'),
            max = unit.get('max');

        switch (type) {

            case 'int':
                return {
                    xtype : 'container',
                    layout : 'hbox',
                    items : [
                        {
                            xtype : 'sliderfield',
                            viewModel : {
                                data : {
                                    record : val
                                }
                            },
                            bind : {
                                value : '{record.value}'
                            },
                            minValue : parseInt(min, 10),
                            maxValue : parseInt(max, 10),
                            increment : 1,
                            label : unit.get('name'),
                            flex : 1,
                            margin : '1 0 0 0'
                        },
                        {
                            xtype : 'component',
                            viewModel : {
                                data : {
                                    record : val
                                }
                            },
                            bind : {
                                html : '{record.value}'
                            },
                            margin : '0 0 0 10',
                            padding : '20 0 0 0'
                        }
                    ]
                };

                break;

            case 'string':
                return {
                    xtype : 'textfield',
                    viewModel : {
                        data : {
                            record : val
                        }
                    },
                    bind : {
                        value : '{record.value}'
                    },
                    label : unit.get('name')
                };

                break;

            case 'float':
                return {
                    xtype : 'numberfield',
                    viewModel : {
                        data : {
                            record : val
                        }
                    },
                    bind : {
                        value : '{record.value}'
                    },
                    label : unit.get('name')
                };
                break;

            default:
                return {
                    xtype : 'selectfield',
                    store : store,
                    valueField : 'id',
                    displayField : 'name',
                    selection : store.getById(val.get(this.getValueIdent())),
                    margin : 0
                };
        }
    }

});
