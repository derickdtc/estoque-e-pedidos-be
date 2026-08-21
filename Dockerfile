FROM node:22-bookworm-slim AS build

WORKDIR /app

# Keep the package-manager version deterministic in the build environment.
RUN npm install --global pnpm@10.30.1

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY nest-cli.json tsconfig.json tsconfig.build.json ./
COPY prisma ./prisma
COPY src ./src

# "prebuild" runs Prisma Client generation before compiling Nest.
RUN pnpm run build

# Keep only runtime dependencies, including the generated Prisma Client.
RUN pnpm prune --prod

FROM node:22-bookworm-slim AS runtime

ENV NODE_ENV=production
WORKDIR /app

COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist

USER node
EXPOSE 3006

CMD ["node", "dist/main"]
