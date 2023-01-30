<script setup>
import { useGetWindowScrollVal } from '@/composables';
const { windowScrollTop } = useGetWindowScrollVal();
</script>

<template>
<header :class="['brandHead',{dark:windowScrollTop > 60}]">
  <div class="brandHead_wrap">
    <h1 class="brandHead__logo">
      <RouterLink to="/" class="brandHead__logo_link">
        <i class="brandHead__logo__icon">
          <SvgIcon name="icon-dota" color="#fff"/>
        </i>
        <span class="brandHead__logo__txt">
          <slot>Dot A</slot>
        </span>
      </RouterLink>
    </h1>
    <div class="brandHead__box">
      <div class="brandHead__box_user">
        <input type="text" placeholder="会员账号" class="brandHead__box__input">
      </div>
      <div class="brandHead__box_password">
        <input type="password" placeholder="密码" class="brandHead__box__input">
      </div>
      <button class="brandHead__box_btn brandHead__box_btn-login">会员登入</button>
      <button class="brandHead__box_btn brandHead__box_btn-signup">免费注册</button>
    </div>
  </div>
</header>
</template>

<style lang="scss">
.brandHead{
  width: 100%;
  min-width:280px;
  height: 50px;
  background-color:rgba(#000,.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index:5;
  transition:background-color .4s;
  &.dark{background-color:rgba(#000,.85);}
  &_wrap{
    height: 100%;
    display: flex;
    align-items:center;
  }
  &__logo{
    margin:0 0 0 8px;
    &_link{
      display: flex;
      align-items:center;
    }
    &__icon{
      width:30px;
      height:27.5px;
      margin-right:6px;
    }
    &__txt{
      color:#fff;
      font-weight:300;
      padding-top:2px;
      transform:skew(-6deg);
    }
  }
  &__box{display: none;}
}
// ===== 桌機版型區 =====
@media screen and (min-width: 1024px) {
  .brandHead{
    min-width: 1024px;
    height: 60px;
    &_wrap{
      max-width:1100px;
      min-width: 1024px;
      justify-content:space-between;
      margin:0 auto;
    }
    &__logo__icon{
      width: 36px;
      height: 33px;
      margin-right: 7px;
    }
    &__box{
      color:#fff;
      display: flex;
      &_password, &_user{
        position: relative;
        &:before{
          width: 14px;
          height: 18px;
          position:absolute;
          top:9px;
          left:11px;
        }
      }
      &_password:before{content:url("@/assets/img/brand/brandPasswordIcon.png");}
      &_user:before{content:url("@/assets/img/brand/brandUserIcon.png");}
      &__input, &_btn{
        line-height: 18px;
        border-radius: 20px;
      }
      &__input{
        @include input_placeholder_text_style {color:rgba(#fff,.7)}
        // &::placeholder{color:rgba(#fff,.7)}
        color:rgba(#fff,.7);
        font-family:"Microsoft YaHei", Helvetica, Arial, "Microsoft JhengHei", "PingFangTC", sans-serif;
        width: 160px;
        background-color:transparent;
        border: 2px solid rgba(#fff,.7);
        box-shadow: 0 0 8px 2px rgb(#000,.3) inset;
        outline: none;
        padding: 7px 9px 7px 28px;
        margin-right: 12px;
        &:focus{
          @include input_placeholder_text_style{color:#fff}
          color:#fff;
          border:2px solid #fff;
          background-color:rgba(#000,.35);
        }
        &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus {
          -webkit-text-fill-color:rgba(#fff,0.7);
          -webkit-box-shadow:0 0 8px 2px rgb(#000,.3) inset;
          transition:background-color 6000s 6000s;
        }
      }
      &_btn{
        color:#fff;
        min-width: 100px;
        border: none;
        padding: 9px;
        &-login{margin-right: 12px}
      }
    }
  }
}
</style>