Ext.define('progress.view.login.LoginController', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_login',

    loginText : 'Входим...',

    handleShow : function() {
        this.lookup('username').focus();
    },

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

            progress.Api.request({
                url : progress.Api.API.USER_TOKEN,
                withoutAuth : true,
                method : 'POST',
                params : form.getValues(),
                scope : this,
                success : this.onLoginSuccess,
                failure : this.onLoginFailure
            });
        }
    },

    onLoginFailure : function() {
        Ext.getBody().unmask();
        // todo
    },

    onLoginSuccess : function(response) {
        Ext.getBody().unmask();
        this.fireViewEvent('login', response);
    }
});
