Ext.define('progress.view.chart.CalHeatMap', {

    extend : 'Ext.Component',

    alias : 'widget.progress_chart_cal_heat_map',

    requires : [
        'Ext.data.Store',
        'Ext.data.StoreManager'
    ],

    config : {
        /**
         * @cfg {Ext.data.Store/Object/String} store
         * Either a Store instance, configuration object or store ID.
         * @accessor
         */
        store : null
    },

    // при смене не забыть про формулу!
    padding : '20 20',

    constructor : function() {
        this.callParent(arguments);

        Ext.Viewport.on('resize', this.onResize, this);
    },

    applyStore : function(store) {
        if (store) {
            store = Ext.data.StoreManager.lookup(store);
        }

        return store;
    },

    updateStore : function(store, oldStore) {
        if (oldStore && oldStore.getAutoDestroy()) {
            oldStore.destroy();
        }

        if (store) {
            store.on({
                scope : this,
                load : 'onStoreLoaded'
            });
        }
    },

    onStoreLoaded : function(store) {
        Ext.defer(function() {
            this.reCreateHeatMap();
        }, 500, this);
    },

    onResize : Ext.Function.createBuffered(function(viewport, size) {
        this.range = Math.round((size.contentWidth - 40) / 70);
        this.reCreateHeatMap();
    }, 1000),

    reCreateHeatMap : function() {
        var me = this,
            store = this.getStore();

        if (!store || !store.isLoaded()) {
            return;
        }

        if (this.cal) {
            this.cal.destroy(function() {
                me.createHeatMap();
            });
        } else {
            me.createHeatMap();
        }
    },

    createHeatMap : function() {
        this.cal = new CalHeatMap();
        this.cal.init({
            itemSelector : this.innerElement.dom,
            start : new Date(2016, 9, 21),
            data : Ext.Array.map(this.getStore().getRange(), function(rec) {
                return rec.getData();
            }),
            afterLoadData : this.parseData,
            domain : "month",
            subDomain : "day",
            cellSize : 10,
            domainLabelFormat : "%m.%Y",
            range : this.range,
            highlight : ["now"],
            legend : [2, 4, 6, 8, 10],
            legendColors : {
                empty : "#90caf9",
                min : "#90caf9",
                max : "#c62828"
            }
        });
    },

    parseData : function(data) {
        var stats = {};

        for (var d in data) {
            stats[data[d].id] = data[d].unit_1;
        }

        return stats;
    }

});
