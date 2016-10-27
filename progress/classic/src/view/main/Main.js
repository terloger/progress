Ext.define('progress.view.main.Main', {

    xtype : 'app-main',

    extend : 'Ext.Panel',

    requires : [
        'progress.view.main.MainController',
        'progress.view.main.MainModel',
        'Ext.plugin.Viewport'
    ],

    controller : {
        type : 'progress_main'
    },
    viewModel : 'main',

    title : 'Прогресс (лат. progressus — движение вперёд, успех) — направление развития от низшего к высшему, поступательное движение вперед, к лучшему.',

    layout : 'fit',

    items : [
        {
            xtype : 'container',
            margin : '20',
            html : '<object type="image/svg+xml" data="resources/images/progress.svg" width="95%" height="100%"></object>'
        }
    ]
});
