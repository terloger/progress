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
        },
        {
            xtype : 'cartesian',
            docked : 'top',
            bind : {
                store : '{valueLog}'
            },
            height : 100,
            margin : '20 5',
            series : [
                {
                    type : 'line',
                    xField : 'date',
                    yField : 'value',
                    style : {
                        miterLimit : 3,
                        lineCap : 'miter',
                        opacity : 0.7,
                        lineWidth : 1
                    },

                    marker : {
                        type : 'circle',
                        fillStyle : 'blue',
                        radius : 1
                    }
                }
            ],
            axes : [
                {
                    type : 'numeric',
                    position : 'left',
                    fields : ['value'],
                    minimum : 0
                },
                {
                    type : 'time',
                    dateFormat : 'd.m.Y',
                    visibleRange : [0, 1],
                    position : 'bottom',
                    fields : 'date'
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
