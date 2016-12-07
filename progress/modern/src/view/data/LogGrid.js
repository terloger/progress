Ext.define('progress.view.data.LogGrid', {

    extend : 'Ext.grid.Grid',

    requires : [
        'progress.view.data.LogGridController',
        'Ext.grid.plugin.ColumnResizing'
    ],

    alias : 'widget.progress_modern_data_log_grid',

    cls : 'progress_modern_data_log_grid',

    controller : {
        type : 'progress_modern_data_log_grid'
    },

    items : [
        {
            docked : 'top',
            xtype : 'toolbar',
            ui : 'light',
            items : [
                {
                    xtype : 'selectfield',
                    label : 'Показатель',
                    bind : {
                        store : '{units}'
                    },
                    usePicker : false,
                    defaultTabletPickerConfig : {
                        width : '20em'
                    },
                    autoSelect : false,
                    valueField : 'id',
                    displayField : 'name',
                    width : 300,
                    listeners : {
                        change : 'onValueSelectorChange'
                    }
                },
                '->',
                {
                    xtype : 'button',
                    iconCls : 'x-fa fa-refresh'
                }
            ]
        }
    ],

    plugins : [
        {
            type : 'columnresizing'
        }
    ],

    columns : [
        {
            xtype : 'datecolumn',
            text : 'Дата',
            dataIndex : 'date',
            width : 130,
            format : 'd.m.y (D)'
        },
        {
            text : 'Значение',
            flex : 1,
            dataIndex : 'value'
        }
    ]

});
