/**
 * Created by Administrator on 2017/1/5.
 */
$(function(){
    //编辑
    $("a.edit_btn").click(function(event){
        event.preventDefault();
        var me=$(this);
        var id=me.attr('href');console.log(id);
        var val=me.html();
        var a="<a href='"+id+"' class='block bg'>"+val+"</a>";
        var div=me.parents('.manage');
        div.hide().siblings('.type_edit').show();
        var p=$(this).parents('.manage').siblings('._head');
        var pre_a=p.find('a:first-child');
        $(a).insertAfter(pre_a).siblings().removeClass('bg');
        p.on('click','a',function(event){
            event.preventDefault();
            $(this).addClass('bg').siblings().removeClass('bg');
            var id_1=$(this).attr('href');
            console.log(id_1);
            $(id_1).show().siblings('div').hide();
        })
    });

    //移动弹框显示
    $('.btn_move').click(function(){
        $('#mask_move').show();
    });
    $('#mask_move .no').click(function(){
        $(this).parents('#mask_move').hide();
    });

    //添加子分类弹框显示
    $('.add_son_type').click(function(){
        var me=$(this);
        var val=me.parent().siblings('.big').find('.type_name').html();
        console.log(val);
        $('#mask_type').show();
        $('p.set').on('click','a',function(event){
            event.preventDefault();
            var id=$(this).attr('href');
            $(id).show().siblings().hide();
        })
    });
    $('#mask_type .no').click(function(){
        $(this).parents('#mask_type').hide();
    });

    //子分类的集中
    $('td.big>s').click(function(){
        var me=$(this);
        var num=me.parent().siblings('.num').html();
        me.toggleClass('open');
        var cs="'.for_top_"+num+"'";
        $(eval(cs)).toggleClass('hidden');
    });


})