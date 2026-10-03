import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { FiArrowLeft } from 'react-icons/fi';

import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';
import {
  RecommendationApprovalActions,
  RecommendationApprovalAttribution,
  RecommendationApprovalPanel,
  RecommendationApprovalQuote,
  RecommendationButton,
  RecommendationDiscardButton,
  RecommendationLink,
  RecommendationStatus,
} from '../components/Recommendations/RecommendationsStyles';

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
    <>
      <Head>
        <title>Review recommendation | Haris Arshad</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <main>
        <Section>
          <SectionDivider colorAlt />
          <SectionTitle>Review recommendation</SectionTitle>
          <SectionText>This private page lets you decide whether this feedback should appear on the portfolio.</SectionText>
          <RecommendationApprovalPanel aria-live="polite">
            {status === 'loading' && <RecommendationStatus role="status">Loading the private submission…</RecommendationStatus>}
            {status === 'error' && <RecommendationStatus $error role="alert">{message}</RecommendationStatus>}
            {status === 'ready' && recommendation && (
              <>
                <RecommendationApprovalQuote>{recommendation.feedback}</RecommendationApprovalQuote>
                {(recommendation.name || recommendation.designation || recommendation.organization) && (
                  <RecommendationApprovalAttribution>
                    {recommendation.name && <strong>{recommendation.name}</strong>}
                    {recommendation.name && (recommendation.designation || recommendation.organization) && ' · '}
                    {[recommendation.designation, recommendation.organization].filter(Boolean).join(' · ')}
                  </RecommendationApprovalAttribution>
                )}
                <RecommendationApprovalActions>
                  <RecommendationButton type="button" onClick={() => handleDecision('approve')}>
                    Approve and publish
                  </RecommendationButton>
                  <RecommendationDiscardButton type="button" onClick={() => handleDecision('discard')}>
                    Discard submission
                  </RecommendationDiscardButton>
                </RecommendationApprovalActions>
                {message && <RecommendationStatus $error role="alert">{message}</RecommendationStatus>}
              </>
            )}
            {isProcessing && <RecommendationStatus role="status">Saving your decision…</RecommendationStatus>}
            {status === 'approved' && (
              <RecommendationStatus role="status">
                Approved and published. It is now available in the Recommendations section of your portfolio.
              </RecommendationStatus>
            )}
            {status === 'discarded' && (
              <RecommendationStatus role="status">The submission was discarded and removed from the review queue.</RecommendationStatus>
            )}
            {(status === 'approved' || status === 'discarded') && (
              <RecommendationLink href="/#recommendations">
                <FiArrowLeft aria-hidden="true" /> Return to the portfolio
              </RecommendationLink>
            )}
          </RecommendationApprovalPanel>
        </Section>
      </main>
    </>
  );
};

export default RecommendationApprovalPage;
