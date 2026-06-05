import ServicePage from '@/components/ServicePage';

export default function RegistrationsPage() {
  const sections = [
    {
      title: 'Private Limited Company Registration',
      content: `A Private Limited Company is one of the most popular business structures in India. It offers limited liability to shareholders while providing flexibility in management and operations. Our experts will guide you through the entire registration process, from filing documents with the ROC to obtaining your Certificate of Incorporation.`,
    },
    {
      title: 'Why Choose Private Limited Company',
      content: `Private Limited Companies enjoy several advantages including limited liability protection, access to venture capital, ability to issue shares to employees, and enhanced credibility with customers and suppliers. We handle all the complexities of registration, compliance, and documentation.`,
    },
    {
      title: 'Documents Required',
      content: `You will need PAN and address proof of directors and shareholders, Memorandum and Articles of Association, address proof of the registered office, and DSC (Digital Signature Certificate) for all directors. Our team will guide you through preparing and submitting each document.`,
    },
    {
      title: 'Our Registration Process',
      content: `Our streamlined process includes initial consultation to understand your requirements, preparation of all necessary documents, filing with Ministry of Corporate Affairs, follow-ups with regulatory bodies, and finally obtaining your Certificate of Incorporation. We ensure the fastest possible turnaround time.`,
    },
    {
      title: 'Post-Registration Support',
      content: `After your company is registered, we provide ongoing support for statutory compliance, annual filings, GST registration, bank account opening, and other formalities. Our team remains your trusted partner for all regulatory matters.`,
    },
  ];

  return (
    <ServicePage
      title="Registrations"
      description="Comprehensive business registration services for companies, partnerships, and other entities"
      sections={sections}
    />
  );
}
