Ext.define('progress.view.login.Login', {

    extend : 'Ext.panel.Panel',
    alias : 'widget.progress_modern_login',

    requires : [
        'progress.view.login.LoginController'
    ],

    controller : 'progress_modern_login',

    items : [
        {
            xtype : 'formpanel',
            reference : 'form',
            layout : {
                type : 'vbox',
                align : 'stretch'
            },

            items : [
                {
                    xtype : 'textfield',
                    name : 'username',
                    label : 'Пользователь',
                    required : true,
                    clearIcon : true,
                    margin : '10 0 0 0'
                },
                {
                    xtype : 'passwordfield',
                    revealable : true,
                    name : 'password',
                    label : 'Пароль',
                    clearIcon : true
                }
            ]
        },
        {
            xtype : 'container',
            defaults : {
                style : 'margin: 1em',
                flex : 1
            },
            layout : {
                type : 'hbox'
            },
            items : [
                {
                    xtype : 'container'
                },
                {
                    xtype : 'button',
                    text : 'Войти',
                    ui : 'action',
                    handler : 'onLoginClick'
                }
            ]
        }
    ]

});
