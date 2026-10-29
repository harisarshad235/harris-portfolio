import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { RouteSection } from '../ui/RouteSection';

export const FAQ_DATA = [
  {
    question: 'What project management methodologies and frameworks do you specialize in?',
    answer:
      'I specialize in Agile delivery (Scrum, Kanban), PMO governance, Earned Value Management (EVM), and predictive planning. As a PMP®-certified Project Manager with a Master’s in Project Management, I combine structured schedule baselines, cost forecasting, RAID management, and stakeholder coordination to guide technology initiatives from kickoff through release and handover.',
  },
  {
    question: 'What scale of technology portfolios and program budgets have you managed?',
    answer:
      'My experience includes coordinating a 150+ site, PKR 700M+ portfolio with Power BI reporting and PMO discipline at AJCL, as well as contributing to nationwide digital initiatives such as Pakistan’s Track & Trace program, which achieved PKR 103M+ in program savings and finished 22.5% under budget.',
  },
  {
    question: 'How do you coordinate engineering squads and business stakeholders?',
    answer:
      'I bridge technical and commercial teams by translating complex business requirements into clear sprint backlogs, technical user stories, and acceptance criteria. I run sprint ceremonies, manage dependencies across backend, frontend, QA, and cloud infrastructure, and maintain executive reporting to ensure transparent delivery.',
  },
  {
    question: 'What technology stacks and tools do you manage?',
    answer:
      'I coordinate full-stack engineering initiatives spanning modern web applications (Next.js, React, TypeScript), cloud & edge infrastructure (Cloudflare Workers, AWS serverless, Docker), distributed databases, telemetry networks, and automated CI/CD release pipelines.',
  },
  {
    question: 'What proprietary SaaS products have you architected and built?',
    answer:
      'Alongside managing enterprise client portfolios, I conceived, architected, and built two live cloud SaaS platforms: Hubito (hubito.harisarshad.site/tour), a local-first task command center with Kanban swimlanes and Pomodoro flow cadence, and Pacio (pacio.harisarshad.site), an edge-native Agile sprint tracker with sub-50ms Kanban boards, velocity sparklines, Markdown ADR/PRD specs, and multi-tenant corporate RBAC on Cloudflare Workers and D1.',
  },
  {
    question: 'What roles or engagements are you currently open to?',
    answer:
      'I am based in Islamabad, Pakistan, and open to full-time Technical Project Manager, PMO, and Technology Delivery Lead roles, as well as select delivery consulting engagements locally and remotely worldwide.',
  },
];

const LINE_COLORS = [
  'bg-line-cobalt text-on-cobalt',
  'bg-line-vermilion text-on-vermilion',
  'bg-line-sunflower text-on-sunflower',
  'bg-line-green text-on-green',
  'bg-line-violet text-on-violet',
  'bg-line-magenta text-on-magenta',
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <RouteSection
      id="faq"
      line="cobalt"
      code="INFO"
      surface="default"
      className="border-b-[1.5px] border-rule/15"
    >
      <div data-reveal className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h2 className="font-display text-3xl sm:text-5xl text-ink">
            Frequently Asked Questions
          </h2>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2 text-ink text-xs font-extrabold font-wide shadow-[inset_0_0_0_1.5px_rgb(var(--rule-rgb)/0.18)]">
            <span className="station !w-2.5 !h-2.5" />
            INFORMATION DESK · 6 QUERIES
          </span>
        </div>

        <p className="text-ink-2 text-base sm:text-lg leading-relaxed max-w-[66ch]">
          Key questions about my project management approach, portfolio delivery track record, and technical leadership.
        </p>
      </div>

      <div data-reveal style={{ '--d': '80ms' }} className="w-full max-w-4xl space-y-3.5">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;
          const badgeColor = LINE_COLORS[index % LINE_COLORS.length];

          return (
            <div
              key={index}
              className={`card overflow-hidden transition-colors ${
                isOpen ? 'ring-2 ring-line-cobalt' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer hover:bg-surface-2/60 active:scale-[0.99] transition-[transform,background-color] duration-150"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-display text-xs shrink-0 ${badgeColor}`}
                  >
                    Q{index + 1}
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-ink">
                    {item.question}
                  </span>
                </div>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-200 ease-out ${
                    isOpen
                      ? 'rotate-180 bg-ink text-paper'
                      : 'bg-surface-2 text-ink'
                  }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pt-3 sm:px-6 sm:pb-7 sm:pl-[4.25rem] text-sm sm:text-base text-ink-2 leading-relaxed border-t border-rule/12">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </RouteSection>
  );
}
