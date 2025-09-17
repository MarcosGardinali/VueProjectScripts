import { createFolder } from "#src/utils/fs.js";
import path from "path";

export function createComponents(moduleName) {
    const componentsBase = "src/components/modules";
    const modulePath = path.join(componentsBase, moduleName);
    createFolder(modulePath);
}