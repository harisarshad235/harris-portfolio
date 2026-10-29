import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiMessageSquare, FiX } from 'react-icons/fi';
import { RouteSection } from '../ui/RouteSection';

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
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Your feedback could not be sent. Please try again.'
      );
      setFormState('error');
    }
  };

  return (
    <RouteSection
      id="recommendations"
      line="magenta"
      code="L6"
      surface="tinted"
      className="border-b-[1.5px] border-rule/15"
    >
      {(recommendationsLoading || recommendationsError || approvedRecommendations.length > 0) && (
        <div data-reveal className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h2 className="font-display text-3xl sm:text-5xl text-ink">
              Recommendations
            </h2>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-line-magenta text-on-magenta text-xs font-extrabold font-wide">
              <span className="w-2 h-2 rounded-full bg-current" />
              MAGENTA LINE · STAKEHOLDER ENDORSEMENTS
            </span>
          </div>
          <p className="text-ink-2 text-base sm:text-lg leading-relaxed max-w-[66ch]">
            Feedback from colleagues, clients, and managers who have worked with me.
          </p>
        </div>
      )}

      {recommendationsLoading ? (
        <div role="status" className="card p-6 text-sm font-bold text-ink-2 mb-6">
          Loading approved recommendations…
        </div>
      ) : recommendationsError ? (
        <div role="status" className="card p-6 text-sm font-bold text-line-vermilion mb-6">
          {recommendationsError}
        </div>
      ) : approvedRecommendations.length ? (
        <div
          aria-label="Approved recommendations"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {approvedRecommendations.map(({ id, quote, name, designation, organization }, index) => (
            <article
              key={id}
              data-reveal
              style={{ '--d': `${index * 80}ms` }}
              className="card card-lift overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="h-2 w-full bg-line-magenta" aria-hidden="true" />
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-line-magenta text-on-magenta">
                      <FiMessageSquare className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-2 text-ink text-xs font-extrabold font-wide tabular">
                      REF-0{index + 1}
                    </span>
                  </div>

                  <blockquote className="text-sm sm:text-base text-ink leading-relaxed font-medium mb-6">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {(name || designation || organization) && (
                <div className="px-6 py-4 bg-surface-2/60 border-t border-rule/12 flex items-center gap-3">
                  <span className="station !w-3 !h-3 shrink-0" aria-hidden="true" />
                  <div className="text-xs sm:text-sm">
                    {name && <strong className="block font-extrabold text-ink">{name}</strong>}
                    {(designation || organization) && (
                      <span className="text-ink-2 font-semibold">
                        {[designation, organization].filter(Boolean).join(' · ')}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      ) : null}

      {/* Callout Card to View LinkedIn or Add Feedback */}
      <div
        data-reveal
        className="card p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="w-11 h-11 rounded-full bg-ink text-paper flex items-center justify-center shrink-0 mt-0.5"
          >
            <FiMessageSquare className="w-5 h-5" />
          </span>
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
          <button type="button" onClick={openDialog} className="btn btn-ink">
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
        className="w-full max-w-xl rounded-2xl bg-surface text-ink border-2 border-ink p-0 shadow-2xl backdrop:bg-black/60 m-auto"
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
              className="w-9 h-9 rounded-full bg-surface-2 text-ink inline-flex items-center justify-center hover:bg-ink hover:text-paper transition-colors cursor-pointer"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>

          {formState === 'sent' ? (
            <div className="space-y-4 py-4">
              <p role="status" className="p-4 rounded-xl bg-surface-2 text-ink text-sm font-semibold">
                Thank you for sharing your feedback. It has been sent to Haris for review and will not appear publicly unless approved.
              </p>
              <button type="button" onClick={closeDialog} className="btn btn-ink">
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
                <p role="alert" className="p-3 rounded-xl bg-line-vermilion text-on-vermilion text-xs font-bold">
                  {errorMessage}
                </p>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={closeDialog} className="btn btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" disabled={formState === 'sending'} className="btn btn-ink btn-sm">
                  {formState === 'sending' ? 'Sending…' : 'Send feedback'}
                </button>
              </div>
            </>
          )}
        </form>
      </dialog>
    </RouteSection>
  );
};

export default Recommendations;
