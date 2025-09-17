import { createFile, createFolder } from "#src/utils/fs.js";
import path from "path";

export function createViews(moduleName) {
    const viewsBase = "src/views/modules";
    const modulePath = path.join(viewsBase, moduleName);

    if (createFolder(modulePath)) {
        const vueFile = path.join(modulePath, `${moduleName}.vue`);
        createFile(vueFile,
            `<template>
</template>

<script>
export default {
  name: '${moduleName}',
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
@import '${moduleName}.scss';
</style>
`);
        console.log(`✅ Arquivo criado: ${vueFile}`);

        const scssFile = path.join(modulePath, `${moduleName}.scss`);
        createFile(scssFile, `.${moduleName.toLowerCase()} {}`);
        console.log(`✅ Arquivo criado: ${scssFile}`);
    }
}