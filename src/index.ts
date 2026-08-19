import { MessageVault } from "./vault";

const vault = new MessageVault();

vault.add("Git remembers more than you think.");
vault.add("Every experiment leaves a trace.");

console.log("🔬 Message Vault");
console.log("----------------");

for (const message of vault.list()) {
  console.log(`[${message.id}] ${message.text}`);
}
