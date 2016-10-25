Ext.define('progress.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires : [
        'progress.view.login.Login'
    ],

    listen : {
        global : {
            appNeedLogin : 'onAppNeedLogin'
        }
    },

    onAppNeedLogin : function() {
        var dashboard = this.lookup('dashboard');

        dashboard.removeAll();
        dashboard.add({
            xtype : 'progress-modern-login'
        })
    }

});
