Ext.define('progress.view.main.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'app-main',

    requires : [
        'Ext.MessageBox',

        'progress.view.main.MainController',
        'progress.view.main.MainModel',
    ],

    controller : 'main',
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
            layout : 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items : []
        },
        {
            title : 'Ввод данных',
            iconCls : 'x-fa fa-table'
        },
        {
            title : 'Настройки',
            iconCls : 'x-fa fa-cog'
        }
    ]
});
