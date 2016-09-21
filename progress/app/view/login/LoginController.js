Ext.define('progress.view.login.LoginController', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_login',

    loginText : 'Logging in...',

    onSpecialKey : function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },

    onLoginClick : function() {
        this.doLogin();
    },

    doLogin : function() {
        var form = this.lookupReference('form');

        if (form.isValid()) {
            Ext.getBody().mask(this.loginText);

            // form.getValues()
            console.log(form.getValues()); /* @killme it's debug log */

            //if (!this.loginManager) {
            //    this.loginManager = new Ticket.LoginManager({
            //        session : this.getView().getSession(),
            //        model : 'User'
            //    });
            //}
            //
            //this.loginManager.login({
            //    data : form.getValues(),
            //    scope : this,
            //    success : 'onLoginSuccess',
            //    failure : 'onLoginFailure'
            //});
        }
    },

    onLoginFailure : function() {
        // Do something
        Ext.getBody().unmask();
    },

    onLoginSuccess : function(user) {
        Ext.getBody().unmask();

        this.fireViewEvent('login', user);
    }
});
