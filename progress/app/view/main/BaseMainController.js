Ext.define('progress.view.main.BaseMainController', {

    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_base_main',

    requires : [
        'progress.view.login.Login'
    ],

    listen : {
        global : {
            appNeedLogin : 'onAppNeedLogin',
            setUser : 'onSetUser'
        }
    },

    onAppNeedLogin : function() {
        //
    },

    onLogin : function(view, data) {
        view.destroy();

        Ext.GlobalEvents.fireEvent('successfulAuth', data);
        progress.TOKEN = data.token;
        progress.Application.setAuthInfo(data.token, data.user.id);
        this.onSetUser(data.user);
    },

    onSetUser : function(user) {
        this.getViewModel().set('user', user);
    }

});
