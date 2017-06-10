(function (window,angular) {
	var app = angular.module("todo",[])
	app.controller("dome",["$scope",function ($scope) {
		$scope.test="成功"
		$scope.arr = [
			{name:"h",status:false},
			{name:"g",status:false},
			{name:"f",status:false},
			{name:"d",status:false},
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
	}])
	console.log(2)
})(window,angular);
