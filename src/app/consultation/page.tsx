import ServicePage from '@/components/ServicePage';

export default function ConsultationPage() {
  const sections = [
    {
      title: 'Business Setup Consultation',
      content: `Planning to start a new business? Our consultation experts will help you choose the right business structure, understand regulatory requirements, and plan your business setup. We provide guidance on company registration, licensing, and initial compliance requirements.`,
    },
    {
      title: 'Legal and Compliance Advisory',
      content: `We provide strategic advisory on legal matters and compliance requirements. Whether you need guidance on employment law, contract preparation, dispute resolution, or regulatory compliance, our experienced consultants are here to assist you.`,
    },
    {
      title: 'Financial Planning',  
      content: `Our financial planning consultants help you understand your financial position, plan for growth, and optimize your financial structure. We provide advice on accounting practices, financial reporting, and cash flow management for better business control.`,
    },
    {
      title: 'Tax Planning Consultation',
      content: `Get personalized tax planning advice tailored to your business needs. Our tax consultants analyze your income sources, identify optimization opportunities, and develop strategies to minimize your tax liability while maintaining full compliance.`,
    },
    {
      title: 'One-on-One Expert Sessions',
      content: `Schedule personalized consultation sessions with our team of experts. We discuss your specific business challenges, provide recommendations, and create actionable plans for your business growth and success.`,
    },
  ];

  return (
    <ServicePage
      title="Business Consultation"
      description="Expert guidance for business setup, compliance, legal matters, and financial planning"
      sections={sections}
    />
  );
}
