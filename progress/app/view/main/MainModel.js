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
            type : 'progress_data_day_perm_values'
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
