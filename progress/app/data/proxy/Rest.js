/**
 * REST Proxy.
 */
Ext.define('progress.data.proxy.Rest', function() {

    return {

        alias : 'proxy.progress_rest',

        extend : 'Ext.data.proxy.Rest',

        requires : [
            'Ext.data.reader.Json',
            'Ext.data.writer.Json'
        ],

        reader : {
            type : 'json',
            rootProperty : progress.Api.DATA_ROOT,
            successProperty : progress.Api.SUCCESS_PROPERTY,
            totalProperty : 'count'
        },

        writer : {
            type : 'json'
        },

        /**
         * @param opts
         */
        request : function request(opts) {
            return progress.Api.request(opts);
        },

        /**
         * @overrides
         *
         * Fires a request
         * @param {Ext.data.Request} The request
         * @return {Ext.data.Request} The request
         * @private
         */
        sendRequest : function(request) {
            request.setRawRequest(this.request(request.getCurrentConfig()));
            this.lastRequest = request;

            return request;
        }
    };

});
