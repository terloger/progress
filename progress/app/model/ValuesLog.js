Ext.define('progress.model.ValuesLog', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        proxy : {
            type : 'progress_rest',
            url : API.VALUES_LOG
        },

        fields : [
            {
                name : 'unit_id',
                type : 'integer'
            },
            {
                name : 'day_id',
                type : 'integer'
            },
            {
                name : 'time',
                type : 'date',
                dateFormat : 'c'
            },
            {
                name : 'value',
                type : 'string'
            },
            {
                name : 'description',
                type : 'string'
            }
        ]
    };
});
