'use client';

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQSection() {
  const faqs = [
    {
      question:
        'How long does Private Limited Company Registration take?',
      answer:
        'The registration process generally takes 7-15 working days depending on document verification and approvals.',
    },
    {
      question:
        'What documents are required for company registration?',
      answer:
        'PAN Card, Aadhaar Card, Photograph, Address Proof and Business Address Proof are required.',
    },
    {
      question:
        'Can I register a company from home?',
      answer:
        'Yes, the entire registration process can be completed online.',
    },
    {
      question:
        'How many directors are required?',
      answer:
        'A minimum of two directors are required.',
    },
    {
      question:
        'Is GST registration mandatory?',
      answer:
        'GST registration depends on turnover and business activities.',
    },
    {
      question:
        'Can foreign nationals become directors?',
      answer:
        'Yes, foreign nationals can become directors in an Indian company.',
    },
    {
      question:
        'What is the minimum capital requirement?',
      answer:
        'There is no mandatory minimum capital requirement.',
    },
    {
      question:
        'Can I change the company name later?',
      answer:
        'Yes, company names can be changed through the proper legal process.',
    },
    {
      question:
        'Do I need a physical office?',
      answer:
        'No, a residential address can also be used as a registered office.',
    },
    {
      question:
        'Why should I choose Burnix?',
      answer:
        'Burnix offers affordable registration, expert guidance and ongoing compliance support.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f7f8fa',
      }}
    >
      <Container
        maxWidth="lg"
      >
        {/* Heading */}

        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: '2rem',
                md: '3rem',
              },
            }}
          >
            Frequently Asked{' '}
            <Box
              component="span"
              sx={{
                color: '#ed3c0a',
              }}
            >
              Questions
            </Box>
          </Typography>
        </Box>

        {/* FAQ */}

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            sx={{
              mb: 2,
              borderRadius: '12px !important',
              overflow: 'hidden',
              border: '1px solid #ececec',

              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon />
              }
              sx={{
                backgroundColor: '#fff',
                minHeight: 70,

                '& .MuiAccordionSummary-content':
                  {
                    my: 2,
                  },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: {
                    xs: '1rem',
                    md: '1.15rem',
                  },
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor:
                  '#FFF4E5',
                borderTop:
                  '1px solid #f3e0b6',
              }}
            >
              <Typography
                sx={{
                  color: '#444',
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}