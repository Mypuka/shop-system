$(function(){
    del();
    change();
});
/******************************/
function change(){//状态背景打钩
    $('td.bg').click(function(){
        $(this).toggleClass('yes');
    })
};
/********************/
function del(){//单行删除
    $('.btn_close').click(function(event){
        event.preventDefault();
        if(confirm("确定要删除选中的行吗？")){
            $(this).parents('tr').remove();
            $('#selectBtn').prop('disabled',true).removeClass('bg');
        }
    })
};
/***********************/
/****************************/
$(function content(e){//修改
    $('.revise').click(function(){
        var me=$(this);
        var span=me.siblings('span');
        var val=span.html();
        span.hide();
        me.hide();
        var input=me.siblings('input');
        input.show().val(val).focus();
        input.focusout(function(){
            var text=$(this).val();
            //console.log(text);
            $(this).hide();
            me.show();
            span.show().html(text);
        })
    })
});
/***********************************************/
(function(){
    var editor;
    KindEditor.ready(function(K) {
        editor = K.create('textarea[name="content"]', {
                allowFileManager : true
            });
            K('input[name=getHtml]').click(function(e) {
                alert(editor.html());
            });
            K('input[name=isEmpty]').click(function(e) {
                alert(editor.isEmpty());
            });
            K('input[name=getText]').click(function(e) {
                alert(editor.text());
            });
            K('input[name=selectedHtml]').click(function(e) {
                alert(editor.selectedHtml());
            });
            K('input[name=setHtml]').click(function(e) {
                editor.html('<h3>Hello KindEditor</h3>');
            });
            K('input[name=setText]').click(function(e) {
                editor.text('<h3>Hello KindEditor</h3>');
            });
            K('input[name=insertHtml]').click(function(e) {
                editor.insertHtml('<strong>插入HTML</strong>');
            });
            K('input[name=appendHtml]').click(function(e) {
                editor.appendHtml('<strong>添加HTML</strong>');
            });
            K('input[name=clear]').click(function(e) {
                editor.html('');
            });
        });      
}());
