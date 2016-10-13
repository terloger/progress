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

            Ext.Ajax.request({
                url : '/api/users/token.json',
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

    onLoginSuccess : function(resp) {
        var response;

        Ext.getBody().unmask();

        response = Ext.decode(resp.responseText);

        this.fireViewEvent('login', response.data);
    }
});
