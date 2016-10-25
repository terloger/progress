Ext.define('progress.model.Day', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        proxy : {
            type : 'progress_rest',
            url : API.DAYS
        },

        fields : [
            {
                name : 'date',
                type : 'date',
                dateFormat : 'c'
            },
            {
                name : 'user_id',
                type : 'integer'
            },
            {
                name : 'description',
                type : 'string'
            }
        ]
    };
});
