Ext.define('progress.controller.Root', {
    extend : 'Ext.app.Controller',

    requires : [
        'progress.view.login.Login',
        'progress.view.main.Main'
    ],

    loadingText : 'Loading...',

    onLaunch : function() {
        this.login = new progress.view.login.Login({
            autoShow : true,
            listeners : {
                scope : this,
                login : 'onLogin'
            }
        });
    },

    onLogin : function(user) {
        this.login.destroy();

        this.user = user;

        this.showUI();
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
