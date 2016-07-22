## jquery.relativetime.js

将日期时间转换为几秒前，几分钟前，几小时前，几天前，几月前，几年前的jquery插件，超轻量级，只做转换这一件事情


### 日期时间格式 (Time format)

	时间必须为24小时制，日期使用“-”分隔，例如：2016-02-28 23:49:03

### 选择元素后直接转换 (Sample 1)

```javascript
<div class="list-time">2016-02-28 23:49:03</div>
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
	var timestr = $.relativeTime('2016-02-28 23:49:03');
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
