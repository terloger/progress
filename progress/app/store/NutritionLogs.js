Ext.define('progress.store.NutritionLogs', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.nutrition_logs',

        model : 'progress.model.NutritionLog',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.NUTRITION_LOG
        }
    };
});
