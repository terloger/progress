Ext.define('progress.model.User', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        proxy : {
            type : 'progress_rest',
            url : API.USERS
        },

        fields : [
            {
                name : 'name',
                type : 'string'
            },
            {
                name : 'username',
                type : 'string'
            },
            {
                name : 'active',
                type : 'boolean'
            },
            {
                name : 'is_admin',
                type : 'boolean'
            },
            {
                name : 'photo_ident',
                type : 'string'
            },
            {
                name : 'created',
                type : 'date',
                dateFormat : 'c'
            },
            {
                name : 'created',
                type : 'date',
                dateFormat : 'c'
            }
        ]
    };
});
