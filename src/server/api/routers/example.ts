import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(() => {
    return {
      prefetchedData: [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }],
    };
  }),
  getAllExamples: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
