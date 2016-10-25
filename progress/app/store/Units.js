Ext.define('progress.store.Units', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.units',

        model : 'progress.model.Unit',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.UNITS
        }
    };
});
