<template>
  <div class="content" style="color: black">
    <div class="search-box">
      <input v-model="input" placeholder="请输入内容" id="tipinput" style="
          color: black;
          border: 1px solid blue;
          width: 220px;
          height: 30px;
          position: absolute;
          top: 100px;
          left: 80px;
          z-index: 999999999999999;
        " />
    </div>
    <div id="map-container"></div>
    <div id="panel"></div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  // 设置安全密钥
  securityJsCode: "02f056200642de3f754ad8ca13e95d79",
};

export default {
  props: {
    iptId: {
      type: String,
    },
  },
  data() {
    return {
      input: "",
      map: null,
      lnglat: [], // [lng,lat]  [longitude,latitude]
      auto: null,
      placeSearch: null,
      markers: [],
      driving: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    })
  },
  created() {
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "5e7554daa09745eff99de557c644b834", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [
          "AMap.AutoComplete",
          "AMap.PlaceSearch",
          "AMap.Driving",
          "AMap.DragRoute",
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.HawkEye",
          "AMap.MapType",
          "AMap.Geolocation",
        ],
      })
        .then((AMap) => {
          this.map = new AMap.Map("map-container", {
            // 设置地图容器id
            viewMode: "3D", //  是否为3D地图模式
            zoom: 13, // 初始化地图级别
            center: [116.9109, 27.279], // 初始化黎川中心
            resizeEnable: true,
          });
          //规划结果 + 驾车路线绘制
          this.drivingMap();
          //    可拖拽驾车路线规划 绘制初始路径
          this.mapDragRoute();
          this.drivingMapPanle();
          // 关键字查询
          this.searchMap();
          // 监听鼠标点击事件
          this.map.on("click", this.clickMapHandler);
          this.map.addControl(new AMap.Scale());
          this.map.addControl(new AMap.ToolBar());
          this.map.addControl(new AMap.HawkEye());
          this.map.addControl(new AMap.MapType());
          this.map.addControl(new AMap.Geolocation());
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 绘制初始路径
    mapDragRoute() {
      var path = [];
      path.push([114.332138, 30.53802]);
      path.push([114.317433, 30.55351]);
      path.push([114.308783, 30.560878]);

      var route = new AMap.DragRoute(this.map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
      route.search(); //查询导航路径并开启拖拽导航
    },
    drivingMap() {
      var driving = new AMap.Driving({
        map: this.map,
      });
      // 根据起终点经纬度规划驾车导航路线
      driving.search(
        new AMap.LngLat(114.332138, 30.53802),
        new AMap.LngLat(114.308783, 30.560878),
        {
          waypoints: [new AMap.LngLat(114.317433, 30.55351)],
        },
        function (status, result) {
          // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
          if (status === "complete") {
            console.log("绘制驾车路线完成");
          } else {
            console.log("获取驾车数据失败：" + result);
          }
        },
      );
    },
    drivingMapPanle() {
      // 配置参数
      var drivingOption = {
        policy: AMap.DrivingPolicy.LEAST_TIME, // 其它policy参数请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingPolicy
        ferry: 1, // 是否可以使用轮渡
        // province: "京", // 车牌省份的汉字缩写
        map: this.map,
        panel: "panel",
      };
      // 构造路线导航类
      var driving = new AMap.Driving(drivingOption);
      // 根据起终点经纬度规划驾车导航路线
      driving.search(new AMap.LngLat(116.379028, 39.865042), new AMap.LngLat(116.427281, 39.903719), function (status, result) {
        if (status === "complete") {
          console.log("绘制驾车路线完成");
        } else {
          console.log("获取驾车数据失败：" + result);
        }
      });
    },

    // 点击地图事件
    clickMapHandler(e) {
      this.lnglat = [e.lnglat.getLng(), e.lnglat.getLat()];
      this.setMarker(this.lnglat);
    },

    // 关键字查询
    searchMap() {
      // 搜索框自动完成类
      this.auto = new AMap.AutoComplete({
        input: "tipinput", // 使用联想输入的input的id
      });
      //构造地点查询类
      this.placeSearch = new AMap.PlaceSearch({
        map: this.map,
      });
      // 当选中某条搜索记录时触发
      this.auto.on("select", this.selectSite);
    },

    //当选中某条搜索记录时触发
    selectSite(e) {
      console.log("e", e);
      this.lnglat = [e.poi.location.lng, e.poi.location.lat];
      this.placeSearch.setCity(e.poi.adcode);
      this.placeSearch.search(e.poi.name); //关键字查询
    },

    //  添加标记
    setMarker(lnglat) {
      this.removeMarker();
      console.log("位置", lnglat);
      let marker = new AMap.Marker({
        position: lnglat,
      });
      marker.setMap(this.map);
      this.markers.push(marker);
    },

    // 删除之前后的标记点
    removeMarker() {
      if (this.markers) {
        this.map.remove(this.markers);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;

  .label {
    width: 100px;
  }
}

.content {
  position: relative;
}

#panel {
  position: absolute;
  top: 450px;
  right: 280px;
}

#map-container {
  overflow: hidden;
  width: 95%;
  height: 550px;
  margin: 0;
}
</style>
