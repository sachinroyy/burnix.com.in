import ServicePage from '@/components/ServicePage';

export default function TaxationPage() {
  const sections = [
    {
      title: 'Income Tax Filing',
      content: `We provide professional income tax filing services for individuals and businesses. Our team ensures accurate preparation of tax returns, claiming of all available deductions, and timely filing before the statutory deadline to avoid penalties.`,
    },
    {
      title: 'Corporate Tax Services',
      content: `For corporations and business entities, we handle comprehensive corporate tax planning and filing. This includes computation of taxable income, preparation of financial statements, filing of corporate tax returns, and ensuring compliance with all corporate tax regulations.`,
    },
    {
      title: 'Tax Planning and Optimization',
      content: `We develop customized tax planning strategies to minimize your tax burden while ensuring full compliance with tax laws. Our strategies focus on tax-efficient structuring of your business, timing of income and deductions, and identification of available tax reliefs.`,
    },
    {
      title: 'Transfer Pricing',
      content: `For businesses with international transactions, we provide transfer pricing services to ensure compliance with arm length principle. We prepare transfer pricing documentation and help you navigate complex international tax regulations.`,
    },
    {
      title: 'Goods and Services Tax (GST)',
      content: `We handle complete GST compliance including GST registration, filing of GSTR-1, GSTR-3B, and other statutory returns. Our team ensures accurate tax calculation, timely filing, and optimization of input tax credit to reduce your GST liability.`,
    },
  ];

  return (
    <ServicePage
      title="Taxation"
      description="Expert taxation services for income tax, corporate tax, and GST compliance"
      sections={sections}
    />
  );
}
