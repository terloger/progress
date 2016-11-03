Ext.define('progress.view.chart.DayPermValues', {

    extend : 'Ext.chart.CartesianChart',

    alias : 'widget.progress_chart_day_perm_values',

    requires : [
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.draw.modifier.Highlight',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.axis.Time'
    ],

    legend : {
        type : 'sprite',
        position : 'top',
        padding : 5,
        marker : {
            size : 5
        }
    },

    series : [
        {
            type : 'line',
            xField : 'date',
            yField : 'unit_1',
            //fill : true,
            style : {
                smooth : true,
                miterLimit : 3,
                lineCap : 'miter',
                opacity : 0.7,
                lineWidth : 3
            },
            title : 'Уровень нагрузки',

            highlightCfg : {
                scale : 0.9
            }
        },
        {
            type : 'line',
            xField : 'date',
            yField : 'unit_2',
            style : {
                smooth : true,
                opacity : 0.7,
                lineWidth : 2
            },
            title : 'Работоспособность',

            highlightCfg : {
                scale : 0.9
            }
        },
        {
            type : 'line',
            xField : 'date',
            yField : 'unit_3',
            style : {
                smooth : true,
                opacity : 0.7,
                lineWidth : 2
            },
            title : 'Здоровье',

            highlightCfg : {
                scale : 0.9
            }
        }
    ],

    axes : [
        {
            type : 'numeric',
            position : 'left',
            fields : ['unit_1', 'unit_2', 'unit_3'],
            minimum : 0,
            maximum : 11
        },
        {
            type : 'time',
            dateFormat : 'd.m.Y',
            visibleRange : [0, 1],
            position : 'bottom',
            fields : 'date'
        }
    ]
});
