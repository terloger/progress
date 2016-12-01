Ext.define('progress.view.main.Main', {
    extend : 'Ext.tab.Panel',
    xtype : 'app-main',

    requires : [
        'progress.view.main.MainController',
        'progress.view.main.MainModel',
        'progress.view.data.Form',

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
            cls : 'progress-bg',
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
                            iconCls : 'x-fa fa-refresh',
                            handler : 'onReloadCurrentDay'
                        },
                        {
                            xtype : 'button',
                            iconCls : 'x-fa fa-sign-out',
                            handler : 'onLogout'
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
                    xtype : 'progress_chart_cal_heat_map',
                    bind : {
                        store : '{mainLoadValues}'
                    },
                    width : '100%'
                },
                {
                    xtype : 'progress_chart_values',
                    minimum : 30,
                    units : {
                        16 : 'Динамометрия хвата. Правая рука',
                        17 : 'Динамометрия хвата. Левая рука'
                    },
                    height : 200,
                    width : '100%'
                }
            ]
        },
        {
            title : 'Ввод данных',
            iconCls : 'x-fa fa-table',
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
