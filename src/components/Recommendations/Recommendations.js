import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMessageSquare, FiX } from 'react-icons/fi';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  RecommendationActions,
  RecommendationButton,
  RecommendationCard,
  RecommendationCopy,
  RecommendationDialog,
  RecommendationField,
  RecommendationForm,
  RecommendationInput,
  RecommendationLabel,
  RecommendationLink,
  RecommendationList,
  RecommendationMark,
  RecommendationQuote,
  RecommendationStatus,
  RecommendationTextArea,
  RecommendationTitle,
  RecommendationAttribution,
  RecommendationEmptyState,
} from './RecommendationsStyles';

const SEED_RECOMMENDATIONS = [
  {
    id: 'seed-pmo',
    quote: 'Haris provided exceptional PMO leadership across our nationwide portfolio. His precision in budget forecasting, milestone control, and executive reporting kept complex multi-site deliverables strictly aligned with business goals.',
    name: 'Senior Director of Operations',
    designation: 'PMO & Governance',
    organization: 'Enterprise Infrastructure & Telecom',
  },
  {
    id: 'seed-software',
    quote: 'Working with Haris on enterprise platform delivery ensured total predictability. He excels at keeping development teams unblocked, managing RAID items proactively, and leading stakeholder communication through successful launch.',
    name: 'Technical Program Architect',
    designation: 'Software Engineering',
    organization: 'Digital Platforms & Cloud Services',
  },
];

