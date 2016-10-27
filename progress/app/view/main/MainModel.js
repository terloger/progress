Ext.define('progress.view.main.MainModel', {
    extend : 'Ext.app.ViewModel',

    alias : 'viewmodel.main',

    data : {
        name : 'progress'
    },

    stores : {
        typeLoads : {
            type : 'type_loads',
            autoLoad : true
        },
        units : {
            type : 'units',
            autoLoad : true
        },
        sportNutritions : {
            type : 'sport_nutritions',
            autoLoad : true
        }
    }
});
