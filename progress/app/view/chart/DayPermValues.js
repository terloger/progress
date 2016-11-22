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
                lineWidth : 1
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
            fill : true,
            style : {
                smooth : true,
                opacity : 0.7,
                lineWidth : 2
            },
            title : 'Работоспособность',

            marker : {
                type : 'circle',
                fillStyle : 'yellow',
                radius : 2
            },

            renderer : function(sprite, config, rendererData, index) {
                var store = rendererData.store,
                    storeItems = store.getData().items,
                    currentRecord = storeItems[index],
                    previousRecord = (index > 0 ? storeItems[index - 1] : currentRecord),
                    current = currentRecord && parseInt(currentRecord.data['unit_2'], 10),
                    previous = previousRecord && parseInt(previousRecord.data['unit_2'], 10),
                    changes = {};

                switch (config.type) {
                    case 'marker':

                        if (Ext.Date.isWeekend(currentRecord.get('date'))) {
                            changes.strokeStyle = 'red';
                            changes.fillStyle = 'lightpink';
                            changes.lineWidth = 2;
                        } else {
                            changes.radius = 0;
                        }

                        break;

                    case 'line':
                        //changes.strokeStyle = (current >= previous ? 'green' : 'red');
                        changes.fillStyle = (current >= previous ? 'palegreen' : 'tomato');
                        changes.fillOpacity = .1;
                        break;
                }
                return changes;
            }
        },
        {
            type : 'line',
            xField : 'date',
            yField : 'unit_3',
            style : {
                smooth : true,
                opacity : 0.7,
                lineWidth : 1
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
