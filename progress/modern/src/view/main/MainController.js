Ext.define('progress.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.progress_modern_main',

    requires : [
        'progress.view.login.Login'
    ],

    listen : {
        global : {
            appNeedLogin : 'onAppNeedLogin'
        }
    },

    onAppNeedLogin : function() {
        if (!this.loginOverlay) {
            this.loginOverlay = Ext.Viewport.add({
                xtype : 'progress-modern-login',
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
            });
        }

        this.loginOverlay.show();
    },

    onLogin : function(view, data) {
        view.destroy();

        this.user = data.user;
        progress.TOKEN = data.token;
        progress.Application.setAuthInfo(data.token, data.user.id);
    }

});
