Ext.define('progress.view.main.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'app-main',

    requires : [
        'progress.view.main.MainController',
        'progress.view.main.MainModel',
        'progress.view.data.Form',

        'Ext.chart.CartesianChart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Time'
    ],

    controller : {
        type : 'progress_modern_main'
    },
    viewModel : 'main',

    defaults : {
        tab : {
            iconAlign : 'top'
        },
        styleHtmlContent : true
    },

    tabBarPosition : 'bottom',

    items : [
        {
            title : 'Показатели',
            iconCls : 'x-fa fa-tasks',
            reference : 'dashboard',
            scrollable : true,
            items : [
                {
                    xtype : 'toolbar',
                    docked : 'top',
                    items : [
                        {
                            bind : {
                                html : 'Прогрессборд &bull; {user.name}'
                            }
                        },
                        '->',
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-sign-out',
                            handler : 'onLogout'
                        }
                    ]
                },

                {
                    xtype : 'cartesian',
                    store : {
                        type : 'progress_data_day_perm_values',
                        autoLoad : true
                    },

                    height : 200,
                    width : '100%',
                    legend : {
                        type : 'sprite',
                        position : 'top',
                        marker : {
                            size : 5
                        }
                    },
                    series : [
                        {
                            type : 'line',
                            xField : 'date',
                            yField : 'unit_1',
                            fill : true,
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
                            style : {
                                smooth : true,
                                opacity : 0.7,
                                lineWidth : 1
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
                },

                {
                    xtype : 'container',
                    margin : '20',
                    html : '<object type="image/svg+xml" data="resources/images/progress.svg" width="90%" height="50%"></object>'
                }
            ]
        },
        {
            title : 'Ввод данных',
            iconCls : 'x-fa fa-table',
            scrollable : true,
            items : [
                {
                    docked : 'top',
                    ui : 'light',
                    xtype : 'toolbar',
                    items : [
                        {
                            xtype : 'button',
                            ui : 'round',
                            iconCls : 'x-fa fa-long-arrow-left',
                            handler : 'onShowPrev',
                            bind : {
                                hidden : '{isStartDay}'
                            }
                        },
                        {
                            xtype : 'datepickerfield',
                            dateFormat : 'd.m.Y',
                            disabled : true,
                            width : 70,
                            bind : {
                                value : '{dayData.date}'
                            }
                        },
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-long-arrow-right',
                            handler : 'onShowNext',
                            hidden : true,
                            bind : {
                                hidden : '{isCurrentDay}'
                            }
                        },
                        '->',
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-refresh',
                            handler : 'onReloadCurrentDay'
                        },
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-floppy-o',
                            handler : 'onSaveData'
                        }
                    ]
                },
                {
                    xtype : 'progress_modern_data_form',
                    reference : 'dataForm'
                }
            ]
        },
        {
            title : 'Настройки',
            iconCls : 'x-fa fa-cog'
        }
    ]
});
