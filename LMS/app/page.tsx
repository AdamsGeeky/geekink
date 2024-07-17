import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "GeekInk LMS",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://geekink.com.ng",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://geekink.com.ng/img/logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-green-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Next.js Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-2xl font-light text-green-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
              Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
              enjoyable development process.
            </p>
            <Button href="https://geekink.com.ng" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://geekink.com.ng"
              intent="secondary"
            >
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
