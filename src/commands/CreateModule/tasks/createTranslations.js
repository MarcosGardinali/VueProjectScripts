import { createFile, createFolder, updateFile } from "#src/utils/fs.js";
import { toCamelCase } from "#src/utils/string.js";
import path from "path";

export function createTranslations(moduleName) {
    const langs = ["pt-br", "en-us", "es-es", "fr-fr"];
    const camelName = toCamelCase(moduleName);

    langs.forEach((lang) => {
        const base = `src/lang/language/${lang}/modules`;
        const filePath = path.join(base, `${camelName}.js`);

        // Cria a pasta de módulos se não existir
        createFolder(base);

        // Cria o arquivo de tradução se não existir
        createFile(filePath, "export default {};\n");

        // Atualiza o arquivo principal do idioma
        const mainLangFile = `src/lang/language/${lang}/${lang}.js`;

        // Atualiza o arquivo principal com import e export do módulo
        updateFile(mainLangFile, (content) => {
            const importLine = `import ${camelName} from './modules/${camelName}';`;
            const exportLine = `\t${camelName},`;

            // Adiciona import o import do módulo
            if (!content.includes(importLine)) {
                content = content.replace(
                    /(\/\/modules[\s\S]*)(import[^\n]*;)(?![\s\S]*import[^\n]*;)/,
                    `$1$2\n${importLine}`
                );
            }

            // Adiciona o módulo na seção de export
            if (!content.includes(exportLine)) {
                content = content.replace(
                    /(\/\/modules[\s\S]*)([a-zA-Z0-9_]+,)(?![\s\S]*\2)/,
                    `$1$2\n\t${camelName},`
                );
            }

            return content;
        });
    });
}