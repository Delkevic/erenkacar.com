export function labelWithName(template: string, name: string): string {
  return template.replace("{name}", name);
}
