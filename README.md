## 项目简介

一个将日期时间转换为相对时间(几年/几月/几日/几周/几小时-前/后)的jquery插件，超轻量级，只做转换这一件事情。


## 使用范例

工作中常用的一些使用场景的范例

### 日期时间格式

	时间必须为24小时制，日期使用“-”分隔，例如：2016-02-28 23:49:03

### 选择元素后直接转换

```js
<div class="list-time">2016-02-28 23:49:03</div>
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.relativetime.js"></script>
<script type="text/javascript">
	$(".list-time").relativeTime();
</script>
```

### 传值返回转换后的结果

```js
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.relativetime.js"></script>
<script type="text/javascript">
	var timestr = $.relativeTime('2016-02-28 23:49:03');
	console.log(timestr);
</script>
```

### 自定义配置

```js
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
