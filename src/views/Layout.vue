<template>
  <div class="pattern_ui_layout mb-5">
    <h1>斷點(BreakPoints)</h1>
    <p>斷點是 RWD 最直觀的觸發時機，用在控制排版時，在不同設備或是不同可視區域大小進行響應式變化。</p>
    <br />

    <h2>核心</h2>
    <hr />
    <ul>
      <ol>
        斷點是響應式開發的基礎。
      </ol>
      <ol>
        使用 media queries 的方式建構整個響應式網站，通常會使用 min-width 來區別。
      </ol>
      <ol>
        通常開發響應式網站會以行動裝置為最優先。
      </ol>
    </ul>
    <br />
    <br />

    <h2>網格選項</h2>
    <hr />
    <p>同 Bootstrap 預設六個斷點，主要用於 RWD 建立響應是開發。</p>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Break Point</th>
          <th>Class infix</th>
          <th>Dimensions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="option in gridOptions" :key="option.breakPoint">
          <td>{{ option.breakPoint }}</td>
          <td>{{ option.classInfix }}</td>
          <td>{{ option.dimensions }}</td>
        </tr>
      </tbody>
    </table>

    <br />
    <h2>Mixin</h2>
    <hr />
    <p>在 sass 中已經寫好對應的 mixin 來針對斷點或網格系統，應用在我們的排版當中</p>
    <h3>最小寬度</h3>
    <pre>
    <code>
      // Source mixins

      // No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
      @include media-breakpoint-up(sm) { ... }
      @include media-breakpoint-up(md) { ... }
      @include media-breakpoint-up(lg) { ... }
      @include media-breakpoint-up(xl) { ... }
      @include media-breakpoint-up(xxl) { ... }

      // Usage
      // Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
      .custom-class {
        display: none;
      }
      @include media-breakpoint-up(sm) {
        .custom-class {
          display: block;
        }
      }
    </code>
    </pre>
    <h3>最大寬度</h3>
    <pre>
    <code>
      // No media query necessary for xs breakpoint as it's effectively `@media (max-width: 0) { ... }`
      @include media-breakpoint-down(sm) { ... }
      @include media-breakpoint-down(md) { ... }
      @include media-breakpoint-down(lg) { ... }
      @include media-breakpoint-down(xl) { ... }
      @include media-breakpoint-down(xxl) { ... }

      // Example: Style from medium breakpoint and down
      @include media-breakpoint-down(md) {
        .custom-class {
          display: block;
        }
      }
    </code>
    </pre>

    <h3>其他詳盡請參考 <a href="https://getbootstrap.com/docs/5.0/layout/breakpoints/" target="_blank">bootstrap 5 的文檔 </a></h3>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const gridOptions = ref([
      {
        breakPoint: 'X-Small',
        classInfix: 'None',
        dimensions: '< 576px'
      },
      {
        breakPoint: 'Small',
        classInfix: 'sm',
        dimensions: '≥ 576px'
      },
      {
        breakPoint: 'Medium',
        classInfix: 'md',
        dimensions: '≥ 768px'
      },
      {
        breakPoint: 'Large',
        classInfix: 'lg',
        dimensions: '≥ 992px'
      },
      {
        breakPoint: 'Extra large',
        classInfix: 'xl',
        dimensions: '≥ 1200px'
      },
      {
        breakPoint: 'Extra extra large',
        classInfix: 'xxl',
        dimensions: '≥ 1400px'
      }
    ]);
    return {
      gridOptions
    };
  }
};
</script>
