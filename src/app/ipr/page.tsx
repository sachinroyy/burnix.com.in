import ServicePage from '@/components/ServicePage';

export default function IPRPage() {
  const sections = [
    {
      title: 'Trademark Registration',
      content: `Protect your brand name and logo through trademark registration. We handle the complete trademark filing process including prior art search, application filing with the Trademark Office, responding to official objections, and obtaining your trademark certificate.`,
    },
    {
      title: 'Patent Filing',
      content: `Patent your innovative inventions and technological advancements. Our patent experts assist with prior art search, preparing comprehensive patent specifications, filing with the Patent Office, and managing the prosecution process until grant of patent.`,
    },
    {
      title: 'Copyright Registration',
      content: `Register your creative works including literary, artistic, and digital content. Copyright registration provides legal proof of ownership and helps protect your intellectual property rights. We manage the entire registration process with the Copyright Office.`,
    },
    {
      title: 'Design Registration',
      content: `Protect the visual appearance and design of your products through design registration. We handle design searches, filing applications, responding to examiner queries, and obtaining design certificates to protect your industrial designs.`,
    },
    {
      title: 'IPR Portfolio Management',
      content: `We help you build and manage a comprehensive intellectual property portfolio. Our services include maintenance of IP registrations, renewal filings, enforcement of rights, and strategic IP planning for your business growth and competitive advantage.`,
    },
  ];

  return (
    <ServicePage
      title="Intellectual Property Rights (IPR)"
      description="Complete IPR solutions including trademark, patent, copyright, and design registration"
      sections={sections}
    />
  );
}
