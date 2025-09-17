import path from "path";
import { createFile } from "#src/utils/fs.js";

export function createComponentFiles(componentPath, componentName) {
  // Cria o arquivo Vue
  const vueFile = path.join(componentPath, `${componentName}.vue`);
  createFile(
    vueFile,
    `<template>
</template>

<script>
export default {
  name: '${componentName}',
  components: {},
  mixins: [],
  props: {},
  data: () => ({}),
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
@import '${componentName}.scss';
</style>
`
  );
  console.log(`✅ Arquivo criado: ${vueFile}`);

  // Cria o arquivo SCSS
  const scssFile = path.join(componentPath, `${componentName}.scss`);
  createFile(scssFile, `.${componentName.toLowerCase()} {}`);
  console.log(`✅ Arquivo criado: ${scssFile}`);
}
