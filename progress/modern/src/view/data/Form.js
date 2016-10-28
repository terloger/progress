Ext.define('progress.view.data.Form', {

    extend : 'Ext.panel.Panel',

    alias : 'widget.progress_modern_data_form',

    requires : [
        'progress.view.data.ItemsContainer'
    ],

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
            xtype : 'progress_modern_data_items_container',
            title : 'Нагрузка',
            bind : {
                store : '{typeLoads}',
                valueStore : '{dayData.loads}'
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
