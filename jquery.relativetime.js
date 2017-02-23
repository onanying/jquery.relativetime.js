;(function($) {

        // 方法名
        var method = "relativeTime";

        // 配置
        var defaults = {
            future : "%s后",
            past : "%s前",
            ss : "几秒",
            ii : "%d分钟",
            hh : "%d小时",
            dd : "%d天",
            ww : "%d周",
            mm : "%d个月",
            yy : "%d年"
        };

        // 直接调用
        $[method] = function(timestr) {

            // 把初始配置与用户传入的配置合并, 用户输入覆盖初始值
            var options = $.extend({}, defaults, $[method].options);

            // 计算相对时间
            this.format = function( timestr ) {
                var time = isNaN(timestr) ? new Date(timestr.substr(0, 4), (timestr.substr(5, 2) - 1), timestr.substr(8, 2), timestr.substr(11, 2), timestr.substr(14, 2), timestr.substr(17, 2)).getTime() : timestr * 1000;
                var now = new Date().getTime();
                var absond = parseInt((now-time) / 1000);
                var abs = Math.abs(absond);
                var v = abs;
                var f = options.ss;
                if(abs<60){
                    v = abs;
                    f = options.ss;
                }else if(abs<3600){
                    v = abs/60;
                    f = options.ii;
                }else if(abs<86400){
                    v = abs/3600;
                    f = options.hh;
                }else if(abs<604800){
                    v = abs/(86400);
                    f = options.dd;
                }else if(abs<2592000){
                    v = abs/(604800);
                    f = options.ww;
                }else if(abs<31536000){
                    v = abs/2592000;
                    f = options.mm;
                }else{
                    v = abs/31536000;
                    f = options.yy;
                }
                var txt = f.replace("%d", parseInt(v));
                return parseInt(absond) > 0 ? options.past.replace("%s", txt) : options.future.replace("%s", txt);
            };

            return this.format(timestr);
        };

        // 选择元素后调用
        $.fn.extend({
            "relativeTime" : function() {
                $(this).each(function(index, domEle){
                    var timestr = $(domEle).text();
                    $(domEle).text($[method](timestr));
                });
            }
        });

        // 建立方法的配置属性
        $[method].options = defaults;

}(jQuery));