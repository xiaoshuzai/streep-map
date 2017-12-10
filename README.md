## 以下为此项目创建思路

#### 1，进入高德地图开发者文档，注册后创建自己的 key

- 调用地图时注意插件的获取，高德中如需显示infoWindow中的搜索，需要加载 AdvancedInfoWindow , 它应该在key后边

- 点标记的动画设置可查看高德的代码示例

#### 2，使用 knockout 绑定交互事件

###### 一，列表项的交互显示，需要创建一个数组来存放你设置在地图上的标记

- 将这些标记全部 push 到自己的数组容器中，绑定 knockout 的 ko.observableArray()

- HTML 中对应列表进行 knockout 绑定 -- data-bind = "text: xxx"

###### 二，对搜索框中输入的值进行检索

- 这里需要用到一个关键函数，是 knockout 自带的 ：ko.utils.arrayFilter(array, callback)

- 使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。如下：
- var arr = [1, 2, 3, 4];
- var newArr = ko.utils.arrayFilter(arr, function(el, index) {return el > 2;});
- 上面得到的newArr为：[3, 4]

- 这样就可能进行筛选了

###### 三，绑定列表项中的点击事件

-  列表中的 item 和 marker 来自不同的数据，拥有的方法也不同，需要进行条件判断 Array.prototype 返回符合条件的第一个数值用这个数值来判断所点击的列表项的 name 是否和地图中的 name 相同，如一致，绑定交互事件
