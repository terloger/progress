Ext.define('progress.view.chart.Values', {

    extend : 'Ext.chart.CartesianChart',

    alias : 'widget.progress_chart_values',

    requires : [
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.draw.modifier.Highlight',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.axis.Time',
        'Ext.chart.theme.Red'
    ],

    // legend : {
    //     type : 'sprite',
    //     position : 'top',
    //     padding : 3,
    //     marker : {
    //         size : 5
    //     }
    // },

    theme : 'red',

    constructor : function(config) {
        var me = this,
            series = [],
            fields = [],
            keys = [];

        Ext.Object.each(config.units, function(key, value) {
            series.push({
                type : 'line',
                xField : 'date',
                yField : 'unit_' + key,
                style : {
                    //smooth : true,
                    miterLimit : 3,
                    lineCap : 'miter',
                    opacity : 0.7,
                    lineWidth : 1
                },
                title : value,

                marker : {
                    type : 'circle',
                    fillStyle : 'blue',
                    radius : 1
                }
            });

            fields.push('unit_' + key);

            keys.push(key);
        });

        config.series = series;

        config.axes = [
            {
                type : 'numeric',
                position : 'left',
                fields : fields,
                minimum : config.minimum
            },
            {
                type : 'time',
                dateFormat : 'd.m.Y',
                visibleRange : [0, 1],
                position : 'bottom',
                fields : 'date'
            }
        ]

        config.store = new progress.store.Abstract({
            fields : [
                {
                    name : 'date',
                    type : 'date',
                    dateFormat : 'Y-m-d'
                }
            ],

            proxy : {
                type : 'progress_rest',
                url : progress.Api.API.PROGRESS_DATA_DAY_VALUES
            }
        });

        this.callParent(arguments);

        Ext.GlobalEvents.on('loadProgressData', function() {
            me.getStore().load({
                params : {
                    'units' : keys.join(',')
                }
            })
        });
    }


});
