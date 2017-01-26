Ext.define('progress.Application', {
    extend: 'Ext.app.Application',
    
    name: 'progress',

    controllers : [
        'Root@progress.controller'
    ],

    requires : [
        'progress.Localization',
        'progress.Consts',
        'progress.Utils',
        'progress.Api',

        'Ext.chart.CartesianChart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.draw.modifier.Highlight',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.axis.Time',
        'Ext.chart.theme.Red'
    ],

    stores: [
        'progress.store.Users',
        'progress.store.Days',
        'progress.store.Loads',
        'progress.store.SportNutritions',
        'progress.store.TypeLoads',
        'progress.store.Units',
        'progress.store.ValuesLogs',
        'progress.store.NutritionLogs',
        'progress.store.progressData.DayPermValues'
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
