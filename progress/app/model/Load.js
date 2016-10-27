Ext.define('progress.model.Load', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        requires : [
            'progress.model.TypeLoad'
        ],

        proxy : {
            type : 'progress_rest',
            url : API.LOADS
        },

        fields : [
            {
                name : 'type_load_id',
                type : 'integer'
            },
            {
                name : 'day_id',
                type : 'integer'
            },
            {
                name : 'description',
                type : 'string'
            }
        ],

        hasOne : [
            {
                model : 'progress.model.TypeLoad',
                name : 'type_load',
                associationKey : 'type_load'
            }
        ]
    };
});
