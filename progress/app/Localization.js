Ext.onReady(function() {

    if (Ext.Date) {
        Ext.Date.defaultFormat = 'd.m.Y';

        Ext.Date.monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        Ext.Date.shortMonthNames = ["Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.shortMonthNames[month];
        };

        Ext.Date.monthNumbers = {
            'Янв' : 0,
            'Фев' : 1,
            'Мар' : 2,
            'Апр' : 3,
            'Май' : 4,
            'Июн' : 5,
            'Июл' : 6,
            'Авг' : 7,
            'Сен' : 8,
            'Окт' : 9,
            'Ноя' : 10,
            'Дек' : 11
        };

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
        };

        Ext.Date.dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        Ext.Date.dayNamesShort = ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNamesShort[day];
        };
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator : ' ',
            decimalSeparator : ',',
            currencySign : '\u0440\u0443\u0431',
            // Russian Ruble
            dateFormat : 'd.m.Y'
        });
    }
});

/**
 * @singleton
 */
Ext.define('progress.Localization', function() {

    return {
        singleton : true,

        init : function() {

        }
    };

});
