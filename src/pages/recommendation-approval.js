import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { FiArrowLeft } from 'react-icons/fi';
import { Layout } from '../layout/Layout';

const RecommendationApprovalPage = () => {
  const [id, setId] = useState('');
  const [token, setToken] = useState('');
  const [recommendation, setRecommendation] = useState(null);
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const approvalId = query.get('id') || '';
    const approvalToken = window.location.hash.slice(1);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);

    if (!approvalId || !approvalToken) {
      setMessage('This private approval link is incomplete. Open the original email link and try again.');
      setStatus('error');
      return;
    }

    setId(approvalId);
    setToken(approvalToken);

    const loadRecommendation = async () => {
      try {
        const response = await fetch(`/api/recommendation/approve?id=${encodeURIComponent(approvalId)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'preview', token: approvalToken }),
        });
        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.error || 'The recommendation could not be loaded for review.');
        }
        setRecommendation(result.recommendation);
        setStatus('ready');
      } catch (error) {
        console.error('Recommendation review could not be loaded.', error);
        setMessage(error instanceof Error ? error.message : 'The recommendation could not be loaded for review.');
        setStatus('error');
      }
    };

    loadRecommendation();
  }, []);

  const handleDecision = async (action) => {
    if (action === 'discard' && !window.confirm('Discard this submission permanently?')) return;

    setStatus(action === 'approve' ? 'approving' : 'discarding');
    setMessage('');
    try {
      const response = await fetch(`/api/recommendation/approve?id=${encodeURIComponent(id)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, token }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Your decision could not be saved. Please try again.');
      }
      setStatus(action === 'approve' ? 'approved' : 'discarded');
    } catch (error) {
      console.error('Recommendation decision could not be saved.', error);
      setMessage(error instanceof Error ? error.message : 'Your decision could not be saved. Please try again.');
      setStatus('ready');
    }
  };

  const isProcessing = status === 'approving' || status === 'discarding';

  return (
    <Layout>
      <Head>
        <title>Review recommendation | Haris Arshad</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <section className="w-full py-24 sm:py-32 bg-paper text-ink">
        <div className="frame-flush max-w-3xl">
          <h1 className="font-display text-3xl sm:text-5xl text-ink mb-3">
            Review recommendation
          </h1>
          <p className="text-base sm:text-lg text-ink-2 mb-8">
            This private page lets you decide whether this feedback should appear on the portfolio.
          </p>

          <div aria-live="polite" className="card p-6 sm:p-8 space-y-5">
            {status === 'loading' && (
              <p role="status" className="text-sm font-bold text-ink-2">
                Loading the private submission…
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="p-4 rounded-xl bg-line-vermilion text-on-vermilion text-sm font-bold">
                {message}
              </p>
            )}
            {status === 'ready' && recommendation && (
              <>
                <blockquote className="text-base sm:text-lg text-ink leading-relaxed font-medium p-5 rounded-xl bg-surface-2">
                  &ldquo;{recommendation.feedback}&rdquo;
                </blockquote>
                {(recommendation.name || recommendation.designation || recommendation.organization) && (
                  <p className="text-sm text-ink-2 font-semibold">
                    {recommendation.name && <strong className="text-ink">{recommendation.name}</strong>}
                    {recommendation.name && (recommendation.designation || recommendation.organization) && ' · '}
                    {[recommendation.designation, recommendation.organization].filter(Boolean).join(' · ')}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button type="button" onClick={() => handleDecision('approve')} className="btn btn-ink">
                    Approve and publish
                  </button>
                  <button type="button" onClick={() => handleDecision('discard')} className="btn btn-outline">
                    Discard submission
                  </button>
                </div>
                {message && (
                  <p role="alert" className="p-3 rounded-xl bg-line-vermilion text-on-vermilion text-xs font-bold">
                    {message}
                  </p>
                )}
              </>
            )}
            {isProcessing && (
              <p role="status" className="text-sm font-bold text-ink-2">
                Saving your decision…
              </p>
            )}
            {status === 'approved' && (
              <p role="status" className="p-4 rounded-xl bg-line-green text-on-green text-sm font-bold">
                Approved and published. It is now available in the Recommendations section of your portfolio.
              </p>
            )}
            {status === 'discarded' && (
              <p role="status" className="p-4 rounded-xl bg-surface-2 text-ink text-sm font-bold">
                The submission was discarded and removed from the review queue.
              </p>
            )}
            {(status === 'approved' || status === 'discarded') && (
              <a href="/#recommendations" className="btn btn-ink">
                <FiArrowLeft aria-hidden="true" />
                <span>Return to the portfolio</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecommendationApprovalPage;
