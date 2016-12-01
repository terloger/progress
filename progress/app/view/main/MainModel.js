Ext.define('progress.view.main.MainModel', {
    extend : 'Ext.app.ViewModel',

    alias : 'viewmodel.main',

    data : {
        name : 'progress'
    },

    stores : {
        typeLoads : {
            type : 'type_loads'
        },
        units : {
            type : 'units'
        },
        sportNutritions : {
            type : 'sport_nutritions'
        },

        progressDataDayPermValues : {
            type : 'progress_data_day_perm_values',
            sorters : {
                property : 'date',
                direction : 'ASC'
            }
        },

        mainLoadValues : {
            fields : [
                {
                    name : 'date',
                    type : 'date',
                    dateFormat : 'Y-m-d'
                },
                {
                    name : 'unit_1',
                    type : 'integer'
                }
            ],

            proxy : {
                type : 'progress_rest',
                url : progress.Api.API.PROGRESS_DATA_DAY_VALUES,

                extraParams : {
                    units : '1',
                    limit : 300
                }
            }
        }
    },

    formulas : {
        isCurrentDay : function(data) {
            var date = new Date();
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);

            return Ext.Date.diff(data('dayData.date'), date, 's') === 0;
        },

        isStartDay : function(data) {
            var date = new Date('2016-09-21 00:00:00');
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);

            return Ext.Date.diff(data('dayData.date'), date, 's') === 0;
        }
    }
});
