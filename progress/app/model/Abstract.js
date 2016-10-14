Ext.define('progress.model.Abstract', function() {

    return {
        extend : 'Ext.data.Model',

        requires : [
            'Ext.data.identifier.Negative',
            'progress.data.proxy.Rest'
        ],

        idProperty : 'id',

        schema : {
            namespace : 'progress.model',
            urlPrefix : progress.Api.API.ROOT,
            defaultIdentifier : 'negative',
            proxy : {
                type : 'progress_rest'
            }
        }
    };
});
