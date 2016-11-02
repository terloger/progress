Ext.define('progress.view.chart.CalHeatMap', {

    extend : 'Ext.Component',

    alias : 'widget.progress_chart_cal_heat_map',

    constructor : function() {
        this.callParent(arguments);

        var cal = new CalHeatMap();
        cal.init({
            itemSelector : this.innerElement.dom,
            start : new Date(2016, 09, 21),
            domain : "month",
            subDomain : "day",
            cellSize : 15,
            subDomainTextFormat : "%d",
            range : 3,
            legend : [2, 4, 6, 8, 10],
            legendColors : {
                empty : "#ededed",
                min : "#ffba54",
                max : "#000000"
            }
        });
    }

});
