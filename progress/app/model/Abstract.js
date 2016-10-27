Ext.define('progress.model.Abstract', function() {

    return {
        extend : 'Ext.data.Model',

        requires : [
            'Ext.data.identifier.Negative',
            'progress.data.proxy.Rest'
        ],

        idProperty : 'id',

        schema : {
            namespace : 'progress.model',
            urlPrefix : progress.Api.API.ROOT,
            defaultIdentifier : 'negative',
            proxy : {
                type : 'progress_rest'
            }
        },

        fields : [
            {
                name : 'id',
                type : 'int'
            }
        ],

        saveWithPromise : function(params) {
            var me = this;

            return new Ext.Promise(function(resolve, reject) {
                me.save({
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

        loadWithPromise : function(opts) {
            var me = this,
                args = Array.prototype.slice.call(arguments);

            return new Ext.Promise(function(resolve, reject) {
                args[0] = Ext.apply(args[0] || {}, {
                    callback : function(rec, operation) {
                        // ignore operation.getRecords().length
                        if (operation && operation.wasSuccessful()) {
                            resolve(rec);
                        } else {
                            reject(operation.error.status);
                        }
                    }
                });

                me.load.apply(me, args);
            });
        }
    };
});
