/**
 * @singleton
 */
Ext.define('progress.Utils', function() {

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\("|\\)/g, '$1');
        }

        return s;
    }

    function getCookie(name) {
        var cookies = document.cookie.split('; '),
            value, parts, key, cookie;

        for (var i = 0, l = cookies.length; i < l; i++) {
            parts = cookies[i].split('=');
            key = parts.shift();
            cookie = parts.join('=');

            if (key && key === name) {
                value = parseCookieValue(cookie);
                break;
            }
        }

        return value;
    }

    function setCookie(name, value, options) {
        var expires, d, cookie, propName, propValue;

        options = options || {};
        expires = options.expires;

        if (typeof expires === "number") {
            d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }

        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        // Fix to Ext.util.Cookies.clear
        if (!options.hasOwnProperty('path')) {
            options.path = '/';
        }

        cookie = name + "=" + value;

        for (propName in options) {
            cookie += "; " + propName;

            propValue = options[propName];
            if (propValue !== true) {
                cookie += "=" + propValue;
            }
        }

        document.cookie = cookie;

        if (typeof(Storage) !== "undefined") {
            if (value !== '') {
                localStorage.setItem('cookie-' + name, value);
                expires && localStorage.setItem('cookie-expires', expires);
            } else {
                localStorage.removeItem('cookie-' + name);
                localStorage.removeItem('cookie-expires');
            }
        }

    }

    function removeCookie(name) {
        setCookie(name, '', {
            expires : -1
        });
    }

    return {

        singleton : true,

        setCookie : setCookie,

        getCookie : getCookie,

        removeCookie : removeCookie
    };

});
