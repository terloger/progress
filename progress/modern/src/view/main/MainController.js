Ext.define('progress.view.main.MainController', {

    extend: 'progress.view.main.BaseMainController',

    alias: 'controller.progress_modern_main',

    requires : [
        'progress.view.login.Login'
    ],

    onAppNeedLogin : function() {
        var loginOverlay = Ext.Viewport.add(new progress.view.login.Login({
            floated : true,
            modal : true,
            showAnimation : {
                type : 'popIn',
                duration : 250,
                easing : 'ease-out'
            },
            hideAnimation : {
                type : 'popOut',
                duration : 250,
                easing : 'ease-out'
            },
            width : '100%',
            margin : '60 0 0 0',
            shadow : true,
            header : {
                title : 'Прогрессируем?'
            },
            listeners : {
                scope : this,
                login : 'onLogin'
            }
        }));
        loginOverlay.show();
    },

    setLoadingState : function(loading) {
        if (loading) {
            Ext.Viewport.setMasked({
                xtype : 'loadmask',
                message : 'Загружаем данные'
            });
        } else {
            Ext.Viewport.setMasked(false);
        }
    },

    onSaveData : function() {
        var me = this,
            dayData = this.getViewModel().get('dayData');

        me.setLoadingState(true);

        Ext.Promise.all([
            dayData.saveWithPromise(),
            dayData.loads().saveWithPromise(),
            dayData.values_log().saveWithPromise(),
            dayData.nutrition_log().saveWithPromise()
        ]).then(function() {
            me.setLoadingState(false);
            Ext.toast('Данные сохранены.');
        });
    },

    onShowPrev : function() {
        var date = this.getViewModel().get('dayData.date'),
            prevDate = Ext.Date.add(date, Ext.Date.DAY, -1);

        this.loadDay(Ext.Date.format(prevDate, 'Y-m-d'));
    },

    onShowNext : function() {
        var date = this.getViewModel().get('dayData.date'),
            prevDate = Ext.Date.add(date, Ext.Date.DAY, 1);

        this.loadDay(Ext.Date.format(prevDate, 'Y-m-d'));
    },

    onReloadCurrentDay : function() {
        this.loadDay(Ext.Date.format(new Date(), 'Y-m-d'))
    },

    onLogout : function() {
        progress.Application.logout();
    }

});
