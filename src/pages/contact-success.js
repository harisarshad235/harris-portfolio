import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Layout } from '../layout/Layout';

const ContactSuccessPage = () => (
  <Layout>
    <Head>
      <title>Message sent | Haris Arshad</title>
      <meta name="robots" content="noindex, follow" />
    </Head>
    <section className="w-full py-24 sm:py-32 bg-paper text-ink">
      <div className="frame-flush max-w-2xl">
        <div className="card p-8 sm:p-12">
          <div className="h-2.5 w-full bg-line-green rounded-full mb-8" aria-hidden="true" />
          <div className="flex items-center gap-3 mb-4">
            <span className="w-11 h-11 rounded-full bg-line-green text-on-green inline-flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            </span>
            <h1 className="font-display text-3xl sm:text-5xl text-ink">
              Message sent.
            </h1>
          </div>
          <p className="text-base sm:text-lg text-ink-2 leading-relaxed mb-8">
            Thank you for reaching out. Your message has been received and I will get back to you soon.
          </p>
          <Link href="/" passHref>
            <a className="btn btn-ink">
              <span>Return to portfolio</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactSuccessPage;
