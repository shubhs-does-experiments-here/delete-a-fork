import { randomUUID } from "node:crypto";
import type { Message } from "./types";

export class MessageVault {
  private messages: Message[] = [];

  add(text: string): Message {
    const message: Message = {
      id: randomUUID(),
      text,
      createdAt: new Date(),
    };

    this.messages.push(message);

    return message;
  }

  list(): Message[] {
    return [...this.messages];
  }

  find(id: string): Message | undefined {
    return this.messages.find((message) => message.id === id);
  }
}
