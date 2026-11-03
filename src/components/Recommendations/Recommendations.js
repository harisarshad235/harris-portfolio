import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { Section } from '../ui/Section';

const Recommendations = () => {
  const dialogRef = useRef(null);
  const [formState, setFormState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [approvedRecommendations, setApprovedRecommendations] = useState([]);
  const [recommendationsLoading, setRecommendationsLoading] = useState(false);
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
          if (active) setApprovedRecommendations([]);
        }
      } catch (error) {
        console.error('Approved recommendations could not be loaded.', error);
        if (active) setApprovedRecommendations([]);
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
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Your feedback could not be sent. Please try again.'
      );
      setFormState('error');
    }
  };

  const hasContent = recommendationsLoading || recommendationsError || approvedRecommendations.length > 0;

  return (
    <Section
      id="recommendations"
      title="Recommendations"
      intro={hasContent ? 'Feedback from colleagues, clients, and managers who have worked with me.' : 'Recommendations are published here once the person who wrote them approves. You can also read verified references on LinkedIn.'}
      surface="tinted"
      split={false}
    >
      {recommendationsLoading ? (
        <div role="status" className="py-6 text-sm font-medium text-ink-2 mb-6">
          Loading approved recommendations…
        </div>
      ) : recommendationsError ? (
        <div role="status" className="py-6 text-sm font-semibold text-danger mb-6">
          {recommendationsError}
        </div>
      ) : approvedRecommendations.length ? (
        <div
          aria-label="Approved recommendations"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-14"
        >
          {approvedRecommendations.map(({ id, quote, name, designation, organization }, index) => (
            <figure
              key={id}
              data-reveal
              style={{ '--d': `${index * 80}ms` }}
              className="flex flex-col justify-between border-t border-rule/20 pt-6"
            >
              <blockquote className="font-display text-[1.25rem] sm:text-[1.375rem] leading-[1.45] text-ink mb-6">
                &ldquo;{quote}&rdquo;
              </blockquote>
              {(name || designation || organization) && (
                <figcaption className="text-sm">
                  {name && <strong className="block font-semibold text-ink">{name}</strong>}
                  {(designation || organization) && (
                    <span className="text-ink-2">
                      {[designation, organization].filter(Boolean).join(' · ')}
                    </span>
                  )}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      ) : null}

      {/* Callout Card to View LinkedIn or Add Feedback */}
      <div
        data-reveal
        className="py-8 border-y border-rule/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex items-start gap-4">
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-ink mb-1.5">
              Feedback from people I&rsquo;ve worked with
            </h3>
            <p className="text-sm sm:text-base text-ink-2 max-w-[60ch]">
              Worked with me on an enterprise program, PMO rollout, or software product? Share your experience or view verified references on LinkedIn.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://pk.linkedin.com/in/haris-arshad"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <span>View LinkedIn</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <button type="button" onClick={openDialog} className="btn btn-accent">
            <span>Add feedback</span>
          </button>
        </div>
      </div>

      {/* Modal Dialog for Submitting Feedback */}
      <dialog
        ref={dialogRef}
        aria-labelledby="recommendation-dialog-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
        onClose={() => {
          if (formState !== 'sent') setFormState('idle');
        }}
        className="w-full max-w-xl rounded-lg bg-surface text-ink border border-rule/25 p-0 shadow-2xl backdrop:bg-black/55 m-auto"
      >
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-rule/15">
            <h3 id="recommendation-dialog-title" className="font-display text-2xl text-ink">
              Share feedback
            </h3>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close feedback dialog"
              className="w-9 h-9 rounded-md text-ink-2 inline-flex items-center justify-center hover:bg-ink/5 hover:text-ink transition-colors cursor-pointer"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>

          {formState === 'sent' ? (
            <div className="space-y-4 py-4">
              <p role="status" className="p-4 rounded-md bg-accent-soft text-ink text-sm font-medium">
                Thank you for sharing your feedback. It has been sent to Haris for review and will not appear publicly unless approved.
              </p>
              <button type="button" onClick={closeDialog} className="btn btn-accent">
                Done
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-ink-2">
                Your feedback will be sent privately to Haris for review.
              </p>

              <div>
                <label htmlFor="recommendation-feedback" className="field-label">
                  Your feedback
                </label>
                <textarea
                  id="recommendation-feedback"
                  name="feedback"
                  rows="5"
                  maxLength="3000"
                  placeholder="Share what it was like to work together..."
                  required
                  className="field"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="recommendation-name" className="field-label">
                    Your name (optional)
                  </label>
                  <input
                    id="recommendation-name"
                    name="name"
                    maxLength="120"
                    autoComplete="name"
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="recommendation-designation" className="field-label">
                    Job title (optional)
                  </label>
                  <input
                    id="recommendation-designation"
                    name="designation"
                    maxLength="120"
                    autoComplete="organization-title"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="recommendation-organization" className="field-label">
                  Where did you work with Haris? (optional)
                </label>
                <input
                  id="recommendation-organization"
                  name="organization"
                  maxLength="160"
                  placeholder="Company, client, or project"
                  autoComplete="organization"
                  className="field"
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="recommendation-website">Leave this field empty</label>
                <input id="recommendation-website" name="website" tabIndex="-1" autoComplete="off" />
              </div>

              <label className="flex items-start gap-2.5 text-xs text-ink-2 cursor-pointer">
                <input type="checkbox" name="permission" required className="mt-1" />
                <span>
                  I give permission for Haris to publish my feedback and any name, job title, or organization I provide if he approves it. It will stay private until he approves it.
                </span>
              </label>

              {formState === 'error' && (
                <p role="alert" className="p-3 rounded-md border border-danger/50 text-danger text-sm font-medium">
                  {errorMessage}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={closeDialog} className="btn btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" disabled={formState === 'sending'} className="btn btn-accent btn-sm">
                  {formState === 'sending' ? 'Sending…' : 'Send feedback'}
                </button>
              </div>
            </>
          )}
        </form>
      </dialog>
    </Section>
  );
};

export default Recommendations;
