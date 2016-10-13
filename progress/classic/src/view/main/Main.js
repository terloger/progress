Ext.define('progress.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    title : 'Прогресс!',

    requires: [
        'Ext.plugin.Viewport'
    ],

    layout : 'fit',

    items : [
        {
            xtype : 'container',
            margin : '20',
            html : '<object type="image/svg+xml" data="resources/images/progress.svg" width="95%" height="100%"></object>'
        }
    ]
});
