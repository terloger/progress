Ext.define('progress.override.data.Store', {

    override : 'Ext.data.Store',

    saveWithPromise : function(params) {
        var me = this;

        return new Ext.Promise(function(resolve, reject) {
            if (me.getNewRecords().length || me.getModifiedRecords().length || me.getRemovedRecords().length) {
                me.sync({
                    params : params || {},
                    scope : me,
                    success : function() {
                        resolve(me);
                    },
                    failure : function(op) {
                        reject(op);
                    }
                });
            } else {
                resolve(me)
            }
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
});
