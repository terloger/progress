Ext.define('progress.model.Unit', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        proxy : {
            type : 'progress_rest',
            url : API.UNITS
        },

        fields : [
            {
                name : 'name',
                type : 'string'
            },
            {
                name : 'description',
                type : 'string'
            },
            {
                name : 'type',
                type : 'string'
            },
            {
                name : 'min',
                type : 'integer'
            },
            {
                name : 'max',
                type : 'integer'
            },
            {
                name : 'sign',
                type : 'string'
            },
            {
                name : 'is_permanent',
                type : 'boolean'
            }
        ]
    };
});
