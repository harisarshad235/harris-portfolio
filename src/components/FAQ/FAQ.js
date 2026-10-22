import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ScrollReveal } from '../ui/MotionReveal';

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
      'Alongside managing enterprise client portfolios, I conceived, architected, and built two live cloud SaaS platforms: Takt (takt.harisarshad.site), a local-first task command center with Kanban swimlanes and Pomodoro flow cadence, and Kynov (kynov.harisarshad.site), an edge-native Agile sprint tracker with sub-50ms Kanban boards, velocity sparklines, Markdown ADR/PRD specs, and multi-tenant corporate RBAC on Cloudflare Workers and D1.',
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
    <Section id="faq">
      <ScrollReveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </span>
        </div>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionText>
          Key questions about my project management approach, portfolio delivery track record, and technical leadership.
        </SectionText>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="w-full max-w-4xl mx-auto space-y-3.5">
        {FAQ_DATA.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card overflow-hidden transition-[border-color,box-shadow] duration-200 shadow-xs hover:border-primary/30"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer hover:bg-secondary/50 active:scale-[0.99] transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                <span className="text-base sm:text-lg font-bold text-foreground">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isOpen ? 'rotate-180 bg-primary text-primary-foreground' : ''
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
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
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-7 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/50">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </ScrollReveal>
    </Section>
  );
}
