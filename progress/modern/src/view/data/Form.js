Ext.define('progress.view.data.Form', {

    extend : 'Ext.panel.Panel',

    alias : 'widget.progress_modern_data_form',

    viewModel : {},

    items : [
        {
            xtype : 'datepickerfield',
            label : 'Сегодня',
            dateFormat : 'd.m.Y',
            readOnly : true,
            bind : {
                value : '{dayData.date}'
            }
        },
        {
            xtype : 'textareafield',
            label : 'Описание дня',
            bind : {
                value : '{dayData.description}'
            }
        },
        {
            xtype : 'container',
            defaults : {
                style : 'margin: 1em',
                flex : 1
            },
            layout : {
                type : 'hbox'
            },
            items : [
                {
                    xtype : 'container'
                },
                {
                    xtype : 'button',
                    text : 'Сохранить',
                    ui : 'action',
                    handler : 'onSave'
                }
            ]
        }
    ]

});
