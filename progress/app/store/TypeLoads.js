Ext.define('progress.store.TypeLoads', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.type_loads',

        model : 'progress.model.TypeLoad',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.TYPE_LOAD
        }
    };
});
