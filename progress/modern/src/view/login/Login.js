Ext.define('progress.view.login.Login', {

    extend : 'Ext.panel.Panel',

    alias : 'widget.progress_modern_login',

    requires : [
        'progress.view.login.LoginController'
    ],

    controller : 'progress_modern_login',

    listeners : {
        show : 'onShow'
    },

    viewModel : {
        data : {
            username_val : '',
            password_val : ''
        }
    },

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
                    reference : 'username',
                    label : 'Пользователь',
                    required : true,
                    clearIcon : true,
                    margin : '10 0 0 0',
                    bind : '{username_val}'
                },
                {
                    xtype : 'passwordfield',
                    revealable : true,
                    reference : 'password',
                    name : 'password',
                    label : 'Пароль',
                    clearIcon : true,
                    bind : '{password_val}'
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
                    handler : 'onLoginClick',
                    disabled : true,
                    bind : {
                        disabled : '{!username_val || !password_val}'
                    }
                }
            ]
        }
    ]

});
