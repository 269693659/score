function List(){
	this.addBtn=$(".btn");
	this.add_btn=$("#add_btn")
	this.add_name=$("#add_name");
	this.add_scroe=$("#add_scroe");
	this.add_mack=$("#add_mack");
	this.tbody=$("tbody");
	this.init();
}
$.extend(List.prototype,{
	init:function(){
		this.showdata();
		this.setDelete();
		this.addClick();
		this.updata();
		this.updataok()
	},
	//查
	showdata:function(){
		$.ajax({
			type:'post',
			url:'../php/select.php',
			dataType:'json',
			success:$.proxy(this.handleAjax,this),
			
		})
	},
	handleAjax:function(data){
		if(data[0].code==1){
			var Data=data[1]
			var str="";
			for(var i=0;i<Data.length;i++){
				str+=`<tr data-id='${Data[i].id}'>
						<td class="text-center">${i+1}</td>
						<td class="text-center">${Data[i].name}</td>
						<td class="text-center">${Data[i].score}</td>
						<td class="text-center">${Data[i].mark}</td>
						<td class="text-center"><a href="##" class='del'>删除</a></td>
						<td class="text-center"><a href="##" class='update'>修改</a></td>
					</tr>`
			}
			this.tbody.html(str)
		}
	},
	//删除
	setDelete:function(){
		
		$("tbody").on("click",".del",$.proxy(this.handleDelete,this))
		
	},
	handleDelete:function(event){
		//指定目标 的指定父级 的属性
		
		var idVal=$(event.target).closest('tr').attr('data-id');
		
		$.ajax({
			type:'post',
			url:'../php/del.php',
			dataType:'json',
			data:{id:idVal},
			success:$.proxy(this.handleDeleteAjax,this)

		})
	},
	handleDeleteAjax:function(data){
		if (data.code==1) {
			alert("删除成功")
			this.showdata();
		}else{
			alert("删除失败")
		}
	},
	//增加
	addClick:function(){
		this.add_btn.on("click",$.proxy(this.handleAdd,this))

		
	},
	handleAdd:function(){
		
		var nameVal=this.add_name.val();
		var scroeVal=this.add_scroe.val();
		var mackVal=this.add_mack.val()
		
		$.ajax({
			type:'post',
			url:'../php/add.php',
			dataType:'json',
			data:{uname:nameVal,uscroe:scroeVal,umack:mackVal},
			success:$.proxy(this.handleAddAjax,this)

		})

	},
	handleAddAjax:function(data){
		
		var data=data.code;
		if(data==1){
			alert("添加成功");
			this.showdata();
			
		}else{
			alert("添加失败");
		}
	},
	//修改
	updata:function(){
		$("tbody").on("click",".update",function(){
			$(this).html("确定").addClass('updataok').removeClass('update')
			//找到指定父级tr
			var tr = $(this).closest('tr');
			//找到指定子级td
			var taAll=tr.find('td');
			
			for(var i=1;i<=3;i++){
				var textVal=taAll.eq(i).html()
				taAll.eq(i).html(`<input type=text value=${textVal}>`)
			}
			
		})
	},
	updataok:function(){
		var _this=this;
		$("tbody").on("click",".updataok",function(){
			var idVal=$(this).closest('tr').attr('data-id');
			//找到指定父级tr
			var tr = $(this).closest('tr');
			//找到指定子级td
			var inputAll=tr.find('input');
			var updata_name=inputAll.eq(0).val();
			var updata_scroe=inputAll.eq(1).val();
			var updata_mack=inputAll.eq(2).val();
			
			$.ajax({
				type:'post',
				url:'../php/updata.php',
				dataType:'json',
				data:{uname:updata_name,uscroe:updata_scroe,umack:updata_mack,uid:idVal},
				success:function(data){
					if(data.code==1){

						alert("修改成功");
						_this.showdata();
						$(this).html("修改").removeClass('updataok').addClass('update')
						
					}else{
						alert("修改失败");
					}
				}
			})
			
		})
	}
	
})
new List();