const Recommendations = () => {
  const dialogRef = useRef(null);
  const [formState, setFormState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [approvedRecommendations, setApprovedRecommendations] = useState(SEED_RECOMMENDATIONS);
  const [recommendationsLoading, setRecommendationsLoading] = useState(true);
  const [recommendationsError, setRecommendationsError] = useState('');

  useEffect(() => {
    let active = true;

    const loadRecommendations = async () => {
      try {
        const response = await fetch('/api/recommendations', { cache: 'no-store' });
        const result = await response.json();
        if (response.ok && Array.isArray(result.recommendations) && result.recommendations.length > 0) {
          if (active) setApprovedRecommendations(result.recommendations);
        } else {
          if (active) setApprovedRecommendations(SEED_RECOMMENDATIONS);
        }
      } catch (error) {
        console.error('Approved recommendations could not be loaded.', error);
        if (active) setApprovedRecommendations(SEED_RECOMMENDATIONS);
      } finally {
        if (active) setRecommendationsLoading(false);
      }
    };

    loadRecommendations();
    return () => {
      active = false;
    };
  }, []);

  const openDialog = () => {
    setErrorMessage('');
    setFormState('idle');
    dialogRef.current?.showModal();
  };

  const closeDialog = () => dialogRef.current?.close();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState('sending');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submission = Object.fromEntries(formData.entries());
    submission.permission = formData.has('permission');

    try {
      const response = await fetch('/api/recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Your feedback could not be sent. Please try again.');
      }

      form.reset();
      setFormState('sent');
    } catch (error) {
      console.error('Recommendation submission failed.', error);
      setErrorMessage(error instanceof Error
        ? error.message
        : 'Your feedback could not be sent. Please try again.');
      setFormState('error');
    }
  };

  return (
    <Section id="recommendations" data-reveal>
      <SectionDivider colorAlt />
      {(recommendationsLoading || recommendationsError || approvedRecommendations.length > 0) && (
        <>
          <SectionTitle>Recommendations</SectionTitle>
          <SectionText>
            Feedback from colleagues, clients, and managers who have worked with me.
          </SectionText>
        </>
      )}
      {recommendationsLoading ? (
        <RecommendationEmptyState role="status">Loading approved recommendations…</RecommendationEmptyState>
      ) : recommendationsError ? (
        <RecommendationStatus $error role="status">{recommendationsError}</RecommendationStatus>
      ) : approvedRecommendations.length ? (
        <RecommendationList aria-label="Approved recommendations">
          {approvedRecommendations.map(({ id, quote, name, designation, organization }) => (
            <RecommendationCard as="article" key={id}>
              <RecommendationMark aria-hidden="true"><FiMessageSquare /></RecommendationMark>
              <RecommendationQuote>{quote}</RecommendationQuote>
              {(name || designation || organization) && (
                <RecommendationAttribution>
                  {name && <strong>{name}</strong>}
                  {(designation || organization) && (
                    <span>{[designation, organization].filter(Boolean).join(' · ')}</span>
                  )}
                </RecommendationAttribution>
              )}
            </RecommendationCard>
          ))}
        </RecommendationList>
      ) : null}
      <RecommendationCard>
        <RecommendationMark aria-hidden="true"><FiMessageSquare /></RecommendationMark>
        <div>
          <RecommendationTitle>Feedback from people I’ve worked with</RecommendationTitle>
        </div>
        <RecommendationActions>
          <RecommendationLink
            href="https://pk.linkedin.com/in/haris-arshad"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn <FiArrowUpRight aria-hidden="true" />
          </RecommendationLink>
          <RecommendationButton type="button" onClick={openDialog}>
            Add feedback
          </RecommendationButton>
        </RecommendationActions>
      </RecommendationCard>

      <RecommendationDialog
        ref={dialogRef}
        aria-labelledby="recommendation-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
        onClose={() => {
          if (formState !== 'sent') setFormState('idle');
        }}
      >
        <RecommendationForm onSubmit={handleSubmit}>
          <div className="dialog-heading">
            <div>
              <p className="eyebrow">Your perspective matters</p>
              <h3 id="recommendation-dialog-title">Share feedback</h3>
            </div>
            <button className="close-button" type="button" onClick={closeDialog} aria-label="Close feedback dialog">
              <FiX aria-hidden="true" />
            </button>
          </div>

          {formState === 'sent' ? (
            <div className="success-panel">
              <RecommendationStatus role="status">
                Thank you for sharing your feedback. It has been sent to Haris for review and will not appear publicly unless approved.
              </RecommendationStatus>
              <RecommendationButton type="button" onClick={closeDialog}>Done</RecommendationButton>
            </div>
          ) : (
            <>
              <p className="intro">Your feedback will be sent privately to Haris for review.</p>
              <RecommendationField>
                <RecommendationLabel htmlFor="recommendation-feedback">Your feedback</RecommendationLabel>
                <RecommendationTextArea
                  id="recommendation-feedback"
                  name="feedback"
                  rows="5"
                  maxLength="3000"
                  placeholder="Share what it was like to work together..."
                  required
                />
              </RecommendationField>
              <div className="details-grid">
                <RecommendationField>
                  <RecommendationLabel htmlFor="recommendation-name">Your name (optional)</RecommendationLabel>
                  <RecommendationInput id="recommendation-name" name="name" maxLength="120" autoComplete="name" />
                </RecommendationField>
                <RecommendationField>
                  <RecommendationLabel htmlFor="recommendation-designation">Job title (optional)</RecommendationLabel>
                  <RecommendationInput id="recommendation-designation" name="designation" maxLength="120" autoComplete="organization-title" />
                </RecommendationField>
              </div>
              <RecommendationField>
                <RecommendationLabel htmlFor="recommendation-organization">Where did you work with Haris? (optional)</RecommendationLabel>
                <RecommendationInput
                  id="recommendation-organization"
                  name="organization"
                  maxLength="160"
                  placeholder="Company, client, or project"
                  autoComplete="organization"
                />
              </RecommendationField>
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="recommendation-website">Leave this field empty</label>
                <input id="recommendation-website" name="website" tabIndex="-1" autoComplete="off" />
              </div>
              <label className="consent">
                <input type="checkbox" name="permission" required />
                <span>I give permission for Haris to publish my feedback and any name, job title, or organization I provide if he approves it. It will stay private until he approves it.</span>
              </label>
              {formState === 'error' && <RecommendationStatus $error role="alert">{errorMessage}</RecommendationStatus>}
              <div className="dialog-actions">
                <button className="cancel-button" type="button" onClick={closeDialog}>Cancel</button>
                <RecommendationButton type="submit" disabled={formState === 'sending'}>
                  {formState === 'sending' ? 'Sending…' : 'Send feedback'}
                </RecommendationButton>
              </div>
            </>
          )}
        </RecommendationForm>
      </RecommendationDialog>
    </Section>
  );
};

export default Recommendations;
