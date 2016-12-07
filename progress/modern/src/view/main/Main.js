Ext.define('progress.view.main.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'app-main',

    requires : [
        'progress.view.main.MainController',
        'progress.view.main.MainModel',
        'progress.view.data.Form',
        'progress.view.data.LogGrid',

        'progress.view.chart.DayPermValues',
        'progress.view.chart.CalHeatMap',
        'progress.view.chart.Values'
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
                            xtype : 'button',
                            iconCls : 'x-fa fa-sign-out',
                            handler : 'onLogout'
                        },
                        {
                            bind : {
                                html : 'Прогрессборд &bull; {user.name}'
                            }
                        },
                        '->',
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-refresh',
                            handler : 'onReloadCurrentDay'
                        }
                    ]
                },

                {
                    xtype : 'progress_chart_day_perm_values',
                    bind : {
                        store : '{progressDataDayPermValues}'
                    },
                    height : 200,
                    width : '100%'
                },
                {
                    xtype : 'component',
                    cls : 'legend_block',
                    html : '<p><span class="legend_mark green">&bull;</span>&nbsp;Уровень нагрузки</p>' +
                    '<p><span class="legend_mark dblue">&bull;</span>&nbsp;Работоспособность</p>' +
                    '<p><span class="legend_mark dred">&bull;</span>&nbsp;Здоровье</p>'
                },
                {
                    xtype : 'progress_chart_cal_heat_map',
                    bind : {
                        store : '{mainLoadValues}'
                    },
                    width : '100%'
                },
                {
                    xtype : 'progress_chart_values',
                    minimum : 35,
                    units : {
                        16 : 'Динамометрия хвата. Правая рука',
                        17 : 'Динамометрия хвата. Левая рука'
                    },
                    height : 150,
                    width : '100%'
                },
                {
                    xtype : 'component',
                    cls : 'legend_block',
                    margin : '0 0 0 10',
                    html : 'Динамометрия хвата: <p><span class="legend_mark phand">&bull;</span>&nbsp;Правая рука</p>' +
                    '<p><span class="legend_mark lhand">&bull;</span>&nbsp;Левая рука</p>'
                }
            ]
        },
        {
            title : 'Ввод данных',
            iconCls : 'x-fa fa-edit',
            scrollable : true,
            cls : 'progress-bg',
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
                            cls : 'pickerWithoutBorder',
                            dateFormat : 'd.m.Y (l)',
                            disabled : true,
                            width : 170,
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
                            handler : 'onReloadCurrentDay',
                            margin : '0 10 0 0'
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
            title : 'Лог',
            iconCls : 'x-fa fa-table',
            scrollable : true,
            items : [
                {
                    docked : 'top',
                    ui : 'light',
                    xtype : 'toolbar',
                    items : [
                        '->',
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-refresh'
                        }
                    ]
                },
                {
                    xtype : 'progress_modern_data_log_grid',
                    bind : {
                        store : '{progressDataDayPermValues}'
                    },
                    height : '100%'
                }
            ]
        }
    ]
});
