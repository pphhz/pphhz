<template>
  <div class="send-request">
    <div class="header"  @click="toggle">
        <h3>发请求、查询</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
 注意：addFile要用postman试接口，文档不行。domain、tenantId都传，body选file，key为file传文件


   1.不发请求的删除：(等后面提交或保存）
    handleDelete(item, record) {
        let that = this
        this.$confirm({
          title: '确认？',
          content: '确认要删除吗？',
          onOk () {
            let id = record.invoiceNumber
            that.table.loadData.splice(that.table.loadData.findIndex(o => o.invoiceNumber==record.invoiceNumber),1)
            that.$message.success('删除成功')
          },
          onCancel () {
          }
        })
      },

    发请求的删除：
    handleMenuClick (e) {
      if (this.selectedRows.length <= 0) {
        this.$message.warning("请选择要删除数据")
        return
      }
          this.$confirm({
            title: '确认删除',
            content: '是否删除选中数据?',
            onOk: () => {
              this.localLoading = true
              removeTYccOrgs(Object.assign({ ids: this.selectedRowKeys.join() }, this.queryParam))
                .then(res => {
                  this.success({
                     message: '提示',
                     description: '删除成功'
                  })
                  this.selectedRowKeys = []
                  this.$refs.table.refresh(true)
                }).catch((e) => {
                  this.error({
                    message: '错误',
                    description: e.response.data.msg
                  })
                }).finally(() => {
                  this.localLoading = false
                })
            }
          })
    },


    2.调用接口（axios的接口）
    getInvoicesInfo(billId){
        getInvoicesList({billId}).then(res => {
          if (_.get(res, 'success')) {
           //post和get都是get
            let data = _.get(res, 'data.records')
          // let xxx= { ...data }.xxx//还包了一层的要 { ...data }
            }
            _.set(this.table, 'loadData', data)
        }).finally(()=>{
          this.pageSaveLoading = false
        })
      },

    3.暴露接口传参数可以
    export function getOrgCodeList (parameter) {
      return axios({
        url: api.getOrgCodeList,
        method: 'get',
        data: parameter
      })
    }

     let orgParam = {
        module: 'openRecord',
        type: '2'
    }
     getOrgCodeList(orgParam)
    //而且 getTYccInvoicesList({billId}).then(res => 这样写就相当?billId=传入的数字


    用data或者这样
    export function getInfo (parameter) {
      return axios({
        url: api.getInfo+'?id='+parameter,
        method: 'get',
        params: parameter
      })
    }
    getInfo (this.id)



    4.提交有上传文件的表单方法
    handleSave() {
      let that = this
      const {
        form: { validateFields }
      } = this
      validateFields(async (errors, values) => {
        if (!errors) {
          const formData = {}
          let back = await this.handleUpload(this.upload.fileList)
          if(back == 'out') {
            return
          }
          Object.assign(formData, this.model, values)
          if (_.get(back,'data.id')) {
            Object.assign(formData, { annexIds: back.data.id })
            Object.assign(formData, { annexNames: this.upload.fileList[0].name })
          }
          delete formData.uploadfile
          this.$emit('ok', formData)
          this.handleCancel()
        }
      })
    }
    Vue中this.$router.push（参数） 实现页面跳转
    // 字符串
    this.$router.push('/home/first')
    // 对象
    this.$router.push({ path: '/home/first' })
    // 命名的路由
    this.$router.push({ name: 'home', params: { userId: wise }})


    5.
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        // 查询条件参数
	    let queryParam = {}
	    const { form: { validateFields }, selectedNode } = this
	    if (validateFields) {
          validateFields((errors, values) => {
	      if (!errors) {
			   queryParam = values
			   queryParam.kdCode = selectedNode.attributes ? selectedNode.attributes.id : ''
              if (this.treeId) {
                queryParam.code = this.treeId
              }
	      }
	    })
        }
     return getTodoList(Object.assign({}, parameter, queryParam))
          .then(res => {
            return {
              pageSize: parameter.pageSize,
              pageNo: parameter.pageNo,
              totalCount: res.data.total,
              totalPage: parseInt((res.data.total + parameter.pageSize - 1) / parameter.pageSize),
              data: res.data.rows
            }
          })
      },



      没表单，就simple-table的情况
      loadData: parameter => {
        let queryParam = {
          instId: this.instId ? this.instId : '-',
          sortMapJson: '{}'
        }
        return getApprovalHistoryList(Object.assign({}, parameter, queryParam)).then(res => {
          return {
            data: res.data
          }
        })
      }

        export function getApprovalHistoryList (parameter) {
          return axios({
            url: api.history + parameter.instId + '/hisNodeInst',
            method: 'get',
            params: parameter
          })
        }

          </pre>
  </div>
</template>

<script>
export default {
  name: 'SendRequest',
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

.send-request{
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
