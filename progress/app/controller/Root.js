Ext.define('progress.controller.Root', {

    extend : 'Ext.app.Controller',

    loadingText : 'Загружаемся...',

    listen : {
        global : {
            successfulAuth : 'onSuccessfulAuth'
        }
    },

    onLaunch : function() {
        var authInfo,
            user;

        if (!progress.Application.checkAuth()) {
            Ext.GlobalEvents.fireEvent('appNeedLogin');
        } else {
            authInfo = progress.Application.getAuthInfo();
            progress.TOKEN = authInfo.token;

            user = new progress.model.User({
                id : authInfo.userId
            });
            user.loadWithPromise().then(function(rec) {
                Ext.GlobalEvents.fireEvent('setUser', rec.getData());
            });
        }
    },

    onSuccessfulAuth : function(data) {
        progress.TOKEN = data.token;
        progress.Application.setAuthInfo(data.token, data.user.id);
    }
});
