// Add new credentials here; categories automatically appear as filter options.
export const credentials = [
  {
    id: 'pmp',
    title: 'Project Management Professional (PMP)',
    category: 'Professional certifications',
    issuer: 'Project Management Institute (PMI)',
    description: 'Globally recognized certification validating the knowledge and skills to lead projects from initiation through closing.',
    verificationUrl: 'https://www.credly.com/badges/40e35bb3-5e1c-488a-a65d-d7d92d5a8310/public_url',
    verificationLabel: 'Verify PMP credential',
    certificateFile: '/credentials/pmi-certification.pdf',
    certificateFileLabel: 'View PMI certificate',
  },
  {
    id: 'power-bi-lums',
    title: 'Microsoft Power BI',
    category: 'Courses & training',
    issuer: 'LUMS Centre for Continuing Education Studies',
    date: 'Completed April 2025',
    description: 'Completed the Microsoft Power BI course, building practical skills in data analysis and reporting.',
    certificateImage: '/credentials/lums-power-bi-certificate.png',
    verificationLabel: 'View course certificate',
  },
  {
    id: 'pmi-membership',
    title: 'PMI Membership',
    category: 'Professional memberships',
    issuer: 'Project Management Institute (PMI)',
    description: 'Member of the global professional association for project managers.',
    certificateFile: '/credentials/pmi-member-card.pdf',
    certificateFileLabel: 'View PMI member badge',
  },
];
