Ext.define('progress.controller.Root', {
    extend : 'Ext.app.Controller',

    requires : [
        'progress.view.login.Login',
        'progress.view.main.Main'
    ],

    loadingText : 'Загружаемся...',

    onLaunch : function() {
        var authInfo,
            user;

        if (!progress.Application.checkAuth()) {
            new progress.view.login.Login({
                autoShow : true,
                listeners : {
                    scope : this,
                    login : 'onLogin'
                }
            });
        } else {
            authInfo = progress.Application.getAuthInfo();
            progress.TOKEN = authInfo.token;

            // todo : load user data by authInfo.userId
            user = new progress.model.User({
                id : authInfo.userId
            });
            user.load();
        }
    },

    onLogin : function(view, data) {
        view.destroy();

        this.user = data.user;
        progress.TOKEN = data.token;
        progress.Application.setAuthInfo(data.token, data.user.id);

        //this.showUI();
    },

    showUI : function() {
        this.viewport = new progress.view.main.Main({
            viewModel : {
                data : {
                    currentUser : this.user
                }
            }
        });
    }
});
