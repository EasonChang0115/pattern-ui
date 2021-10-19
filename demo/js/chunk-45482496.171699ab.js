(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-45482496'], { '3f0e'(e, n, t) { 'use strict'; t.r(n); var a = t('7a23'); const l = e => (Object(a.H)('data-v-1a68b51c'), e = e(), Object(a.F)(), e); const c = { class: 'message-demo-page' }; const o = l(() => Object(a.j)('h2', { class: 'page-title' }, 'Table 表格', -1)); const s = l(() => Object(a.j)('h3', { class: 'section-title' }, '基本用法', -1)); const b = { class: 'section-block table' }; const p = { class: 'section-insect' }; const r = l(() => Object(a.j)('h3', { class: 'section-title' }, '代码', -1)); const i = l(() => Object(a.j)('h3', { class: 'section-title' }, '加载状态', -1)); const m = { class: 'section-block' }; const u = Object(a.l)('切换加载状态'); const g = l(() => Object(a.j)('br', null, null, -1)); const d = { class: 'section-insect' }; const j = l(() => Object(a.j)('h3', { class: 'section-title' }, '代码', -1)); const O = l(() => Object(a.j)('h3', { class: 'section-title' }, '多选操作', -1)); const h = { class: 'section-block' }; const f = { class: 'section-insect' }; const x = l(() => Object(a.j)('h3', { class: 'section-title' }, '代码', -1)); function N(e, n, t, l, N, v) { const w = Object(a.N)('pg-table-column'); const C = Object(a.N)('pg-table'); const L = Object(a.N)('code-highlight'); const _ = Object(a.N)('pg-button'); const k = Object(a.N)('attributes-viewer'); const y = Object(a.N)('methods-viewer'); return Object(a.E)(), Object(a.i)('div', c, [o, s, Object(a.j)('div', b, [Object(a.j)('div', p, [Object(a.m)(C, { data: l.userList }, { default: Object(a.ab)(() => [Object(a.m)(w, { label: '姓名', prop: 'name', align: 'center' }), Object(a.m)(w, { label: '性别', prop: 'sex', align: 'center' }, { default: Object(a.ab)(e => [Object(a.l)(Object(a.R)(e.sex === 1 ? '男' : '女'), 1)]), _: 1 }), Object(a.m)(w, { label: '年龄', prop: 'age', align: 'center' }), Object(a.m)(w, { label: '手机号码', prop: 'phoneNumber', align: 'center' })]), _: 1 }, 8, ['data'])])]), r, Object(a.m)(L, { code: l.basicCode }, null, 8, ['code']), i, Object(a.j)('div', m, [Object(a.m)(_, { size: 'mini', onClick: n[0] || (n[0] = e => l.loading = !l.loading) }, { default: Object(a.ab)(() => [u]), _: 1 }), g, Object(a.j)('div', d, [Object(a.m)(C, { data: l.userList, loading: l.loading }, { default: Object(a.ab)(() => [Object(a.m)(w, { label: '姓名', prop: 'name', align: 'center' }), Object(a.m)(w, { label: '性别', prop: 'sex', align: 'center' }, { default: Object(a.ab)(e => [Object(a.l)(Object(a.R)(e.sex === 1 ? '男' : '女'), 1)]), _: 1 }), Object(a.m)(w, { label: '年龄', prop: 'age', align: 'center' }), Object(a.m)(w, { label: '手机号码', prop: 'phoneNumber', align: 'center' })]), _: 1 }, 8, ['data', 'loading'])])]), j, Object(a.m)(L, { code: l.loadingCode }, null, 8, ['code']), O, Object(a.j)('div', h, [Object(a.j)('div', f, [Object(a.m)(C, { data: l.userList, selection: '', onSelectChange: l.selectChange }, { default: Object(a.ab)(() => [Object(a.m)(w, { label: '姓名', prop: 'name' }), Object(a.m)(w, { label: '性别', prop: 'sex' }, { default: Object(a.ab)(e => [Object(a.l)(Object(a.R)(e.sex === 1 ? '男' : '女'), 1)]), _: 1 }), Object(a.m)(w, { label: '年龄', prop: 'age' }), Object(a.m)(w, { label: '手机号码', prop: 'phoneNumber' })]), _: 1 }, 8, ['data', 'onSelectChange'])])]), x, Object(a.m)(L, { code: l.selectionCode }, null, 8, ['code']), Object(a.m)(k, { title: '表格属性', attributes: l.tableAttributes }, null, 8, ['attributes']), Object(a.m)(k, { title: '表列属性', attributes: l.columnAttributes }, null, 8, ['attributes']), Object(a.m)(y, { title: '表列 slot', methods: l.methods }, null, 8, ['methods'])]); } var v = '\n<template>\n  <pg-table :data="userList">\n    <pg-table-column label="姓名" prop="name" align="center"></pg-table-column>\n    <pg-table-column label="性别" prop="sex" align="center">\n      <template #default="row" align="center">\n        {{ row.sex === 1 ? \'男\' : \'女\' }}\n      </template>\n    </pg-table-column>\n    <pg-table-column label="年龄" prop="age" align="center"></pg-table-column>\n    <pg-table-column label="手机号码" prop="phoneNumber" align="center"></pg-table-column>\n  </pg-table>\n</template>\n\n<script>\nimport { reactive } from \'vue\';\n\nexport default {\n  setup() {\n    const userList = reactive([\n      {\n        name: \'张三\',\n        sex: 1,\n        age: 18,\n        phoneNumber: \'13712345678\'\n      },\n      {\n        name: \'李四\',\n        sex: 0,\n        age: 20,\n        phoneNumber: \'13712345678\'\n      },\n      {\n        name: \'王五\',\n        sex: 1,\n        age: 16,\n        phoneNumber: \'13712345678\'\n      },\n      {\n        name: \'赵六\',\n        sex: 0,\n        age: 24,\n        phoneNumber: \'13712345678\'\n      }\n    ]);\n\n    return {\n      userList\n    };\n  }\n};\n<\/script>\n'; var w = '\n<template>\n  <pg-button size="mini" @click="loading = !loading">切换加载状态</pg-button>\n  <pg-table :data="userList" :loading="loading">\n    <pg-table-column label="姓名" prop="name" align="center"></pg-table-column>\n    <pg-table-column label="性别" prop="sex" align="center">\n      <template #default="row" align="center">\n        {{ row.sex === 1 ? \'男\' : \'女\' }}\n      </template>\n    </pg-table-column>\n    <pg-table-column label="年龄" prop="age" align="center"></pg-table-column>\n    <pg-table-column label="手机号码" prop="phoneNumber" align="center"></pg-table-column>\n  </pg-table>\n</template>\n\n<script>\nimport { ref, reactive } from \'vue\';\n\nexport default {\n  setup() {\n    const userList = reactive([\n      {\n        name: \'张三\',\n        sex: 1,\n        age: 18,\n        phoneNumber: \'13712345678\'\n      },\n      {\n        name: \'李四\',\n        sex: 0,\n        age: 20,\n        phoneNumber: \'13712345678\'\n      },\n      {\n        name: \'王五\',\n        sex: 1,\n        age: 16,\n        phoneNumber: \'13712345678\'\n      },\n      {\n        name: \'赵六\',\n        sex: 0,\n        age: 24,\n        phoneNumber: \'13712345678\'\n      }\n    ]);\n\n    const loading = ref(false);\n\n    return {\n      userList,\n      loading\n    };\n  }\n};\n<\/script>\n'; var C = "\n<template>\n  <pg-table :data=\"userList\" selection @select-change=\"selectChange\">\n    <pg-table-column label=\"姓名\" prop=\"name\"></pg-table-column>\n    <pg-table-column label=\"性别\" prop=\"sex\">\n      <template #default=\"row\">\n        {{ row.sex === 1 ? '男' : '女' }}\n      </template>\n    </pg-table-column>\n    <pg-table-column label=\"年龄\" prop=\"age\"></pg-table-column>\n    <pg-table-column label=\"手机号码\" prop=\"phoneNumber\"></pg-table-column>\n  </pg-table>\n</template>\n\n<script>\nimport { ref, reactive } from 'vue';\n\nexport default {\n  setup() {\n    const userList = reactive([\n      {\n        name: '张三',\n        sex: 1,\n        age: 18,\n        phoneNumber: '13712345678'\n      },\n      {\n        name: '李四',\n        sex: 0,\n        age: 20,\n        phoneNumber: '13712345678'\n      },\n      {\n        name: '王五',\n        sex: 1,\n        age: 16,\n        phoneNumber: '13712345678'\n      },\n      {\n        name: '赵六',\n        sex: 0,\n        age: 24,\n        phoneNumber: '13712345678'\n      }\n    ]);\n\n    function selectChange(selected) {\n      const names = selected.map(row => row.name).join(',');\n      PgMessage.success(names ? `选中了: ${names}` : '没有选中项了');\n    }\n\n    return {\n      userList,\n      selectChange\n    };\n  }\n};\n<\/script>\n"; var L = t('d5b3'); var _ = { setup() { const e = Object(a.I)([{ name: '张三', sex: 1, age: 18, phoneNumber: '13712345678' }, { name: '李四', sex: 0, age: 20, phoneNumber: '13712345678' }, { name: '王五', sex: 1, age: 16, phoneNumber: '13712345678' }, { name: '赵六', sex: 0, age: 24, phoneNumber: '13712345678' }]); const n = Object(a.J)(!1); function t(e) { const n = e.map(e => e.name).join(','); L.a.success(n ? `选中了: ${n}` : '没有选中项了'); } const l = [{ param: 'data', desc: '表格数据', type: 'array', options: '-', defalt: '[]' }, { param: 'loading', desc: '加载状态', type: 'boolean', options: 'true / false', defalt: 'false' }, { param: 'selection', desc: '是否开启多选操作', type: 'boolean', options: 'true / false', defalt: 'false' }]; const c = [{ param: 'label', desc: '列标题', type: 'string', options: '-', defalt: '' }, { param: 'prop', desc: '对应列内容的字段名', type: 'string', options: '-', defalt: '' }, { param: 'align', desc: '列文本对齐方式', type: 'string', options: 'left / right / center', defalt: 'left' }]; const o = [{ name: 'default', desc: '自定义列的内容', param: 'row (每一行的数据)' }]; return { userList: e, loading: n, basicCode: v, loadingCode: w, selectionCode: C, tableAttributes: l, columnAttributes: c, methods: o, selectChange: t }; } }; var k = (t('f691'), t('6b0d')); var y = t.n(k); const A = y()(_, [['render', N], ['__scopeId', 'data-v-1a68b51c']]); n.default = A; }, a4f0(e, n, t) {}, f691(e, n, t) { 'use strict'; t('a4f0'); } }]);
// # sourceMappingURL=chunk-45482496.171699ab.js.map
