import ServicePage from '@/components/ServicePage';

export default function MorePage() {
  const sections = [
    {
      title: 'GST Registration and Compliance',
      content: `GST registration is mandatory for businesses with turnover exceeding threshold limits. We assist with GST registration, monthly/quarterly return filing, input tax credit management, and GST audit assistance. Our team keeps you updated with latest GST amendments and notifications.`,
    },
    {
      title: 'FSSAI License',
      content: `For food and beverage businesses, FSSAI license is essential. We guide you through the FSSAI registration process, help prepare required documentation, and manage the licensing process. Post-license, we assist with compliance and renewal requirements.`,
    },
    {
      title: 'MSME Registration',
      content: `MSME (Micro, Small, and Medium Enterprises) registration provides several benefits including subsidized loans, tax incentives, and government support. We help you register your business as MSME and ensure compliance with all associated requirements.`,
    },
    {
      title: 'Trade License and Municipal Registration',
      content: `Obtain necessary trade licenses and municipal permissions for your business operations. We handle applications, documentation, and follow-ups with municipal corporations to ensure your business operates legally and without interruptions.`,
    },
    {
      title: 'Professional Registration',
      content: `We assist professionals including chartered accountants, company secretaries, lawyers, and other professionals with registration and compliance. Our services include professional body registrations, renewal filings, and compliance with professional standards.`,
    },
  ];

  return (
    <ServicePage
      title="More Services"
      description="Additional business services including GST, FSSAI, MSME, and professional registrations"
      sections={sections}
    />
  );
}
