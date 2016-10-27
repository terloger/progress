Ext.define('progress.view.main.MainController', {

    extend : 'progress.view.main.BaseMainController',

    alias : 'controller.progress_main',

    onAppNeedLogin : function() {
        new progress.view.login.Login({
            autoShow : true,
            listeners : {
                scope : this,
                login : 'onLogin'
            }
        });
    }

});
