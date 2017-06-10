(function (window,angular) {
	var app = angular.module("todo",[])
	app.controller("dome",["$scope",function ($scope) {
		$scope.test = "test"
		$scope.list=[
			{value:"aaaaa",status:false},
			{value:"bbbbb",status:false},
			{value:"ccccc",status:false},
			{value:"ddddd",status:false},
			{value:"eeeee",status:false}
		];
		$scope.status = false
		$scope.editing = false
		// 增
		// 首先,新增的时候给数组添加一项
		$scope.add = function () {
			console.log(1)
			$scope.list.push({value:$scope.value,status:false})
			$scope.value=""
		}
		// 删
		// 删除的时候删除数组的一项
		// 本来不想给 list 的元素变成对象的,但是 ng-model="index==$index" 会报错,所以只能在这里用一个对象的属性替代
		$scope.del=function (index) {
			$scope.list.splice(index,1)
		}
		// 改
		// 原理:每次双击时,拿到这个的索引,并将所有元素的 index变得和这个一样,来判断素偶有元素的 index 是不是等于这个元素的 $index  ,这样保证了唯一性
		$scope.edit=function (index) {
			$scope.index = index
		}
		// 失去焦点
		// 原理:每个元素都有一个 $index,让其不等于 index 就好了
		$scope.blur = function () {
			$scope.index = null
		}
	}])
	console.log(2)
})(window,angular);
