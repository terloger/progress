Ext.define('progress.store.ValuesLogs', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.values_logs',

        model : 'progress.model.ValuesLog',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.VALUES_LOG
        }
    };
});
