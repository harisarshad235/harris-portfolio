import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Section } from '../ui/Section';

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      intro="Key questions about my project management approach, portfolio delivery track record, and technical leadership."
      surface="tinted"
    >
      <div data-reveal className="w-full border-t border-rule/20">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b border-rule/15">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer group"
              >
                <span
                  className={`font-display text-lg sm:text-xl leading-snug transition-colors duration-150 ${
                    isOpen ? 'text-accent' : 'text-ink group-hover:text-accent'
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink-2 transition-transform duration-300 ease-out ${
                    isOpen ? 'rotate-180 text-accent' : ''
                  }`}
                  aria-hidden="true"
                />
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
                    transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-8 text-[0.9375rem] sm:text-base text-ink-2 leading-[1.75] max-w-[66ch]">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
