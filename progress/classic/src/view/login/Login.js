Ext.define('progress.view.login.Login', {
    extend : 'Ext.window.Window',

    requires : [
        'progress.view.login.LoginController',
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Text'
    ],

    controller : 'progress_login',
    bodyPadding : 10,

    title : 'Login',
    closable : false,

    items : {
        xtype : 'form',
        reference : 'form',
        items : [
            {
                xtype : 'textfield',
                name : 'username',
                fieldLabel : 'Username',
                allowBlank : false,
                enableKeyEvents : true,
                listeners : {
                    specialKey : 'onSpecialKey'
                }
            },
            {
                xtype : 'textfield',
                name : 'password',
                inputType : 'password',
                fieldLabel : 'Password',
                allowBlank : false,
                enableKeyEvents : true,
                cls : 'password',
                listeners : {
                    specialKey : 'onSpecialKey'
                }
            }
        ]
    },

    buttons : [
        {
            text : 'Login',
            listeners : {
                click : 'onLoginClick'
            }
        }
    ]
});

