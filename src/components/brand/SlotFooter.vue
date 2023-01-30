<script setup>
</script>

<template>
<footer class="brandFoot">
  <ul class="brandFoot_list">
    <li class="brandFoot__item">
      <a href="javascript:;" class="brandFoot__item_link">關於我們</a>
    </li>
    <li class="brandFoot__item">
      <a href="javascript:;" class="brandFoot__item_link">用戶協議</a>
    </li>
    <li class="brandFoot__item">
      <a href="javascript:;" class="brandFoot__item_link">免責聲明</a>
    </li>
    <li class="brandFoot__item">
      <a href="javascript:;" class="brandFoot__item_link">用戶隱私</a>
    </li>
    <li class="brandFoot__item">
      <a href="javascript:;" class="brandFoot__item_link">聯繫我們</a>
    </li>
    <li class="brandFoot__item">
      <a href="javascript:;" class="brandFoot__item_link">存款幫助</a>
    </li>
    <li class="brandFoot__item">
      <a href="javascript:;" class="brandFoot__item_link">取款幫助</a>
    </li>
    <li class="brandFoot__item">
      <a href="javascript:;" class="brandFoot__item_link">常見問題</a>
    </li>
  </ul>
  <p class="brandFoot_copy"><slot>Copyright © Dot A Reserved</slot></p>
</footer>
</template>

<style lang="scss">
.brandFoot{
  &_list{
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    list-style: none;
    padding:20px 0;
    margin:0 auto;
  }
  &__item{
    margin:5px 0;
    &_link{
      border-radius:4px;
      padding: 5px;
      transition:color .4s, background-color .4s;
    }
  }
  &_copy{
    font-size: 12px;
    line-height:18px;
    text-align: center;
    padding-bottom:30px;
    margin:0;
  }
}
// ===== 桌機版型區 =====
@media screen and (min-width: 1024px) {
  .brandFoot{
    &_list{
      max-width:1100px;
      justify-content:center;
    }
    &__item + .brandFoot__item{margin-left:10px;}
  }
}
</style>