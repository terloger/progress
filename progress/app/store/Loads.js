Ext.define('progress.store.Loads', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.loads',

        model : 'progress.model.Load',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.LOADS
        }
    };
});
