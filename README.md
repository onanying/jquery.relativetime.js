## jquery.relativetime.js

将日期时间转换为几秒前，几分钟前，几小时前，几天前，几月前，几年前的jquery插件，超轻量级，只做转换这一件事情


### 日期时间格式 (Time format)

	字符串时间：时间必须为24小时制，日期使用“-”分隔，例如：2016-02-28 23:49:03
    时间戳：例如：1487830425

### 选择元素后直接转换 (Sample 1)

```javascript
<!-- 字符串时间 -->
<div class="list-time">2016-02-28 23:49:03</div>
<div class="list-time">2016-08-28 23:49:03</div>
<!-- 时间戳 -->
<div class="list-time">1487830425</div>
<div class="list-time">1487820425</div>
<!-- 转换 -->
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.relativetime.js"></script>
<script type="text/javascript">
	$(".list-time").relativeTime();
</script>
```

### 传值返回转换后的结果 (Sample 2)

```javascript
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.relativetime.js"></script>
<script type="text/javascript">
/* 字符串时间 */
var timestr = $.relativeTime('2016-02-28 23:49:03');
console.log(timestr);
/* 时间戳 */       
var timestr = $.relativeTime(1487830425);
console.log(timestr);
</script>
```

### 自定义配置 (Sample 3)

```javascript
$.relativeTime.options = {
    future : "in %s",
    past : "%s ago",
    ss : "seconds",
    ii : "%d minutes",
    hh : "%d hours",
    dd : "%d days",
    ww : "%d weeks",
    mm : "%d months",
    yy : "%d years"
};
var timestr = $.relativeTime('2016-02-28 23:49:03');
console.log(timestr);
```
