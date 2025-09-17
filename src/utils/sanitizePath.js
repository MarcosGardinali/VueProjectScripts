export function sanitizeUserPath(userPath) {
  if (!userPath) return null;

  // Remove espaços no começo/fim e substitui várias barras por uma
  let cleanPath = userPath.trim().replace(/[/\\]+/g, "/");

  // Remove barras no início ou no fim
  cleanPath = cleanPath.replace(/^\/|\/$/g, "");

  // Retorna null se o resultado ficar vazio
  return cleanPath || null;
}