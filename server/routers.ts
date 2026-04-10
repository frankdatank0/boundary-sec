import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          company: z.string().optional(),
          need: z.string().min(1, "Please select a service"),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        const needLabels: Record<string, string> = {
          agents: "AI Agent Services",
          pentest: "Penetration Testing",
          both: "Both (Agents + Pentesting)",
        };

        const title = `New Contact Form: ${input.name} — ${needLabels[input.need] || input.need}`;
        const content = [
          `**Name:** ${input.name}`,
          `**Email:** ${input.email}`,
          input.company ? `**Company:** ${input.company}` : null,
          `**Service Needed:** ${needLabels[input.need] || input.need}`,
          ``,
          `**Message:**`,
          input.message,
        ]
          .filter(Boolean)
          .join("\n");

        const sent = await notifyOwner({ title, content });

        return { success: true, notified: sent };
      }),
  }),
});

export type AppRouter = typeof appRouter;
