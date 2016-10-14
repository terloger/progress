Ext.define('progress.Application', {
    extend: 'Ext.app.Application',
    
    name: 'progress',

    controllers : [
        'Root@progress.controller'
    ],

    requires : [
        'progress.Consts',
        'progress.Utils',
        'progress.Api'
    ],

    stores: [
        'progress.store.Users'
    ],
    
    launch: function () {
        // Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    statics : {
        checkAuth : function() {
            return !!progress.Utils.getCookie(progress.Consts.AUTH_COOKIE_NAME);
        },

        getAuthInfo : function() {
            return {
                token : progress.Utils.getCookie(progress.Consts.AUTH_COOKIE_NAME),
                userId : progress.Utils.getCookie(progress.Consts.USER_ID_COOKIE_NAME)
            }
        },

        setAuthInfo : function(token, userId) {
            progress.Utils.setCookie(progress.Consts.AUTH_COOKIE_NAME, token);
            progress.Utils.setCookie(progress.Consts.USER_ID_COOKIE_NAME, userId);
        },

        logout : function() {
            delete(progress.TOKEN);
            progress.Utils.removeCookie(progress.Consts.AUTH_COOKIE_NAME);
            progress.Utils.removeCookie(progress.Consts.USER_ID_COOKIE_NAME);

            window.location.reload();
        }
    }

});
