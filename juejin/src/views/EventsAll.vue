<!-- 未完成：日历活动的格式化获取和渲染； -->

<template>
  <div class="page">
    <!-- 活动地点导航栏 -->
    <div class="bar">
      <div class="bar-content">
        <div class="citys">
          <div class="city" :class="{'select': selectCity == item}" v-for="(item, index) in barCity" :key="index+'bt'" @click="citySelect(item)">{{item}}</div>
          <div class="other" @mouseenter="showOthers()" @mouseleave="removeOthers()">
            <div class="city">其他</div>
            <img :style="otherImg" src="../assets/EventsAll/other.png" alt="其他">
            <div class="others" v-if="isOthersCity">
              <div class="others-city" :class="{'select': selectCity == item}" v-for="(item, index) in othersCity" :key="index+'ot'" @click="citySelect(item)">{{item}}</div>
            </div>
          </div>
        </div>
        <a target="_blank" href="https://wenjuan.feishu.cn/m/cfm?t=sxwlA0AtjAxi-l0um">
          <div class="cooperation">
            <img src="../assets/EventsAll/cooperation.png" alt="活动合作">
            <div>活动合作</div>
          </div>
        </a>
        
      </div>
    </div>
    <!-- 页面内容 -->
    <div class="content">
      <!-- 页面内容（头部） -->
      <div class="content-header">
        <!-- 活动轮播图 -->
        <div class="picture">
          <slider animation="normal" width="490px" height="290px">
            <slider-item v-for="(item, index) in pictureList" :key="index">
              <a target="_blank" :href="item.src">
                <img :src="item.img" :alt="item.title">
              </a>
            </slider-item>
          </slider>
        </div>
        <!-- 活动日历 -->
        <div class="calendar">
          <div class="calendar-title">
            <div class="item ctrl" @click="lastMonth"> ◀ </div>
            <div class="item title"> {{title}} </div>
            <div class="item ctrl" @click="nextMonth"> ▶  </div>
          </div>
          <div class="calendar-week">
            <div class="week-item" v-for="(item, index) in weekText" :key="index+'w'">{{item}}</div>
          </div>
          <div class="calendar-container">
            <!-- 上个月 -->
            <div class="grid gray" :class="{'weekend': item.week == '日' || item.week == '六'}" v-for="(item, index) in emptyGridBefore" :key="index+'pd'">
              {{item.dateFormat}}
              <div class="circle">
                <span v-for="(active, index) in item.actives" :key="index+'nc'"></span>
              </div>
              <div class="dayActive" v-if="item.actives.length">
                <ul>
                  <li v-for="(active, index) in item.actives" :key="index+'tad'"><a :href="active.src">{{active.title}}</a></li>
                </ul>
              </div>
            </div>
            <!-- 这个月 -->
            <div class="grid" :class="{'weekend': item.week == '日' || item.week == '六'}" v-for="(item, index) in thisMonthDays" :key="index+'d'">
              <div class="wrap" :class="{'select': formate == year+'-'+item.monthFormat+'-'+item.dateFormat}">{{item.dateFormat}}</div>
              <div class="circle">
                <span v-for="(active, index) in item.actives" :key="index+'tc'"></span>
              </div>
              <div class="dayActive" v-if="item.actives.length">
                <ul>
                  <li v-for="(active, index) in item.actives" :key="index+'tad'"><a :href="active.src">{{active.title}}</a></li>
                </ul>
              </div>
            </div>
            
            <!-- 下个月 -->
            <div class="grid gray" :class="{'weekend': item.week == '日' || item.week == '六'}" v-for="(item, index) in emptyGridAfter" :key="index+'nd'">
              {{item.dateFormat}}
              <div class="circle">
                <span v-for="(active, index) in item.actives" :key="index+'ac'"></span>
              </div>
              <div class="dayActive" v-if="item.actives.length">
                <ul>
                  <li v-for="(active, index) in item.actives" :key="index+'tad'"><a :href="active.src">{{active.title}}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 活动列表 -->
      <div class="activeList">
        <div class="active" v-for="(item, index) in showActiveList" :key="index+'a'">
          <a target="_blank" :href="item.src">
            <img :src="item.img" alt="活动图片">
            <div class="active-content">
              <div class="title">{{item.title}}</div>
              <div class="time">
                <img src="../assets/EventsAll/activeTime.png" alt="活动时间">
                <div>{{activeTime(item.time)}}</div>
              </div>
              <div class="place">
                <img src="../assets/EventsAll/place.png" alt="活动地点">
                <div>{{item.place}}</div>
              </div>
              <div class="state" :class="judgeState(item.time)">{{activeState}}</div>
            </div>
          </a>
        </div>
      </div>
      <div class="content-footer">
        <div class="brand">©2022 稀土掘金 | <a target="_blank" href="http://www.beian.miit.gov.cn/">津ICP备15003202号-2</a> | <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719">京公网安备11010802026719号</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      // 城市导航列表
      selectCity: '全部活动',
      barCity: ['全部活动', '北京', '上海', '广州', '深圳', '杭州'],
      othersCity: [
        '全国','长沙','成都','重庆','福州','合肥','南京','青岛','沈阳','石家庄','苏州','太原',
        '天津','武汉','厦门','西安','香港','郑州','珠海','海外','不限'
      ],
      isOthersCity: false,
      otherImg: '',

      activeState: '',
      // 活动列表，取得后根据活动时间先后顺序排列
      activeList: [
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        },
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        },
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        },
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        },
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        }
      ],
      // 活动展示列表，页面需要渲染的活动时间格式化后的活动列表
      showActiveList: [
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        },
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        },
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        },
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        },
        {
          title: '开源技术实践之可观测性数据采集与eBPF自动化',
          time: '2022-08-17',
          img: 'https://sslprod.oss-cn-shanghai.aliyuncs.com/stable/events/1093/h62f37d03e0385.png',
          place: '线上',
          src: 'https://www.slidestalk.com/m/1093/juejin0817'
        }
      ],
      // 轮播图列表
      pictureList: [
        {
          img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f04ebd4d936742b38e418feadb478b23~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp',
          src: 'https://juejin.cn/post/7130975312350822431',
          title: 'App 商业化训练营'
        },
        {
          img: 'https://p1-live.byteimg.com/tos-cn-i-gjr78lqtd0/97092928a02747738a134a8f2974eeb4~tplv-gjr78lqtd0-image.image',
          src: 'https://juejin.cn/live/juejinyetan006',
          title: '掘金夜谈No.6'
        },
      ],

      // 日历所需数据
      weekText: ['日', '一', '二', '三', '四', '五', '六'],
      emptyGridBefore: [],
      thisMonthDays: [],
      emptyGridAfter: [],
      year: 0,
      month: 0,
      date: 0,
      formate: '',
      YEAR: 0,
      MONTH: 0,
      DATE: 0,
      title: '',



    }
  },
  methods:{
    showOthers(){
      this.isOthersCity = true;
      this.otherImg = 'transform: translate(120%, -50%) rotateX(180deg);'
    },
    removeOthers(){
      this.isOthersCity = false;
      this.otherImg = ''
    },
    citySelect(e){
      if(e !== this.citySelect){
        this.selectCity = e
        this.showActiveList = []
        if(e == '全部活动'){
          this.showActiveList = this.activeList
        }else{
          for(let i = 0; i < this.activeList.length; i++){
            if(this.activeList[i].place == e){
              this.showActiveList.push(this.activeList[i])
            }
          }
        }
      }
    },

    today(){
      let DATE = new Date(),
      year = DATE.getFullYear(),
      month = DATE.getMonth() + 1,
      date = DATE.getDate(),
      select = year + '-' + this.zero(month) + '-' + this.zero(date);
      this.year = year,
      this.month = month,
      this.date = date,
      this.formate = select,
      this.YEAR = year,
      this.MONTH = month,
      this.DATE = date
      this.display(year, month)
    },
    display(year, month){
      this.year = year,
      this.month = month,
      this.title = year + '年' + this.zero(month) + '月'
      this.createDays(year, month)
      this.createEmptyGrids(year, month)
    },
    createEmptyGrids(year, month){
      let week = new Date(Date.UTC(year, month - 1, 1)).getDay(),
      emptyGridBefore = [],
      emptyGridAfter = [],
      empthDays = week;
      let actives = this.activeList
      let length = actives.length
      let preMonth = month
      let preYear = year
      let thisMonthDays = this.getThisMonthDays(year, month)
      if(month == 0){
        preMonth = 11
        preYear = year - 1
      }else{
        preMonth = month - 1
        preYear = year
      }
      let preMonthDays = this.getThisMonthDays(preYear, preMonth)
      for(let i = 1; i <= week; i++){
        emptyGridBefore.push({
          dateFormat: preMonthDays - (week - i),
          week: this.weekText[i - 1],
          actives: []
        })
        for(let j = 0; j < length; j++){
          if(new Date(actives[j].time).getTime() == new Date(`${preYear}-${this.zero(preMonth)}-${preMonthDays - (week - i)}`).getTime()){
            emptyGridBefore[i - 1].actives.push({
              title: actives[j].title,
              src: actives[j].src
            })
          }
        }
      }
      let after = 42 - thisMonthDays - empthDays
      let afterWeek = week + thisMonthDays % 7 - 1
      let afterYear = year
      let afterMonth = month
      if(month == 11){
        afterYear = year + 1
        afterMonth = 0
      }else{
        afterYear = year
        afterMonth = month + 1
      }
      for(let i = 1; i <= after; i++){
        emptyGridAfter.push({
          dateFormat: this.zero(i),
          week: this.weekText[(afterWeek + i) % 7],
          actives:[]
        })
        for(let j = 0; j < length; j++){
          if(new Date(actives[j].time).getTime() == new Date(`${afterYear}-${this.zero(afterMonth)}-${this.zero(i)}`).getTime()){
            emptyGridAfter[i - 1].actives.push({
              title: actives[j].title,
              src: actives[j].src
            })
          }
        }
      }
      this.emptyGridAfter = emptyGridAfter,
      this.emptyGridBefore = emptyGridBefore
    },
    createDays(year, month){
      let thisMonthDays = [], days = this.getThisMonthDays(year, month);
      let actives = this.activeList
      let length = actives.length
      for(let i = 1; i <= days; i++){
        thisMonthDays.push({
          date: i,
          year: year,
          dateFormat: this.zero(i),
          monthFormat: this.zero(month),
          week: this.weekText[new Date(Date.UTC(year, month - 1, i)).getDay()],
          actives: []
        })
        for(let j = 0; j < length; j++){
          if(new Date(actives[j].time).getTime() == new Date(`${year}-${this.zero(month)}-${this.zero(i)}`).getTime()){
            thisMonthDays[i - 1].actives.push({
              title: actives[j].title,
              src: actives[j].src
            })
          }
        }
      }
      this.thisMonthDays = thisMonthDays
    },
    getThisMonthDays(year, month){
      return new Date(year, month, 0).getDate()
    },
    zero(i){
      return i >= 10 ? i : '0' + i
    },
    nextMonth(){
      let month = this.month == 12 ? 1 : this.month + 1
      let year = this.month == 12 ? this.year + 1 : this.year
      this.display(year, month)
    },
    lastMonth(){
      let month = this.month == 1 ? 12 : this.month - 1
      let year = this.month == 1 ? this.year - 1 : this.year
      this.display(year, month)
    },


  },
  computed: {
    activeTime(){
      return (time) => {
        var newTime = time.split('-')
        newTime = `${newTime[1]}-${newTime[2]}  周${this.weekText[new Date(Date.UTC(newTime[0], newTime[1] - 1, newTime[2].slice(1))).getDay()]}`
        return newTime
      }
    },
    judgeState(){
      return (time) => {
        let select
        let active
        if(new Date(time).getTime() < new Date().getTime()){
          active = '活动详情'
          select = 'f'
        }else{
          active = '报名参加'
          select = 't'
        }
        this.activeState = active
        return select
      }
    }
  },
  created:function(){
    this.today()
  }
}
</script>

