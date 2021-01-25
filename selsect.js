function selectstart() {
$('body').prepend('<style>* {outline:none; -webkit-tap-highlight-color:rgba(0,0,0,0);}.select{width:180px;height:50px;border-radius:12px;background:#fff;overflow:hidden; border:1px #e3e3e3 solid;margin:10px}.select .title{width:180px;height:50px;background:#ff;border-bottom:1px #c4c4c4 solid;font-size:20px;position:relative}.select .title img{height:15px;position:absolute;top:17px;right:17px}.select .title .span{position:absolute;top:50%;left:17px;transform:translateY(-50%) translateZ(0);width:113px;overflow:hidden;height:30px;}.select li{display: flex;justify-content: center;align-items: center;list-style:none;background:#fff;height:49px;border-bottom:1px #dedede solid}</style>');
for (var i=0; i<$('.select').length; i++){
$('.select').eq(i).prepend('<div class="title"><div class="span">選擇</div><img src="data:image/png;base64,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"></div>');
}

$('.title').click(function(){
  openselect($( this ).parent().attr('id'));
});

$('.select li').click(function(){
$( this ).parent().children('.title').children('.span').html($( this ).html());
$( this ).parent().attr('value', $( this ).attr('value'));

openselect($( this ).parent().attr('id'));
});

}

function openselect(sid) {
if($('#' + sid).height() > 51) {
$('#' + sid).css({'height': 50 ,'transition':'0.5s', 'overflow': 'hidden'});
$('#' + sid + ' li').fadeOut(1);
$('#' + sid + ' img').css({'transform':'rotate(0deg)','transition':'0.5s'});
$('#' + sid + ' .span').css({'overflow': 'hidden'});
}
else {
$('#' + sid).css({'height': getlistheight('#' + sid)+50 ,'transition':'0.5s'});
$('#' + sid + ' li').fadeIn(1);
$('#' + sid + ' img').css({'transform':'rotate(180deg)','transition':'0.5s'});
$('#' + sid + ' .span').css({'overflow': 'hidden'});
}
}
function getlistheight(id) {
var hh = 0;
for (var i=0; i<$(id + ' li').length; i++){
hh += $(id + ' li').eq(i).height();
}
if(hh < 180) {
$(id).css({'overflow': 'hidden'});
return hh ;
}
else {
$(id).css({'overflow': 'scroll'});
return 180 ;
}
}

selectstart();
