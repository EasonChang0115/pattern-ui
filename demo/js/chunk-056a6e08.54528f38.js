(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-056a6e08'], { '2a59'(e, t, c) { 'use strict'; c('3288'); }, 3288(e, t, c) {}, '45d6'(e, t, c) { 'use strict'; c.r(t); var n = c('7a23'); const a = { class: 'loading-demo-page mb-5' }; const l = Object(n.j)('h2', { class: 'page-title' }, 'Loading 加載中', -1); const s = Object(n.j)('p', { class: 'description' }, '加載數據顯示動畫。', -1); function i(e, t, c, i, o, b) { const j = Object(n.N)('Area'); const d = Object(n.N)('Page'); return Object(n.E)(), Object(n.i)('div', a, [l, s, Object(n.m)(j), Object(n.m)(d)]); } const o = Object(n.j)('h3', { class: 'section-title' }, '區域加載', -1); const b = { class: 'section-block' }; const j = { class: 'section-insect' }; const d = { class: 'table table-striped table-hover' }; const O = Object(n.j)('thead', null, [Object(n.j)('tr', null, [Object(n.j)('th', null, '日期'), Object(n.j)('th', null, '姓名'), Object(n.j)('th', null, '地址')])], -1); const r = Object(n.j)('div', { class: 'section-information' }, ' 調用Loading的方法：指令和服務。對於自定義指令v-loading，只需要綁定Boolean即可。交替狀態下，Loading遮罩會插入到綁定元素的子body例程中，通過添加修飾符，可以使遮罩插入至DOM中的身體上。 ', -1); function u(e, t, c, a, l, s) { const i = Object(n.O)('loading'); return Object(n.E)(), Object(n.i)(n.a, null, [o, Object(n.j)('div', b, [Object(n.j)('div', j, [Object(n.bb)(Object(n.j)('table', d, [O, Object(n.j)('tbody', null, [(Object(n.E)(!0), Object(n.i)(n.a, null, Object(n.L)(l.tableData, (e, t) => (Object(n.E)(), Object(n.i)('tr', { key: t }, [(Object(n.E)(!0), Object(n.i)(n.a, null, Object(n.L)(Object.keys(e), t => (Object(n.E)(), Object(n.i)('td', { key: t.date }, Object(n.R)(e[t]), 1))), 128))]))), 128))])], 512), [[i, l.loading]])]), r])], 64); } var p = { data() { return { tableData: [{ date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }, { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }, { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }], loading: !0 }; } }; var f = (c('d209'), c('6b0d')); var g = c.n(f); const m = g()(p, [['render', u]]); var v = m; const h = e => (Object(n.H)('data-v-8657e50e'), e = e(), Object(n.F)(), e); const k = h(() => Object(n.j)('h3', { class: 'section-title' }, '整頁加載', -1)); const L = { class: 'section-block' }; const y = { class: 'section-insect' }; const E = Object(n.l)(' 指令方式 '); const w = Object(n.l)('服務方式'); const F = h(() => Object(n.j)('div', { class: 'section-information' }, ' 頁面數據加載時顯示。 ', -1)); function C(e, t, c, a, l, s) { const i = Object(n.N)('pg-button'); const o = Object(n.O)('loading'); return Object(n.E)(), Object(n.i)(n.a, null, [k, Object(n.j)('div', L, [Object(n.j)('div', y, [Object(n.bb)(Object(n.m)(i, { type: 'primary', size: 'small', onClick: s.openFullScreen1 }, { default: Object(n.ab)(() => [E]), _: 1 }, 8, ['onClick']), [[o, l.fullscreenLoading, void 0, { fullscreen: !0, lock: !0 }]]), Object(n.m)(i, { type: 'primary', size: 'small', onClick: s.openFullScreen2 }, { default: Object(n.ab)(() => [w]), _: 1 }, 8, ['onClick'])]), F])], 64); } var S = { data() { return { fullscreenLoading: !1 }; }, methods: { openFullScreen1() { this.fullscreenLoading = !0, setTimeout(() => { this.fullscreenLoading = !1; }, 2e3); }, openFullScreen2() { const e = this.$loading({ lock: !0, text: 'Loading' }); setTimeout(() => { e.close(); }, 2e3); } } }; c('2a59'), c('55e2'); const _ = g()(S, [['render', C], ['__scopeId', 'data-v-8657e50e']]); var D = _; var N = { components: { Area: v, Page: D } }; const z = g()(N, [['render', i]]); t.default = z; }, 5316(e, t, c) {}, '55e2'(e, t, c) { 'use strict'; c('d55c'); }, d209(e, t, c) { 'use strict'; c('5316'); }, d55c(e, t, c) {} }]);
// # sourceMappingURL=chunk-056a6e08.54528f38.js.map