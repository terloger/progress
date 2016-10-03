/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('progress.Application', {
    extend: 'Ext.app.Application',
    
    name: 'progress',

    controllers : [
        'Root@progress.controller'
    ],

    requires : [
        'progress.Utils'
    ],

    stores: [
        // add global / shared stores here
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
    }
});
