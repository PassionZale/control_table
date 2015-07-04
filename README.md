# control_table
jquery+bootstrap 控制table中的th在浏览器滚动条滚动时,一直显示在tbody的上方

这只是一个页面的content部分,header & footer并未添加

1.实际页面中,需要加上header的高度;

2.通过offset()获取th这一行所处的位置,返回obj{top:(num),left:(num)};

3.监听DOM对象滚动scroll事件,并获取滚动的top距离:scrollTop;

4.top = scrollTop + offset.top,即是th应该移动到的位置;

5.调用offset({top:top}) 将4步骤中的值赋值给其top属性;

6.设置其position为'fixed' || 'absolute',让其脱离标准文档流,即可让其随滚动条滚动而一直固定在某个位置;

7.由于脱离文档流,且该table为bootstrap的table控件,width样式消失,最后调用get_width();

8.将tbody中的一行tr,循环其td,获取其innerWidth(),并赋值给th中的td,即可.
