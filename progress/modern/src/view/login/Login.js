Ext.define('progress.view.login.Login', {

    extend : 'Ext.form.Panel',
    alias : 'widget.progress-modern-login',

    shadow : true,

    margin : 10,

    items : [
        {
            xtype : 'fieldset',
            title : 'Прогрессируем?',
            layout : {
                type : 'vbox',
                align : 'stretch'
            },

            items : [
                {
                    xtype : 'textfield',
                    name : 'name',
                    label : 'Пользователь',
                    required : true,
                    clearIcon : true
                },
                {
                    xtype : 'passwordfield',
                    revealable : true,
                    name : 'password',
                    label : 'Пароль',
                    clearIcon : true
                }
            ]
        }
    ]

});
