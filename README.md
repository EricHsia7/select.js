# select.js
## install
JQuery
```
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
select.js
```
<script src="https://erichsia7.github.io/select.js/selsect.js"></script>
```
## use
html
```
<div class="select" id="select">
<li value="1">珍珠大正紅茶拿鐵</li>
<li value="2">大正紅茶拿鐵</li>
<li value="3">伯爵紅茶拿鐵</li>
<li value="4">茉香綠茶拿鐵</li>
<li value="5">高峰烏龍拿鐵</li>
</div>
```
## getvalue
```
document.getElementById(id).getAttribute('value')
```
## example
[demo](https://erichsia7.github.io/select.js/demo.html)
```
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<center>
<h1>select.js example</h1>
<div class="select" id="select">
<li value="1">珍珠大正紅茶拿鐵</li>
<li value="2">大正紅茶拿鐵</li>
<li value="3">伯爵紅茶拿鐵</li>
<li value="4">茉香綠茶拿鐵</li>
<li value="5">高峰烏龍拿鐵</li>
</div>

<div class="select" id="select2">
<li value="1">全糖</li>
<li value="0.8">少糖</li>
<li value="0.5">半糖</li>
<li value="0.3">微糖</li>
<li value="0">無糖</li>
</div>

<div class="select" id="select3">
<li value="1">正常冰</li>
<li value="0.5">少冰</li>
<li value="0.3">薄冰</li>
<li value="0">去冰</li>
</div>
</center>
<script src="https://erichsia7.github.io/select.js/selsect.js"></script>
```
## remarks
select.js must be after html.
## download
[select.js](https://github.com/EricHsia7/select.js/raw/main/selsect.js)
