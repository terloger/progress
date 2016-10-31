Ext.define('progress.view.login.LoginController', {

    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_modern_login',

    onShow : function() {
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
        Ext.toast('Ошибка авторизации!');
        this.lookupReference('form').reset();
        Ext.defer(function() {
            this.lookup('username').focus();
        }, 500, this);
    },

    onLoginSuccess : function(response) {
        this.fireViewEvent('login', response);
    }
});
