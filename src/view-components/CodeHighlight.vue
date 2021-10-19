<template>
  <pre :class="[`language-${language}`]"><code ref="codeRef" :class="[`language-${language}`]"></code></pre>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
export default {
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'markup'
    }
  },
  setup(props) {
    const codeRef = ref(null);
    function highlightCode(code) {
      code = code.replace(/^\n/, '').replace(/\n$/, '');
      const newCode = document.createElement('code');
      newCode.textContent = code;
      newCode.className = codeRef.value.className;
      // eslint-disable-next-line no-undef
      Prism.highlightElement(newCode);

      codeRef.value.parentElement.replaceChild(newCode, codeRef.value);
      codeRef.value = newCode;
    }

    onMounted(() => {
      watch(() => props.code, (code) => highlightCode(code), {
        immediate: true
      });
    });

    return {
      codeRef
    };
  }
};
</script>
