Ext.define('progress.store.SportNutritions', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.sport_nutritions',

        model : 'progress.model.SportNutrition',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.SPORT_NUTRITION
        }
    };
});
