<template>
  <div class="date-format">
    <div class="header"  @click="toggle">
        <h3>日期格式化</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
    1.<a href="http://momentjs.cn/">momentjs.cn</a>
    日期格式化
    moment().format('MMMM Do YYYY, h:mm:ss a'); // 八月 20日 2020, 4:40:14 下午
    moment().format('dddd');                    // 星期四
    moment().format("MMM Do YY");               // 8月 20日 20
    moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
    moment().format();                          // 2020-08-20T16:40:14+08:00

    相对时间
    moment("20111031", "YYYYMMDD").fromNow(); // 9 年前
    moment("20120620", "YYYYMMDD").fromNow(); // 8 年前
    moment().startOf('day').fromNow();        // 17 小时前
    moment().endOf('day').fromNow();          // 7 小时内
    moment().startOf('hour').fromNow();       // 40 分钟前

    日历时间
    moment().subtract(10, 'days').calendar(); // 2020/08/10
    moment().subtract(6, 'days').calendar();  // 上星期五16:40
    moment().subtract(3, 'days').calendar();  // 上星期一16:40
    moment().subtract(1, 'days').calendar();  // 昨天16:40
    moment().calendar();                      // 今天16:40
    moment().add(1, 'days').calendar();       // 明天16:40
    moment().add(3, 'days').calendar();       // 下星期日16:40
    moment().add(10, 'days').calendar();      // 2020/08/30

    多语言支持
    moment.locale();         // zh-cn
    moment().format('LT');   // 16:40
    moment().format('LTS');  // 16:40:14
    moment().format('L');    // 2020/08/20
    moment().format('l');    // 2020/8/20
    moment().format('LL');   // 2020年8月20日
    moment().format('ll');   // 2020年8月20日
    moment().format('LLL');  // 2020年8月20日下午4点40分
    moment().format('lll');  // 2020年8月20日 16:40
    moment().format('LLLL'); // 2020年8月20日星期四下午4点40分
    moment().format('llll'); // 2020年8月20日星期四 16:40
          </pre>
  </div>
</template>

<script>
export default {
  name: 'DateFormat',
  data(){
    return{
      isShow:false,
    }
  },
  methods:{
    toggle(){
      this.isShow=!this.isShow;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
@import '../../assets/css/variable';

.date-format{
  .header{
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    padding:0 20px;
    background-color: $background-color2;
    cursor: pointer;
}


  pre{
    margin: 10px;
  }
}
</style>
