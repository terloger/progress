Ext.define('progress.view.chart.CalHeatMap', {

    extend : 'Ext.Component',

    alias : 'widget.progress_chart_cal_heat_map',

    // при смене не забыть про формулу!
    padding : '20 10',

    constructor : function() {
        this.callParent(arguments);

        Ext.Viewport.on('resize', this.onResize, this);
    },

    onResize : Ext.Function.createBuffered(function(viewport, size) {
        this.range = Math.round((size.contentWidth - 40) / 70);
        this.reCreateHeatMap();
    }, 1000),

    reCreateHeatMap : function() {
        var me = this;

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
            domain : "month",
            subDomain : "day",
            cellSize : 10,
            domainLabelFormat : "%m.%Y",
            range : this.range,
            highlight : ["now"],
            legend : [2, 4, 6, 8, 10],
            legendColors : {
                empty : "#ededed",
                min : "#fde8ca",
                max : "#000000"
            }
        });
    }

});
