Ext.define('progress.view.data.LogGrid', {

    extend : 'Ext.grid.Grid',

    alias : 'widget.progress_modern_data_log_grid',

    cls : 'progress_modern_data_log_grid',

    columns : [
        {
            xtype : 'datecolumn',
            text : 'Дата',
            dataIndex : 'date',
            format : 'd.m.Y'
        },
        {
            text : 'Значение',
            dataIndex : 'unit_1'
        }
    ]

});
