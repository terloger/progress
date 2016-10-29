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
        }
    }
});