<style>
  .page{
    width: 100%;
    font-size: 14px;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .bar{
    width: 100%;
    color: #71777C;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border: 1px solid #eee;
  }
  .bar-content{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 5px;
    cursor: pointer;
  }
  .city:hover{
    color: #1E80FF;
  }
  .cooperation:hover{
    color: #1E80FF;
  }
  .citys{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .citys > div{
    display: inline-block;
    margin-right: 28px;
  }
  .other{
    position: relative;
  }
  .other img{
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(120%, -50%);
    transition: all 500ms;
  }
  .others{
    position: absolute;
    z-index: 999;
    background-color: #fff;
    box-shadow: 3px 5px 3px #ddd;
  }
  .others-city{
    width: 80px;
    height: 30px;
    line-height: 30px;
    padding-left: 8px;
  }
  .others-city:hover{
    color: #1E80FF;
    background-color: #efefef;
  }
  .cooperation{
    position: relative;
  }
  .cooperation img{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-120%, -50%);
  }
  .city.select{
    color: #1E80FF;
  }
  .others-city.select{
    color: #1E80FF;
    background-color: #efefef;  
  }


  .content{
    width: 1000px;
    margin: 8px auto;
  }
  .content-header{
    display: flex;
  }
  .picture{
    width: 490px;
    height: 290px;
    margin: 0 5px;
    cursor: pointer;
  }
  .picture img{
    width: 490px;
    height: 290px;
  }
  


  .calendar{
    width: 490px;
    height: 290px;
    margin: 0 5px;
    background-color: #fff;
    border-radius: 2px;
  }
  .calendar-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 45px;
    height: 37px;
    cursor: default;
  }
  .calendar-title .title{
    min-width: 150px;
    font-weight: bold;
    color: #007FFF;
    text-align: center;
  }
  .ctrl{
    padding: 0 10px;
    color: #007FFF;
    border-radius: 5px;
    cursor: pointer;
  }
  .ctrl:hover{
    color: #333;
  }
  .item{
    line-height: 37px;
  }
  .calendar-week{
    font-size: 12px;
    height: 22px;
    line-height: 22px;
    display: flex;
    color: #fff;
    text-align: center;
    padding: 0 5px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    background-color: #007FFF;
    align-items: center;
  }
  .week-item{
    flex: 1;
  }
  .calendar-container{
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
  }
  .calendar-container .grid{
    height: 38px;
    font-size: 13px;
    position: relative;
    width: 14.2857142%;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    color: #72777B;
  }
  .calendar-container .grid.gray{
    opacity: 0.4;
  }


  .grid:hover .dayActive{
    display: block;
  }
  .grid:hover span{
    background-color: #007fff;
  }
  
  
  .calendar-container .grid .wrap.select{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    width: 18px;
    height: 18px;
    line-height: 18px;
    background-color: #007FFF;
    border-radius: 50%;
    color: #fff;
  }
  .grid .circle{
    width: 100%;
    height: 8px;
    position: absolute;
    bottom: 1px;
    text-align: center;
  }
  .circle span{
    display: inline-block;
    margin-right: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: #007FFF solid 1px;
    transform: translate(0%, -220%);
  }
  .circle span:last-child{
    margin-right: 0;
  }
  .circleHover{
    background-color: #007fff;
  }
  .dayActive{
    display: none;
    position: absolute;
    width: 168px;
    top: 110%;
    left: -80%;
    z-index: 1;
    margin-top: 2px;
    border: 1px solid #007fff;
    background-color: #fff;
    border-radius: 2px;
    padding: 10px;
  }
  .dayActive::before{
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-85%, -100%);
    width: 0;
    height: 0;
    display: block;
    border-style: solid;
    border-width: 0px 8px 8px 8px;
    border-color: #007FFF transparent #007FFF transparent;
  }
  .dayActive li{
    display: flex;
    align-items: center;
    height: 24px;
    line-height: 24px;
  }
  .dayActive li::before{
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #000;
  }
  .dayActive a{
    display: inline-block;
    width: 100%;
    margin-left: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #007FFF;
  }
  .weekend{
    color: #007FFF !important;
  }

  .activeList{
    margin: 14px auto;
    display: flex;
    flex-wrap: wrap;
  }
  .active{
    width: 230px;
    height: 270px;
    position: relative;
    top: 0;
    background-color: #fff;
    margin: 14px 10px;
    border-radius: 2px;
    box-shadow: 0 0 5px #fff,
    5px 0 1px #eee,
    5px 5px 1px #eee;
    transition: all 500ms;
    cursor: pointer;
  }
  .active:hover{
    top: -5px;
    box-shadow: 0 0 5px #c8c8c8,
    5px 0 10px #ddd,
    5px 5px 10px #ddd;
  }
  .active > a > img{
    width: 230px;
    height: 140px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
  .active-content{
    padding: 12px;
  }
  .active-content img{
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-20%, -50%);
  }
  .active-content .title{
    height: 52px;
    font-size: 14px;
    white-space: wrap;
    font-weight: bold;
  }
  .time{
    font-size: 12px;
    height: 27px;
    line-height: 27px;
    position: relative;
    padding-left: 22px;
  }
  .place{
    font-size: 12px;
    height: 27px;
    line-height: 27px;
    position: relative;
    padding-left: 22px;
  }
  .state{
    font-size: 12px;
    color: #fff;
    position: absolute;
    bottom: 12px;
    right: 12px;
    height: 26px;
    line-height: 26px;
    width: 100px;
    text-align: center;
    border-radius: 13px;
  }
  .state.t{
    background-color: #4D91FD;
  }
  .state.f{
    background-color: #aaa;
  }

  .content-footer{
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #728090;
  }
  .brand a{
    color: #728090;
  }
</style>