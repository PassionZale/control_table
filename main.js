/**
 * Created by zl on 2015/7/3.
 */

$(function () {
    var $node = $('#tablewrapper table tr:eq(0)');
    var $td_node_second = $('#tablewrapper table tr:eq(1) td');
    var get_width = function () {
        for (var i = 0, length = $td_node_second.length; i < length; i++) {
            var str = $($td_node_second[i]).html();
            //tbody中如果有的tr为空,由于bootstrap样式的原因,为空的tr如果设置高度,则会导致表头的文字无法正确排版
            if (str == '') continue;
            //innerWidth可以包含padding,如果没有padding可以直接使用width
            $('#tablewrapper table tr:eq(0) th:eq(' + i + ')').css('width', $('#tablewrapper table tr:eq(1) td:eq(' + i + ')').innerWidth());
        }
    }
    //var header_height = $('header').height();//header的高度
    var offset = $node.offset();
    var $tr = $('#tablewrapper table tr:eq(1)');
    var tr_offset = $tr.offset();
    //var top = header_height;
    //console.log(top);
    $(window.document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var top = offset.top + scrollTop;
        $node.css({'position': 'fixed', 'z-index': '200'}).offset({top: top});
        var mid_val = tr_offset.top + scrollTop;
        if (tr_offset.top == mid_val) {//当滚动到原位置时,恢复$node的样式.
            $node.css('position', '');
        }
        get_width();
    });
});

