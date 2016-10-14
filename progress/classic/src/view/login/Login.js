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

    title : 'Привет, прогрессируем?',
    closable : false,
    modal : true,

    listeners : {
        show : 'handleShow'
    },

    items : {
        xtype : 'form',
        reference : 'form',
        items : [
            {
                xtype : 'textfield',
                reference : 'username',
                name : 'username',
                fieldLabel : 'Пользователь',
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
                fieldLabel : 'Пароль',
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
            text : 'Присоединиться',
            disabled : true
        },
        '->',
        {
            text : 'Войти',
            listeners : {
                click : 'onLoginClick'
            }
        }
    ]
});

