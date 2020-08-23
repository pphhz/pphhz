<template>
  <div class="git">
    <div class="header"  @click="toggle">
        <h3>Git命令</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
Git常用命令：

git status 查看当前分支代码情况

git stash 暂存本地分支改动的代码，一般用于需要 pull 远端代码或者需要 merge 本地分支等操作前

git stash pop 把上一次本地 stash 的代码取回来，一般用于pull 或者 merge 操作后，结合git stash使用

git pull 更新代码，以及分支信息

git add file_name 添加已经修改的文件到暂存区

git commit -m "update" 提交到本地仓库

git push 提交本地代码到远程仓库

git checkout 分支名A 切换到分支A

git merge 分支名A 合并分支A的代码到当前分支，默认是Fast forward，一般采用禁用fast forward方式合并，即使用

git merge --no-ff -m "merge with no-ff" dev 合并dev代码到当前分支，禁用Fast forward方式合并

git rebase master 《branch>   将master rebase到branch，相当于： git co 《branch> && git rebase master && git co master && git merge 《branch>

如果遇到冲突conflict,就解决冲突，继续走add，commit操作

git tag -a v1.0.1 -m "version v1.0.1" 新建标签 v1.0.1

git push origin v1.0.1 推送标签到远程仓库

git branch -r 查看远程分支

git branch -a 查看所有分支

git branch -v 查看各个分支最后的提交信息

git branch --merged 查看已经被合并到当前分支的分支

git branch --no-merged 查看尚未被合并到当前分支的分支

git checkout commit_id 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支自动删除

git checkout commit_id -b 分支名 把某次历史提交记录checkout出来，创建成新的分支

git fetch origin master 取回origin主机的master分支

git merge origin/master 或者 git rebase origin/master 在当前分支上，合并origin/master

git pull origin next:master 取回origin主机的next分支，与本地的master分支合并

git pull origin next 远程分支是与当前分支合并 等同于先fetch git fetch origin 再merge git merge origin/next
          </pre>
  </div>
</template>

<script>
export default {
  name: 'Git',
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

.git{
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
