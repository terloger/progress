Ext.define('progress.view.data.Form', {

    extend : 'Ext.panel.Panel',

    alias : 'widget.progress_modern_data_form',

    cls : 'progress_modern_data_form',

    requires : [
        'progress.view.data.ItemsContainer'
    ],

    viewModel : {},

    items : [
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
            margin : '10 0 0 0',
            valueIdent : 'type_load_id',
            valueName : 'Выбрать нагрузку',
            bind : {
                store : '{typeLoads}',
                valueStore : '{dayData.loads}'
            }
        },
        {
            xtype : 'progress_modern_data_items_container',
            title : 'Показатели',
            margin : '10 0 0 0',
            valueIdent : 'unit_id',
            valueName : 'Выбрать показатель',
            withPermanent : true,
            bind : {
                store : '{units}',
                valueStore : '{dayData.values_log}'
            }
        },
        {
            xtype : 'progress_modern_data_items_container',
            title : 'Спортпит',
            margin : '10 0 0 0',
            valueIdent : 'sport_nutrition_id',
            valueName : 'Выбрать тип',
            bind : {
                store : '{sportNutritions}',
                valueStore : '{dayData.nutrition_log}'
            }
        }
    ]

});
