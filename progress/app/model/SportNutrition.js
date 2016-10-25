Ext.define('progress.model.SportNutrition', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        proxy : {
            type : 'progress_rest',
            url : API.SPORT_NUTRITION
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
