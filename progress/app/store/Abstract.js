Ext.define('progress.store.Abstract', function() {

    return {
        extend : 'Ext.data.Store',

        requires : [
            'progress.data.proxy.Rest'
        ],

        autoLoad : false,
        autoSync : false,
        pageSize : 0,

        saveWithPromise : function(params) {
            var me = this;

            return new Ext.Promise(function(resolve, reject) {
                me.sync({
                    params : params || {},
                    scope : me,
                    success : function(response) {
                        resolve(response.responseText);
                    },
                    failure : function(response) {
                        reject(response.status);
                    }
                });
            });
        },

        loadWithPromise : function(params) {
            var me = this;

            return new Ext.Promise(function(resolve, reject) {
                me.load({
                    params : params || {},
                    scope : me,
                    callback : function(records, operation, success) {
                        if (success) {
                            resolve(records);
                        } else {
                            reject(operation);
                        }
                    }
                });
            });
        }
    };

});
