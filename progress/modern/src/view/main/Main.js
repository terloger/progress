Ext.define('progress.view.main.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'app-main',

    requires : [
        'progress.view.main.MainController',
        'progress.view.main.MainModel'
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
            bind : {
                disabled : '{notLogged}'
            }
        },
        {
            title : 'Настройки',
            iconCls : 'x-fa fa-cog',
            bind : {
                disabled : '{notLogged}'
            }
        }
    ]
});
