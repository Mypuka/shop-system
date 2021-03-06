	var s_btn=$('#selectBtn');
	var a_btn=$('#againBtn');
	var btn_move=$('button.btn_move');
$(function checkAll(){//全选
	$('.checkAll').change(function(){
		var me=$(this);
		var checked=me.prop('checked');
		if(checked){
			s_btn.prop('disabled',false).addClass('bg');
			a_btn.prop('disabled',false).addClass('bg');
			$('.checkAll,#tbody input:checkbox').prop('checked',true);
			$('#tbody input:checkbox').parents('tr').addClass('bg');
		}else{
			$('.checkAll,#tbody input:checkbox').prop('checked',false);
			$('#tbody input:checkbox').parents('tr').removeClass('bg');
			s_btn.prop('disabled',true).removeClass('bg');
			a_btn.prop('disabled',true).removeClass('bg');
		}
	});
});

$(function select_checked(){//删除
	$('#tbody input:checkbox').change(function(){
		var me=$(this);

		me.parents('tr').toggleClass('bg');
		me.prop("checked",me.prop("checked"));
		if(me.prop("checked")){
			s_btn.prop('disabled',false).addClass('bg');
			a_btn.prop('disabled',false).addClass('bg');
			btn_move.prop('disabled',false).addClass('bg');
		}else{
			//s_btn.prop('disabled',true).removeClass('bg');
			//a_btn.prop('disabled',true).removeClass('bg');
		}
	});
});

$(function select(){//删除
	s_btn.click(function(){
		if(confirm("确定要删除选中的行吗？")){
			$('#tbody input:checked').each(function(){
				n = $(this).parents('tr').index();
				//console.log(n);
				$('#tbody').find("tr:eq("+n+")").remove();
				$('.checkAll').prop('checked',false);
			})
		}
		$(this).prop('disabled',true).removeClass('bg');
	})
});
