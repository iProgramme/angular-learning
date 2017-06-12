(function (window,angular) {
	var app = angular.module("todo",[])
	app.controller("dome",["$scope","$filter",function ($scope,$filter) {
		$scope.test="成功"
		$scope.arr = [
			{name:"h",status:false},
			{name:"g",status:false},
			{name:"f",status:false},
			{name:"d",status:true},
			{name:"s",status:false},
			{name:"a",status:false}
		]
		// 增
		$scope.add = function () {
			console.log("成功")
			$scope.arr.push({name:$scope.value,status:false})
			$scope.value = ""
		}
		// 删
		$scope.del = function (index) {
			$scope.arr.splice(index,1)
		}
		// 改
		$scope.edit = function (index) {
			$scope.index = index
		}
		$scope.editover = function () {
			$scope.index = null
		}


		// 显示未完成的数量
		$scope.$watch("arr",function (p1) {
			console.log(p1)
			$scope.left = $filter("filter")($scope.arr,{status:false}).length
			$scope.valueAll = !$scope.left
		},true) // 注意要加个 true 才能监听到对象里面的内容变化

		// 清除已完成的数据
		$scope.clear = function () {
			$scope.arr = $filter("filter")($scope.arr,{status:false})
		}

		// 对原有数据进行过滤
		$scope.select = function (flag) {
			$scope.status = flag
		}
		// 全选
		$scope.changeAll = function () {
			$scope.arr.forEach(function (item) {
				item.status = !$scope.valueAll
			})
		}
	}])
	console.log(2)
})(window,angular);
