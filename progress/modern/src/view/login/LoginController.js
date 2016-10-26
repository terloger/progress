Ext.define('progress.view.login.LoginController', {
    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_modern_login',

    handleShow : function() {
        this.lookup('username').focus();
    },

    onLoginClick : function() {
        this.doLogin();
    },

    doLogin : function() {
        var form = this.lookupReference('form');

        progress.Api.request({
            url : progress.Api.API.USER_TOKEN,
            withoutAuth : true,
            method : 'POST',
            params : form.getValues(),
            scope : this,
            success : this.onLoginSuccess,
            failure : this.onLoginFailure
        });
    },

    onLoginFailure : function() {
        // todo
    },

    onLoginSuccess : function(response) {
        this.fireViewEvent('login', response);
    }
});
