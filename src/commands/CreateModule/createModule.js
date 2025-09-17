import readline from "readline";
import { createViews } from "./tasks/createViews.js";
import { createComponents } from "./tasks/createComponents.js";
import { createTranslations } from "./tasks/createTranslations.js";

export function createModule() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // ---------------- Execução ----------------//
    rl.question("Nome do módulo: ", (moduleName) => {
        if (!moduleName) {
            console.error("❌ Nome do módulo é obrigatório.");
            rl.close();
            return;
        }

        rl.question("Criar estrutura de views? (S/n): ", (ans1) => {
            const createViewsFlag = ans1.toLowerCase() !== "n";

            rl.question("Criar estrutura de components? (S/n): ", (ans2) => {
                const createComponentsFlag = ans2.toLowerCase() !== "n";

                rl.question("Criar arquivos de tradução? (S/n): ", (ans3) => {
                    const createTranslationsFlag = ans3.toLowerCase() !== "n";

                    if (createViewsFlag) createViews(moduleName);
                    if (createComponentsFlag) createComponents(moduleName);
                    if (createTranslationsFlag) createTranslations(moduleName);

                    console.log("🎉 Finalizado!");
                    rl.close();
                });
            });
        });
    });

}