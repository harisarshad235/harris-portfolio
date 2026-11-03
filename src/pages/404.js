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
          <div className="border-t border-rule/20 pt-10">
            <p className="font-figure text-6xl sm:text-7xl text-accent mb-4">404</p>
            <h1 className="font-display text-3xl sm:text-5xl text-ink mb-5">
              This page could not be found
            </h1>
            <p className="text-base sm:text-lg text-ink-2 leading-relaxed max-w-[60ch] mb-8">
              The link you followed may be broken, moved, or no longer available. You can return to the home page or go straight to one of the sections below.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/" passHref>
                <a className="btn btn-accent">
                  <span>Return to home</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Link>
              <Link href="/#client-projects" passHref>
                <a className="btn btn-outline">View projects</a>
              </Link>
              <Link href="/#contact" passHref>
                <a className="btn btn-outline">Contact Haris</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
