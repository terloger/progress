Ext.define('progress.store.Days', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.days',

        model : 'progress.model.Day',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.DAYS
        }
    };
});
