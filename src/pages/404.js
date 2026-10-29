import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Layout } from '../layout/Layout';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Page not found (404) | Haris Arshad</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="The requested page could not be found." />
      </Head>
      <section className="w-full py-24 sm:py-32 bg-paper text-ink">
        <div className="frame-flush max-w-3xl">
          <div className="card p-8 sm:p-12 overflow-hidden relative">
            <div className="h-2.5 w-full bg-line-vermilion rounded-full mb-8" aria-hidden="true" />
            <div className="flex items-center justify-between gap-4 mb-4">
              <h1 className="font-display text-4xl sm:text-6xl text-ink">
                404 · Unscheduled Stop
              </h1>
              <span className="px-3 py-1 rounded-full bg-line-vermilion text-on-vermilion text-xs font-extrabold font-wide shrink-0">
                OFF ROUTE
              </span>
            </div>
            <p className="text-base sm:text-lg text-ink-2 leading-relaxed max-w-[60ch] mb-8">
              The link you followed may be broken, moved, or no longer available. You can return to the Central Hub or transfer directly to one of the active lines below.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/" passHref>
                <a className="btn btn-ink">
                  <span>Return to home</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Link>
              <Link href="/#client-projects" passHref>
                <a className="btn btn-outline">View projects</a>
              </Link>
              <Link href="/#contact" passHref>
                <a className="btn btn-sun">Contact Haris</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
