Ext.require(['progress.Consts'], function() {

    var API_ROOT = '/api',
        HEADER = {
            AUTHORIZATION : 'Authorization'
        },
        SUCCESS_PROPERTY = 'success',
        DATA_ROOT = 'data';

    var API = {
        ROOT : API_ROOT,
        USERS : API_ROOT + '/users'
    };

    /**
     * @singleton
     */
    Ext.define('progress.Api', function() {

        /**
         * Failure handler.
         */
        function failure(response, opts) {

            switch (parseInt(response.status, 10)) {
                case 401:
                    //checkUnauthorised(response, opts);
                    break;

                case 502:
                case 400:
                case 406:
                case 500:
                    //showServerError(response, opts);
                    break;
            }

            Ext.callback(opts.failure, opts.scope, [response, opts]);
        }

        /**
         * Success handler.
         */
        function success(response, opts) {
            var json = Ext.decode(response.responseText, true);

            if (json === null || json[SUCCESS_PROPERTY] !== true) {
                response.status = json ? json.code : '500';
                response.statusText = json ? json.message : 'Неизвестная ошибка';

                return failure(response, opts);
            }

            response.isSuccess = true;
            Ext.callback(opts.success, opts.scope, [json[DATA_ROOT], response, opts]);
        }

        /**
         * Callback
         */
        function callback(options, success, response, opts) {
            Ext.callback(opts.callback, opts.scope, [opts, !!response.isSuccess, response]);
        }

        return {

            singleton : true,

            API : API,
            SUCCESS_PROPERTY : SUCCESS_PROPERTY,
            DATA_ROOT : DATA_ROOT,

            request : function(opts) {
                var data, headers,
                    me = this,
                    request;

                // todo check progress.TOKEN

                data = Ext.apply({}, {
                    timeout : (5 * 60) * 1000, // 5 minutes
                    scope : this,
                    success : function(response) {
                        success.call(me, response, opts);
                    },
                    failure : function(response) {
                        failure.call(me, response, opts);
                    },
                    callback : function(options, success, response) {
                        callback.call(me, options, success, response, opts);
                    }
                }, opts);

                headers = data.headers || (data.headers = {});
                headers[HEADER.AUTHORIZATION] = progress.Consts.MAIN_AUTH_PREFIX + progress.TOKEN;
                headers['Accept'] = 'application/json';

                request = Ext.Ajax.request(data);

                return request;
            }
        };

    });
});



