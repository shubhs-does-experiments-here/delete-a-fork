import { describe, expect, it } from "vitest";
import { MessageVault } from "../src/vault";

describe("MessageVault", () => {
  it("stores messages", () => {
    const vault = new MessageVault();

    const message = vault.add("Hello, Git!");

    expect(message.text).toBe("Hello, Git!");
    expect(vault.list()).toHaveLength(1);
  });

  it("finds a message by id", () => {
    const vault = new MessageVault();

    const message = vault.add("Find me");

    expect(vault.find(message.id)?.text).toBe("Find me");
  });
});
