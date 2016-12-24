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
        store : null,

        unitName : '',

        heatMapCfg : {
            legend : [2, 4, 6, 8, 10],
            legendColors : {
                empty : "#90caf9",
                min : "#90caf9",
                max : "#c62828"
            }
        }
    },

    // при смене не забыть про формулу!
    padding : '20 20',

    height : 250,

    constructor : function() {
        this.onResize = Ext.Function.createBuffered(this.onResize, 1000, this);
        this.reCreateHeatMap = Ext.Function.createBuffered(this.reCreateHeatMap, 500, this),

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

    onStoreLoaded : function() {
        Ext.defer(function() {
            this.reCreateHeatMap();
        }, 500, this);
    },

    onResize : function(viewport, size) {
        this.range = Math.round((size.contentWidth - 40) / 130);
        this.reCreateHeatMap();
    },

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
        var startDate,
            currentDate = new Date();

        startDate = Ext.Date.add(currentDate, Ext.Date.MONTH, -(this.range - 1));

        this.cal = new CalHeatMap();
        this.cal.init(Ext.Object.merge({
            itemSelector : this.innerElement.dom,
            start : startDate,
            data : Ext.Array.map(this.getStore().getRange(), function(rec) {
                return rec.getData();
            }),
            afterLoadData : Ext.bind(this.parseData, this),
            domain : "month",
            subDomain : "day",
            cellSize : 19,
            domainLabelFormat : "%m.%Y",
            subDomainTextFormat : "%d",
            range : this.range,
            highlight : ["now"],
            onClick : function(date) {
                Ext.GlobalEvents.fireEvent('gotoDate', date);
            }
        }, this.getHeatMapCfg()));
    },

    parseData : function(data) {
        var stats = {};

        for (var d in data) {
            stats[data[d].id] = data[d][this.getUnitName()];
        }

        return stats;
    }

});
