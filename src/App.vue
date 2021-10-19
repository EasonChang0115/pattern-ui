<template>
  <div id="container" class="container-lg">
    <header class="header">
      <div class="header_logo">
        <img src="/logo.png" alt="">
      </div>
      <h2 class="header_title">設計頁 UI Guideline</h2>
    </header>
    <div class="row content">
      <ul class="col-3 nav">
        <pg-scrollbar>
          <li class="nav_item" v-for="com in UIcomponentList" :key="com.name">
            <router-link :to="com.path">{{ com.name }}</router-link>
          </li>
        </pg-scrollbar>
      </ul>
      <div class="col-9 page">
        <pg-scrollbar>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="Component"/>
              </keep-alive>
            </transition>
          </router-view>
        </pg-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const UIcomponentList = reactive(router.options.routes);
    return {
      UIcomponentList
    };
  }
};
</script>

<style lang="scss" >
#container {
  height: 100vh;
  .content {
    height: calc(100% - 120px);
  }
  .page, .nav {
    height: 100%;
  }
}
.header {
  position: sticky;
  top: 0;
  background-color: $white;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0 16px 0;
  margin-bottom: 24px;
  border-bottom: 1px solid $border-color;
  &_logo {
    margin-right: 16px;
    width: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &_title {
    margin: 0;
    font-size: 1.4rem;
    font-weight: normal;
  }
}
.nav {
  display: flex;
  flex-direction: column;
  &_item {
    padding: 0 8px;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 40px;
    @include text-truncate();
    a {
      text-decoration: none;
      color: $font-color;
      &.router-link-active {
        color: $primary;
      }
    }
  }
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-weight: normal;
  line-height: 20px;
}
h2.page-title {
  font-size: 28px;
  margin: 40px 0 20px 0;
}

p.description {
  font-size: 1rem;
  color: #5e6d82;
  line-height: 1.5em;
}

h3.section-title {
  margin: 40px 0 20px 0;
}

.section-block {
  background-color: rgba(grey, 0.05);
  border: 1px solid #ebebeb;
  padding: 18px;
}

.section-information {
  padding: 16px 20px;
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
  letter-spacing: 2px;
}

.section-insect {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  &:after, &:before {
    display: table;
    content: "";
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
