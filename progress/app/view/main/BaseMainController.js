Ext.define('progress.view.main.BaseMainController', {

    extend : 'Ext.app.ViewController',

    alias : 'controller.progress_base_main',

    requires : [
        'progress.view.login.Login'
    ],

    listen : {
        global : {
            appNeedLogin : 'onAppNeedLogin',
            setUser : 'onSetUser',
            gotoDate : 'onGotoDate'
        }
    },

    onAppNeedLogin : function() {
        // in child
    },

    onGotoDate : function() {
        // in child
    },

    onLogin : function(view, data) {
        view.destroy();

        Ext.GlobalEvents.fireEvent('successfulAuth', data);
        progress.TOKEN = data.token;
        progress.Application.setAuthInfo(data.token, data.user.id);
        this.onSetUser(data.user);
    },

    onSetUser : function(user) {
        var me = this;

        this.getViewModel().set('user', user);
        this.setLoadingState(true);
        this.loadDictData().then(function() {
            me.loadDay();
        });
    },

    loadDictData : function() {
        var vm = this.getViewModel();

        return Ext.Promise.all([
            vm.getStore('typeLoads').loadWithPromise(),
            vm.getStore('units').loadWithPromise(),
            vm.getStore('sportNutritions').loadWithPromise()
        ]);
    },

    loadDay : function(dayVal) {
        var me = this,
            vm = this.getViewModel(),
            day,
            dayVal = dayVal || Ext.Date.format(new Date(), 'Y-m-d');

        this.setLoadingState(true);

        this.loadProgressData();
        day = new progress.model.Day({
            id : dayVal
        });
        day.getProxy().setUrl(progress.Api.API.DAYS_DAY);
        day.phantom = true;
        day.loadWithPromise().then(function(rec) {
            me.setLoadingState(false);
            day.getProxy().setUrl(progress.Api.API.DAYS);
            vm.set('dayData', rec);
        }, function(code) {
            day.getProxy().setUrl(progress.Api.API.DAYS);

            if (code === 404) {
                // create new day record
                var newDayRec = new progress.model.Day({
                    date : new Date(dayVal + ' 00:00:00'),
                    user_id : vm.get('user.id')
                });
                newDayRec.saveWithPromise().then(function() {
                    newDayRec.loadWithPromise().then(function(rec) {
                        me.setLoadingState(false);
                        vm.set('dayData', rec);
                    });
                });
            }
        });
    },

    loadProgressData : function() {
        var vm = this.getViewModel();

        vm.getStore('progressDataDayPermValues').load();
        vm.getStore('mainLoadValues').load();
        Ext.GlobalEvents.fireEvent('loadProgressData');
    },

    setLoadingState : function(loading) {

    }

});
