/**
 * Created by zl on 2015/7/3.
 */

$(function(){
    var $node = $('#tablewrapper table tr:eq(0)');
    var str = '';
    var get_width = function(){
        for(var i = 0; i <$('#tablewrapper table tr:eq(1) td').length; i++ ){
            str = $($('#tablewrapper table tr:eq(1) td')[i]).html();
            if( str == '') continue;
            $('#tablewrapper table tr:eq(0) th:eq('+i+')').css('width',$('#tablewrapper table tr:eq(1) td:eq('+i+')').innerWidth());
        }
    }
    //var header_height = $('header').height();//header的高度
    var offset = $node.offset();
    var $tr = $('#tablewrapper table tr:eq(1)');
    var tr_offset = $tr.offset();
    //var top = header_height;
    //console.log(top);
    $(window.document).scroll(function(){
        var scrollTop = $(document).scrollTop();
        var top = offset.top + scrollTop;
        $node.css({'position':'fixed','z-index':'200'}).offset({top:top});
        var mid_val = tr_offset.top + scrollTop;
        if(tr_offset.top == mid_val){
            $node.css('position','');
        }
        get_width();
    });
});

