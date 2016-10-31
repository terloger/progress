Ext.define('progress.view.main.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'app-main',

    requires : [
        'progress.view.main.MainController',
        'progress.view.main.MainModel',
        'progress.view.data.Form'
    ],

    controller : {
        type : 'progress_modern_main'
    },
    viewModel : 'main',

    defaults : {
        tab : {
            iconAlign : 'top'
        },
        styleHtmlContent : true
    },

    tabBarPosition : 'bottom',

    items : [
        {
            title : 'Показатели',
            iconCls : 'x-fa fa-tasks',
            reference : 'dashboard',
            items : [
                {
                    xtype : 'container',
                    margin : '20',
                    html : '<object type="image/svg+xml" data="resources/images/progress.svg" width="90%" height="50%"></object>'
                }
            ]
        },
        {
            title : 'Ввод данных',
            iconCls : 'x-fa fa-table',
            scrollable : true,
            items : [
                {
                    docked : 'top',
                    ui : 'light',
                    xtype : 'toolbar',
                    items : [
                        {
                            xtype : 'button',
                            ui : 'round',
                            iconCls : 'x-fa fa-long-arrow-left',
                            handler : 'onShowPrev'
                        },
                        {
                            xtype : 'datepickerfield',
                            dateFormat : 'd.m.Y',
                            disabled : true,
                            width : 85,
                            bind : {
                                value : '{dayData.date}'
                            }
                        },
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-long-arrow-right',
                            handler : 'onShowNext'
                            // todo block in future
                        },
                        '->',
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-refresh',
                            handler : 'onReloadCurrentDay'
                        },
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-floppy-o',
                            handler : 'onSaveData'
                        }
                    ]
                },
                {
                    xtype : 'progress_modern_data_form',
                    reference : 'dataForm'
                }
            ]
        },
        {
            title : 'Настройки',
            iconCls : 'x-fa fa-cog'
        }
    ]
});
