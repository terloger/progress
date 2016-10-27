Ext.define('progress.model.Day', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        requires : [
            'progress.model.Load',
            'progress.model.ValuesLog',
            'progress.model.NutritionLog'
        ],

        proxy : {
            type : 'progress_rest',
            url : API.DAYS
        },

        fields : [
            {
                name : 'id'
            },
            {
                name : 'date',
                type : 'date',
                dateFormat : 'Y-m-d'
            },
            {
                name : 'user_id',
                type : 'integer'
            },
            {
                name : 'description',
                type : 'string'
            }
        ],

        hasMany : [
            {
                model : 'progress.model.Load',
                name : 'loads',
                associationKey : 'loads'
            },
            {
                model : 'progress.model.ValuesLog',
                name : 'values_log',
                associationKey : 'values_log'
            },
            {
                model : 'progress.model.NutritionLog',
                name : 'nutrition_log',
                associationKey : 'nutrition_log'
            }
        ]
    };
});
