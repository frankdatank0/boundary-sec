import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("accepts a valid contact form submission and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Jane Doe",
      email: "jane@example.com",
      company: "Acme Corp",
      need: "agents",
      message: "I need help building an AI agent for customer support.",
    });

    expect(result).toEqual({ success: true, notified: true });
  });

  it("accepts submission without optional company field", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Smith",
      email: "john@example.com",
      need: "pentest",
      message: "We need a penetration test for our web application.",
    });

    expect(result).toEqual({ success: true, notified: true });
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Bad Email",
        email: "not-an-email",
        need: "both",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        need: "agents",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with empty message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        need: "agents",
        message: "",
      })
    ).rejects.toThrow();
  });
});
