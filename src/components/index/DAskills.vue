<script setup>
import {useI18n} from "vue-i18n";
const {t} = useI18n(),
      skills = reactive([
        {
          name:'develoer',
          icon:'icon-code',
          list:[
            'Vue3','Vite / Vue CLI','Pinia / Vuex','Composition API','Vue Router','RESTful API','Axios / Ajax','JavaScript','Git Sourcetree'
          ]
        },
        {
          name:'interactive',
          icon:'icon-user',
          list:[
            'Keyframes & Animation','Transition & Transform','Responsive Web Design','BEM : SCSS & SASS','jQuery'
          ]
        },
        {
          name:'seo',
          icon:'icon-search',
          list:[
            'HTML5 Tag','Google Search Console','Google AdWords'
          ]
        },
        {
          name:'uiux',
          icon:'icon-window',
          list:[
            'Figma','Sketch','Adobe XD','Photoshop'
          ]
        }
      ]);
</script>

<template>
<section class="DAbox_wrap">
  <h2 class="DAbox__title" :data-word="t('DAskillTitle')">
    <span class="DAbox__title_text">{{t('DAskillTitle')}}</span>
  </h2>
  <ul class="DAskills__list">
    <li
      class="DAskills___item"
      v-for="(item,idx) in skills" :key="item.name"
    >
      <i class="DAskills___item_icon">
        <SvgIcon :name="item.icon" className="svg-DAskills-shadow" color="#F28587"/>
      </i>
      <h3 class="DAskills___item_title">{{t(`DAskillList${idx+1}`)}}</h3>
      <p 
        class="DAskills___item_txt"
        v-for="(item,index) in item.list" :key="index"
      >{{item}}</p>
    </li>
  </ul>
</section>
</template>

<style lang="scss">
.DAskills{
  > .DAbox_wrap{padding:15px 0}
  .DAbox__title{
    width:90%;
    margin-right:auto;
    margin-left:auto;
  }
  &__list{@extend %ulReset;}
  &___item{
    text-align:center;
    padding:15px 0;
    &_icon{
      width:80px;
      height:80px;
      display:block;
      margin:0 auto;
    }
    &_title{
      color:$Pcolor;
      font-size:36px;
      text-shadow:1px 1px 0 $dPcolor, 2px 2px 0 $dPcolor;
      transform:skew(-6deg);
    }
    &_txt{
      color:$dGrayColor;
      font-size:18px;
      line-height:2;
      margin:0.5em 0;
    }
    &_note{
      color:$Pcolor;
      font-size: 14px;
      opacity: .8;
    }
  }
}
@media screen and (min-width: 640px) {
  .DAskills{
    &__list{
      display: flex;
      flex-wrap: wrap;
    }
    &___item{flex-basis: 50%}
  }
}
@media screen and (min-width: 1024px) {
  .DAskills___item{flex-basis: 25%}
}
@media screen and (min-width: 1280px){
  .DAskills___item{
    display:flex;
    flex-direction:column;
    align-items:center;
    &_txt{
      font-weight:300;
      border-radius:5px;
      padding:0 12px;
      transition:background-color .4s;
      &:hover{background-color:rgba(#fff,.75);}
    }
  }
}
</style>