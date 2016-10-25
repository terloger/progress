Ext.define('progress.model.TypeLoad', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        proxy : {
            type : 'progress_rest',
            url : API.TYPE_LOAD
        },

        fields : [
            {
                name : 'name',
                type : 'string'
            },
            {
                name : 'color',
                type : 'string'
            }
        ]
    };
});
