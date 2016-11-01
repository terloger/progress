Ext.define('progress.model.progressData.DayPermValue', function() {

    var API = progress.Api.API;

    return {
        extend : 'progress.model.Abstract',

        proxy : {
            type : 'progress_rest',
            url : API.PROGRESS_DATA_DAY_PERM_VALUES
        },

        fields : [
            {
                name : 'date',
                type : 'date',
                dateFormat : 'Y-m-d'
            },
            {
                name : 'unit_1',
                type : 'integer'
            },
            {
                name : 'unit_2',
                type : 'integer'
            },
            {
                name : 'unit_3',
                type : 'integer'
            }
        ]
    };
});
