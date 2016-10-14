Ext.define('progress.store.Abstract', function() {

    return {
        extend : 'Ext.data.Store',

        requires : [
            'progress.data.proxy.Rest'
        ],

        autoLoad : false,
        autoSync : false,
        pageSize : 0
    };

});
