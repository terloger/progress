Ext.define('progress.store.progressData.DayPermValues', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.store.Abstract',
        alias : 'store.progress_data_day_perm_values',

        model : 'progress.model.progressData.DayPermValue',
        autoLoad : false,
        autoSync : false,

        proxy : {
            type : 'progress_rest',
            url : API.PROGRESS_DATA_DAY_PERM_VALUES
        }
    };
});
