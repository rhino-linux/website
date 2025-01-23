### Issues Tracker

To report issues or propose new features for this repository, visit [our tracker](https://github.com/rhino-linux/tracker).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploying

### Deploy with Vercel
Deploy using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/nextjs-portfolio-starter&project-name=portfolio&repository-name=portfolio)

### Deploy without Vercel

Set the following repository secrets for GitHub Actions:
- generate an ssh keygen pair and set `SSH_USER`, `SSH_IP`, `SSH_DIR`, and `SSH_KEY`:
  - `SSH_USER` - the host user
  - `SSH_IP` - the IP of the server
  - `SSH_DIR` - the desired directory to copy to 
  - `SSH_KEY` - the contents of the generated `site_build_key` file:
```bash
# generate key
ssh-keygen -t ed25519 -C "github-actions@site-build" -f site_build_key < /dev/null

# allow key to login to user
mkdir -p ~/.ssh
cat site_build_key.pub >> ~/.ssh/authorized_keys

# print key result to set SSH_KEY - DO NOT SHARE!!
cat site_build_key
```

- The workflow will run:
  - On any changes to the `main` branch
  - Manually on dispatch
    - For security, it will always checkout from `main`, even if requesting dispatch on an alternate branch

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
