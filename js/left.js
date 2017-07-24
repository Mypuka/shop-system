
/*************************************************************-*-*-*-*-*-*-*-*-*-*-*-*-*-*******/
$(function(){
    //合并与打开
    $('h3.useful').click(function(){
        $(this).toggleClass('off');
        $(this).next('ul').slideToggle();
    })

    //导航地图的弹出
    $('p.map').click(function(){
        $('#mask').show();
    });
    $('#mask p.title img').click(function(){
        $(this).parents('#mask').hide();
    })

    //左侧菜单栏一级一级的呈现
    $('ul.sub_menu').on('click','a.click_son',function(event){
        event.preventDefault();
        var me=$(this);
        me.parent().addClass('on').siblings().removeClass('on');
        me.parents('li').siblings('li').find('dl').find('dd').removeClass('on');
        me.parent('ul').siblings('ul').find('li').find('dl').find('dd').removeClass('on');
        var val=me.html();
        var scr_rfm=me.attr('href');
        var title=me.attr('title');
        var id='#'+title;
        console.log(id);
        var son="<a href='javascript:;' class='block add_btn bg' onclick='"+event+"'><span>"+val+"</span><img src='../images/close.png'/></a>";
        var rfm="<iframe src='"+scr_rfm+"' id='"+title+"' frameborder='0'></iframe>"
        $('div.contentAll').append(rfm);
        $(id).show().siblings().hide();
    })

    //导航条中按钮的样式切换
    $('#address_head').on('click','a.add_btn',function(event){
        event.preventDefault();
        $(this).addClass('bg').siblings().removeClass('bg');
    })

    //左侧菜单栏对应的页面呈现
    $('ul.sub_menu').on('click','a.click',function(event){
        event.preventDefault();
        var me=$(this);
        var val=me.html();
        var scr_rfm=me.attr('href');
        var title=me.attr('title');
        var id='#'+title;
        console.log(id);
        //地址导航条添加
        var son="<a href='javascript:;' class='block add_btn bg' onclick='"+event+"'><span>"+val+"</span><img src='../images/close.png'/></a>";
        var rfm="<iframe src='"+scr_rfm+"' id='"+title+"' frameborder='0'></iframe>"
        $('div.contentAll').append(rfm);
        $(id).show().siblings().hide();
        // $('#address_head').append(son);//导航栏追加左侧的菜单栏
        //$(son).appendTo('#address_head').siblings().removeClass('bg');
        $(this).next().slideToggle();
        $(this).parent().addClass('active').siblings().removeClass('active').parent().siblings('ul').find('li').removeClass('active');
    })


    //导航栏的按钮点击后，关闭所对应的页面
    $('#address_head').on('click','img',function(){
        $(this).parents('a.add_btn').remove();

    })
})



/**********************************************************************/
function  add(){
    /*
    var arr_each =[];
    $('ul.sub_menu a').each(function(){
        var html=$(this).html();
        arr_each.push(html);
    });
    console.log(arr_each);
    console.log(arr_each.length);
   */
  /*
    var arr = new Array(0);
    var arr_1 = [];
    $('ul.sub_menu').on('click','a.click',function(){
        var me=$(this);
        var val=me.html();
        // console.log(val);
        var event=me.attr('onclick');
        // console.log(event);
        arr.push(val);
        // console.log(arr);
        // console.log(arr_1);
        
        for(var i=0;i<arr.length;i++){
            arr_1=arr;
            var text = arr[i];
            // console.log(arr.length);
            // console.log(text);
            if(text==val){
                // console.log(123);
                // arr.pop(val);
                // console.log(arr);
            }else{
                
                var son="<a href='javascript:;' class='block add_btn' onclick='"+event+"'><span>"+val+"</span><img src='../images/close.png'/></a>"
                // $('#address_head').append(son);//导航栏追加左侧的菜单栏
                // console.log(arr_1);
            }
        };
        console.log(arr_1);
    });
    */
}
/**************************************************************************************************/