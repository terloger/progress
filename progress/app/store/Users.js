Ext.define('progress.store.Users', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.users',

        model : 'progress.model.User',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.USERS
        }
    };
});
