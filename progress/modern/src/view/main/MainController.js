Ext.define('progress.view.main.MainController', {

    extend: 'progress.view.main.BaseMainController',

    alias: 'controller.progress_modern_main',

    requires : [
        'progress.view.login.Login'
    ],

    onAppNeedLogin : function() {
        var loginOverlay = Ext.Viewport.add(new progress.view.login.Login({
            floated : true,
            modal : true,
            showAnimation : {
                type : 'popIn',
                duration : 250,
                easing : 'ease-out'
            },
            hideAnimation : {
                type : 'popOut',
                duration : 250,
                easing : 'ease-out'
            },
            width : '100%',
            margin : '60 0 0 0',
            shadow : true,
            header : {
                title : 'Прогрессируем?'
            },
            listeners : {
                scope : this,
                login : 'onLogin'
            }
        }));
        loginOverlay.show();
    }

});
