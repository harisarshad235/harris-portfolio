import React from 'react';
import styled from 'styled-components';

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 12px 32px rgba(26, 135, 129, 0.08));
  }

  .grid-line {
    stroke: ${(props) => props.theme.colors.border};
    stroke-dasharray: 4 6;
  }

  .orbit {
    stroke: ${(props) => props.theme.colors.border};
    opacity: 0.7;
  }

  .path-primary {
    stroke: ${(props) => props.theme.colors.teal};
    stroke-width: 2;
    opacity: 0.85;
  }

  .path-accent {
    stroke: ${(props) => props.theme.colors.accent1};
    stroke-width: 2;
    opacity: 0.8;
  }

  .node-outer {
    fill: ${(props) => props.theme.colors.background1};
    stroke: ${(props) => props.theme.colors.teal};
    stroke-width: 2;
  }

  .node-accent {
    fill: ${(props) => props.theme.colors.background1};
    stroke: ${(props) => props.theme.colors.accent1};
    stroke-width: 2;
  }

  .node-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    transform-origin: center;
  }

  .node-pulse-alt {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite;
    transform-origin: center;
  }

  .signal-dot {
    fill: ${(props) => props.theme.colors.accent1};
  }

  .label-text {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    fill: ${(props) => props.theme.colors.muted};
  }

  @keyframes pulse {
    0%, 100% {
      r: 6;
      opacity: 0.9;
    }
    50% {
      r: 14;
      opacity: 0.15;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .node-pulse,
    .node-pulse-alt,
    animateMotion {
      animation: none !important;
    }
  }
`;

const BackgroundAnimation = () => (
  <SvgContainer>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A8781" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#E5674F" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#1A8781" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="delivery-flow" x1="80" y1="500" x2="520" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1A8781" />
          <stop offset="50%" stopColor="#E5674F" />
          <stop offset="100%" stopColor="#1A8781" />
        </linearGradient>
      </defs>

      {/* Ambient background glow */}
      <circle cx="300" cy="300" r="260" fill="url(#pm-glow)" />

      {/* Concentric PM governance & delivery rings */}
      <circle className="orbit" cx="300" cy="300" r="230" strokeWidth="1" strokeDasharray="3 7" />
      <circle className="orbit" cx="300" cy="300" r="170" strokeWidth="1.2" />
      <circle className="orbit" cx="300" cy="300" r="105" strokeWidth="1" strokeDasharray="6 6" />

      {/* Axis & radar coordination lines */}
      <line className="grid-line" x1="70" y1="300" x2="530" y2="300" strokeWidth="1" />
      <line className="grid-line" x1="300" y1="70" x2="300" y2="530" strokeWidth="1" />
      <line className="grid-line" x1="140" y1="140" x2="460" y2="460" strokeWidth="1" />
      <line className="grid-line" x1="140" y1="460" x2="460" y2="140" strokeWidth="1" />

      {/* Primary Project Delivery Lifecycle Flow */}
      <path
        id="delivery-path"
        d="M 100 480 C 180 430, 190 340, 260 320 C 330 300, 360 210, 480 140"
        fill="none"
        stroke="url(#delivery-flow)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Agile sprint feedback loop */}
      <path
        id="sprint-loop"
        d="M 260 320 C 230 250, 330 220, 350 280 C 370 330, 310 370, 260 320"
        fill="none"
        className="path-accent"
        strokeDasharray="4 4"
      />

      {/* Secondary workstream (Governance & PMO) */}
      <path
        d="M 140 220 C 220 200, 300 240, 380 200 C 430 170, 470 240, 510 230"
        fill="none"
        className="path-primary"
        strokeDasharray="5 5"
      />

      {/* Animated signal traveler along primary delivery path */}
      <circle r="4.5" className="signal-dot">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#delivery-path" />
        </animateMotion>
      </circle>

      {/* Animated signal traveler on sprint loop */}
      <circle r="3.5" fill="#1A8781">
        <animateMotion dur="4.5s" repeatCount="indefinite">
          <mpath href="#sprint-loop" />
        </animateMotion>
      </circle>

      {/* Stage Nodes & Radar Markers */}
      {/* Node 1: Initiation */}
      <circle cx="100" cy="480" r="16" className="node-pulse" fill="#1A8781" />
      <circle cx="100" cy="480" r="7" className="node-outer" />
      <text x="100" y="515" textAnchor="middle" className="label-text">Initiation</text>

      {/* Node 2: PMO Governance */}
      <circle cx="195" cy="360" r="6" className="node-accent" />
      <text x="145" y="380" className="label-text">PMO Governance</text>

      {/* Node 3: Agile Execution & Sprints */}
      <circle cx="300" cy="300" r="22" className="node-pulse-alt" fill="#E5674F" />
      <circle cx="300" cy="300" r="9" className="node-accent" />
      <circle cx="300" cy="300" r="3" fill="#E5674F" />
      <text x="300" y="270" textAnchor="middle" className="label-text">Agile Execution</text>

      {/* Node 4: Quality & UAT */}
      <circle cx="395" cy="195" r="7" className="node-outer" />
      <text x="415" y="198" className="label-text">UAT &amp; Readiness</text>

      {/* Node 5: Enterprise Release */}
      <circle cx="480" cy="140" r="18" className="node-pulse" fill="#1A8781" />
      <circle cx="480" cy="140" r="8" className="node-outer" />
      <circle cx="480" cy="140" r="3" fill="#1A8781" />
      <text x="480" y="115" textAnchor="middle" className="label-text">Deployment</text>

      {/* Telemetry data ticks on the outer perimeter */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        <line x1="300" y1="65" x2="300" y2="75" />
        <line x1="300" y1="525" x2="300" y2="535" />
        <line x1="65" y1="300" x2="75" y2="300" />
        <line x1="525" y1="300" x2="535" y2="300" />
        <line x1="135" y1="135" x2="142" y2="142" />
        <line x1="458" y1="458" x2="465" y2="465" />
      </g>
    </svg>
  </SvgContainer>
);

export default BackgroundAnimation;