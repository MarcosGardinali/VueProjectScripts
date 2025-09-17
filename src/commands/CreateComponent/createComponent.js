import path from "path";
import readline from "readline";
import { createFolder } from "#src/utils/fs.js";
import { createComponentFiles } from "./tasks/createComponentFiles.js";
import { sanitizeUserPath } from "#src/utils/sanitizePath.js";

export function createComponent() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Nome do componente: ", (componentName) => {
    if (!componentName) {
      console.error("❌ Nome do componente é obrigatório.");
      rl.close();
      return;
    }

    rl.question(
      "src/components/: informe o caminho relativo para criar o componente (ex: modules/ui): ",
      (userPath) => {
        const sanitizedPath = sanitizeUserPath(userPath);

        if (!sanitizedPath) {
          console.error(
            "❌ Caminho inválido. Informe um caminho relativo válido dentro de 'src/components/'."
          );
          rl.close();
          return;
        }

        rl.question("Deseja criar uma pasta para o componente? (S/n): ", (ans) => {
          const createFolderFlag = ans.toLowerCase() !== "n";

          // Concatena o caminho base com src/components/
          const basePath = path.join("src/components", sanitizedPath);
          const componentFolderPath = createFolderFlag
            ? path.join(basePath, componentName)
            : basePath;

          if (createFolderFlag) createFolder(componentFolderPath);

          // Cria arquivos do componente
          createComponentFiles(componentFolderPath, componentName);

          console.log("🎉 Componente criado com sucesso!");
          rl.close();
        });
      }
    );
  });
}
