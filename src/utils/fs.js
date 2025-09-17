import fs from "fs";

export function createFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    console.warn(`📂  Pasta já existe: "${folderPath}"`);
    return false;
  }
  fs.mkdirSync(folderPath, { recursive: true });
  console.log(`📁 Pasta criada: ${folderPath}`);
  return true;
}

export function removeFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`🗑️ Pasta removida: ${folderPath}`);
  }
}

export function createFile(filePath, content = "") {
  if (fs.existsSync(filePath)) {
    console.warn(`⚠️ Arquivo já existe: ${filePath}`);
    return false;
  } else {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Arquivo criado: ${filePath}`);
    return true;
  }
}

export function updateFile(filePath, callback) {
  if (!fs.existsSync(filePath)) return false;

  let content = fs.readFileSync(filePath, "utf8");
  content = callback(content);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`🔄 Arquivo atualizado: ${filePath}`);
  return true;
}