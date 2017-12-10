window.onload = init;


function init() {
  /*================
  ==   高德地图初始化
  =================*/
  var map = new AMap.Map("container", {
    center: new AMap.LngLat(114.061161, 22.547913),
    zoom: 13
  });

  /*设置信息窗体，AdvancedInfoWindow 是插件，在js中加载，写在高德 key 后边*/
  var infoWindow = new AMap.AdvancedInfoWindow({
      offset: new AMap.Pixel(0, -50),
      isCustom:true,
      autoMove: true,
      showShadow: true
  });

  /*地图控件*/
  AMap.plugin(['AMap.Scale','AMap.OverView'],
    function(){
        map.addControl(new AMap.Scale());
        map.addControl(new AMap.OverView({isOpen:true}));
    });

  /*================
  ==   显示的地点
  =================*/
  var features = [{
      type: "Marker",
      name: "塘郎山公园",
      desc: "深圳塘朗山郊野公园位于深圳市南山区东北部，龙珠大道以北，留仙大道以南，西起红花岭，东止于福田区与南山区交界，总面积约10平方公里，是坐落于城市中的郊野公园",
      color: "red",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 114.011081,
        lat: 22.574504
      }
    },

    {
      type: "Marker",
      name: "笔架山公园",
      desc: "笔架山公园地形富于变化，景致独特，山林茂密，鸟语花香，西南面为开阔的人工园林生态区，山塘湖泊点缀其中，更有福田河从公园蜿蜒而过。有稀树草地、高大桉树林、松树林、风筝广场、草地滚球场、垂钓中心、展览馆等文体设施。东北面为山地郊野风景区，主峰海拔178米，次峰海拔163米，环山顶视野开阔，近可俯瞰地王大厦、赛格广场等标志性建筑，远可眺望深圳湾、蛇口和香港的上水及元朗等美景，建有登山道、山顶平台、茶苑等服务设施",
      color: "red",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 114.080897,
        lat: 22.562654
      }
    },

    {
      type: "Marker",
      name: "梧桐山森林公园",
      desc: "梧桐山历史悠久，早在明清时期，“梧岭天池”被誉为“新安八景”之一，如今“梧桐烟云”以其特有魅力荣膺“深圳八景”之列。梧桐山国家森林公园2009年被国务院列为国家级风景名胜区。",
      color: "red",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 114.200156,
        lat: 22.572729
      }
    },

    {
      type: "Marker",
      name: "东湖公园",
      desc: "东湖公园是深圳市目前建立最早、面积较大、景点较多、设施较完善、寓观赏、游乐、服务于一体的综合性市政公园",
      color: "red",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 114.152091,
        lat: 22.562108
      }
    },

    {
      type: "Marker",
      name: "莲花山公园",
      desc: "深圳市莲花山公园位于深圳市中心区的最北端，莲花山公园占地面积194公顷，南临红荔路，北到莲花路，东起彩田路，西至新洲路。莲花山公园东、南、西、北都有入口，其中，南面入口是主入口。",
      color: "red",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 114.058707,
        lat: 22.554737
      }
    },

    {
      type: "Marker",
      name: "欢乐海岸",
      desc: "欢乐海岸地处深圳湾商圈核心位置，位于深圳华侨城主题公园群与滨海大道之间，是深圳市'塘郎山--华侨城--深圳湾'城市功能轴的起点，是深圳市致力打造的高品质人文旅游、国际创意生活空间的中心。",
      color: "blue",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 113.987478,
        lat: 22.523494
      }
    },

    {
      type: "Marker",
      name: "星河 COCO PARK",
      desc: "深圳最具时尚气质的购物中心，集餐饮、购物、休闲、娱乐多功能于一体",
      color: "blue",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 114.228726,
        lat: 22.690733
      }
    },

    {
      type: "Marker",
      name: "万象城",
      desc: "HOPSCA——集酒店(Hotel)、写字楼(Office)、生态公园(Park)、购物中心(Shopping)、会所(Convention)、城市超级寓所 (Apartment)为一体的多功能、现代化、综合性城市多维空间，世界上最先进的地产开发模式，也是万象城的组成模式。",
      color: "blue",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 114.110965,
        lat: 22.53982
      }
    },

    {
      type: "Marker",
      name: "海岸城",
      desc: "深圳海岸城位于南山商业文化中心区，紧邻滨海大道、南海大道、后海大道、后海滨路、创业路等南山区的五条城市主干道。海岸城由东座写字楼、海岸城西座写字楼、海岸城购物中心和海岸风情街组成，是目前深圳西部规模最大的综合型商务、商业项目，也是迄今为止深圳市最大的室内购物、休闲、娱乐中心。",
      color: "blue",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 113.935645,
        lat: 22.517364
      }
    },

    {
      type: "Marker",
      name: "海雅缤纷城",
      desc: "海雅商业广场毗邻107国道和建安路特色商业街，是宝安区最成熟的商业旺地，交通便利、辐射面广，地理位置非常优越。商业广场的项目有两个比较独特的设计，一是水景与商业的有机结合，利用新安湖的水资源从地面到地下与商业体互动与融合，形成独特的景观，大大美化环境，增强观光游览和市民休闲功能；二是在商业中心设一个1200个座位的大剧院，与长沙田汉大剧院合作，表演老百姓喜闻乐见的综艺节目，为深圳本土的文艺表演团体提供舞台，丰富深圳市民的文化娱乐生活。",
      color: "blue",
      icon: "cir",
      offset: {
        x: -9,
        y: -31
      },
      lnglat: {
        lng: 113.906678,
        lat: 22.558914
      }
    },

    {
      type: "Marker",
      name: "市民中心",
      desc: "深圳市民中心集深圳市人民政府、深圳市人民代表大会、深圳博物馆、深圳会堂等多功能为一体的综合性建筑，是深圳的行政中心，市政府主要办公机构，同时也是市民娱乐活动的场所，成为了深圳市政府的形象代言，深圳最具有标志性的建筑物。",
      color: "green",
      icon: "twig",
      offset: {
        x: -13,
        y: -26
      },
      lnglat: {
        lng: 114.059584,
        lat: 22.544029
      }
    },
    {
      type: "Marker",
      name: "少年宫",
      desc: "深圳市少年宫位于深圳中央商务区核心区中轴线东北区域，总投资约人民币5.38亿元。建筑设计方案采用国际招标确定，其主体造型构思独特，整个建筑是一个面向西侧中央绿化带的斜坡，并沿平面的对角方向切成两半，分别命名为“少年山”和“科学山”，中间镶嵌一个圆柱型的“水晶石大厅”，三大部分构成了少年宫建筑的整体，寓意着少年儿童在少年宫这里勇攀高峰、采掘知识宝藏，充分体现了深圳市在开发少年潜能所关注的两个方面，即科技意识与艺术修养。",
      color: "green",
      icon: "twig",
      offset: {
        x: -13,
        y: -26
      },
      lnglat: {
        lng: 114.060131,
        lat: 22.548656
      }
    },
    {
      type: "Marker",
      name: "深圳博物馆",
      desc: "深圳博物馆位于广东省深圳市福田区福中路市民中心A区，北靠莲花山公园，南临深南大道，是一座以地志性为主的综合类博物馆，是深圳文物收藏和历史研究中心。深圳博物馆始建于1981年，于1988年11月开馆。占地面积约3.7万平方米，建筑面积1.8万平方米。",
      color: "green",
      icon: "twig",
      offset: {
        x: -13,
        y: -26
      },
      lnglat: {
        lng: 114.061646,
        lat: 22.544064
      }
    },
    {
      type: "Marker",
      name: "深圳图书馆",
      desc: "位于深圳市行政文化中心区内，风景秀美的莲花山南面，是深圳市重点文化设施之一，是集大众化、研究型及数字化于一身的大型综合性公共图书馆。其建筑造型独特，构思精巧，极富现代感，采用全开放、大开间、无间隔的“模数式”布局。深圳图书馆占地29612平方米，总建筑面积49589平方米，阅览座位近2000个，网络节点3000个",
      color: "green",
      icon: "twig",
      offset: {
        x: -13,
        y: -26
      },
      lnglat: {
        lng: 114.057324,
        lat: 22.545679
      }
    },
    {
      type: "Marker",
      name: "深圳音乐厅",
      desc: "深圳音乐厅坐落在福田中心区，交通便利，周边各类服务配套设施齐全。它北靠风光秀美的莲花山，南临深圳市政府，占地面积约26,345平方米，建筑面积约41,423平方米，由享誉国际建筑界的日本著名建筑大师矶崎新先生主持设计。其建筑造型优雅独特，外墙采用“黄红青白黑”五色，蕴含象征中国传统五行的理念，充分融汇出东西方的文化韵味。",
      color: "green",
      icon: "twig",
      offset: {
        x: -13,
        y: -26
      },
      lnglat: {
        lng: 114.057326,
        lat: 22.547421
      }
    }
  ];

  /*================
  ==  准备图标和标注
  =================*/
  // markers 数组保存所有 marker
  var markers = [];

  for (var i = 0; i < features.length; i++) {
    var feature = features[i];

    var marker = new AMap.Marker({
      map: map,
      position: new AMap.LngLat(feature.lnglat.lng, feature.lnglat.lat),
      content: '<div class="icon icon-' + feature.icon + ' icon-' + feature.icon + '-' + feature.color + '"></div>',
      animation: "AMAP_ANIMATION_DROP"
    });
    marker.content = "<h5>" + feature.name + "</h5><div>" + feature.desc + "</div>";
      //绑定点击事件
    marker.on("click", clicked);

    // 把所有marker都放到 markers 数组中，以便后续判断 name 是否一致，绑定交互事件
    marker.name = feature.name;
    markers.push(marker);
  }

  /*================
  ==  marker 点击事件
  =================*/

  function clicked(e) {
      return e.target?showInfoWindow(e.target):showInfoWindow(e);
  }

  function showInfoWindow(thisMarker) {
      //设置信息窗口内容，打开信息窗口
      infoWindow.setContent(thisMarker.content);
      // console.log(thisMarker.name);
      infoWindow.open(map, thisMarker.getPosition());
      //被点击的marker跳动
      thisMarker.setAnimation("AMAP_ANIMATION_BOUNCE");
      //通过计时器设定marker停止动画
      setTimeout(function() {
          thisMarker.setAnimation("AMAP_ANIMATION_NONE");
      }, 2500);
  }

  /*================
  == knockout M V V M
  =================*/

  var Marker = function(markerItem) {
    this.name = ko.observable(markerItem.name);
    this.position = ko.observable(markerItem.LngLat);
  };

  var ViewModel = function() {
    var self = this;
    /*================
    == 绑定边栏列表显示项
    =================*/

    this.markerList = ko.observableArray([]);

    features.forEach(function(item) {
      self.markerList.push(new Marker(item));
    });

    /*================
    == 搜索框文字过滤
    =================*/

    /*绑定搜索框输入的值*/
    this.inputValue = ko.observable("");
    /*绑定 markerList 中被push进去的值，也就是前边地图中放置的地点信息*/
    this.filter = ko.observableArray(self.markerList());

    /*================
    ==   ko.utils.arrayFilter(array, callback)
    ==   使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。如下：
    ==   var arr = [1, 2, 3, 4];
    ==   var newArr = ko.utils.arrayFilter(arr, function(el, index) {return el > 2;});
    ==   上面得到的newArr为：[3, 4]
    =================*/

    /*对文字进行检索，并对符合条件的值调用地图的 api，让它动起来*/
    this.listFilter = ko.computed(function() {
      return ko.utils.arrayFilter(self.filter(), function(item) {
        if ((item.name().toLowerCase()).indexOf(self.inputValue().toLowerCase()) >= 0) {
          return true;
        } else {
          return false;
        }
      });
    });

    this.clickItem = function(item) {
      // 列表中的 item 和 marker 来自不同的数据，拥有的方法也不同，需要进行条件判断
      // Array.prototype 返回符合条件的第一个数值
      // 用这个数值来判断所点击的列表项的 name 是否和地图中的 name 相同
      // 如一致，绑定交互事件
      var clickedMarker = markers.find(function(marker){
        return marker.name === item.name();
      });

      if (clickedMarker) {
        clicked(clickedMarker);
      }
    };

    /*================
    == 汉堡按钮点击事件
    =================*/

    this.hideOrShow = function() {
      var aside = document.getElementById("aside");
      aside.classList.toggle("aside-active");

      var hamberger = document.getElementById("hamberger");
      hamberger.classList.toggle("hamberger-active");
    };
  };
  // 启动 knockout.js
  ko.applyBindings(new ViewModel());
}
