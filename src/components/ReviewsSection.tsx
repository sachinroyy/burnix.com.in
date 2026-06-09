// 'use client';

// import {
//   Box,
//   Container,
//   Typography,
//   Avatar,
//   IconButton,
// } from '@mui/material';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';

// import { ChevronLeft, ChevronRight } from '@mui/icons-material';

// import 'swiper/css';
// import 'swiper/css/navigation';

// const reviews = [
//   {
//     name: 'Elrafact Technology Solutions',
//     review:
//       'Team burnix helped our company incorporated into MCA. The team was very professional and cooperative.',
//     logo: 'E',
//   },
//   {
//     name: 'TechNova Pvt Ltd',
//     review:
//       'Amazing experience. Fast registration process and excellent support team.',
//     logo: 'T',
//   },
//   {
//     name: 'Growify Solutions',
//     review:
//       'Very smooth incorporation process. Highly recommended for startups.',
//     logo: 'G',
//   },
//   {
//     name: 'NextGen Labs',
//     review:
//       'Professional service and timely response throughout the registration journey.',
//     logo: 'N',
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <Box
//       sx={{
//         py: 10,
//         background:
//           'linear-gradient(180deg,#f7fbff 0%,#edf6ff 100%)',
//         overflow: 'hidden',
//       }}
//     >
//       <Container
//         maxWidth={false}
//         sx={{
//           px: {
//             xs: 3,
//             md: '10%',
//           },
//         }}
//       >
//         <Box
//           sx={{
//             display: 'grid',
//             gridTemplateColumns: {
//               xs: '1fr',
//               lg: '40% 60%',
//             },
//             gap: 6,
//             alignItems: 'center',
//           }}
//         >
//           {/* Left Side */}

//           <Box>
//             <Typography
//               sx={{
//                 fontWeight: 800,
//                 lineHeight: 1.4,
//                 fontSize: {
//                   xs: '2rem',
//                   md: '3rem',
//                 },
//               }}
//             >
              
//               <Box
//                 component="span"
//                 sx={{
//                   color: '#ed3c0a',
//                 }}
//               >
//                 Burnix
//               </Box>{' '}
//               is used by tens of thousands of
//               founders to start, manage and grow
//               their business
//             </Typography>

//           <Typography
//   sx={{
//     mt: 3,
//     fontWeight: 700,
//     color: '#0f4c81',
//     fontSize: {
//       xs: '1.8rem',
//       md: '2.5rem',
//     },
//   }}
// >
//   50,000+
//   <Box
//     component="span"
//     sx={{
//       color: '#ed3c0a',
//       ml: 1,
//     }}
//   >
//     Happy Customers
//   </Box>
// </Typography>

//             <Typography
//               sx={{
//                 mt: 4,
//                 color: '#555',
//                 lineHeight: 1.8,
//               }}
//             >
//               We are one of India highest-rated
//               service providers helping founders
//               launch and scale businesses.
//             </Typography>
//           </Box>

//           {/* Right Side */}

//           <Box
//             sx={{
//               position: 'relative',
//             }}
//           >
//             {/* Floating Avatars */}

//             <Avatar
//               src="/images/user1.jpg"
//               sx={{
//                 position: 'absolute',
//                 top: -40,
//                 right: 180,
//                 width: 70,
//                 height: 70,
//                 border: '3px solid #f59e0b',
//                 zIndex: 2,
//               }}
//             />

//             <Avatar
//               src="/images/user2.jpg"
//               sx={{
//                 position: 'absolute',
//                 top: 80,
//                 right: -30,
//                 width: 70,
//                 height: 70,
//                 border: '3px solid #f59e0b',
//                 zIndex: 2,
//               }}
//             />

//             <Swiper
//               modules={[Navigation, Autoplay]}
//               navigation={{
//                 prevEl: '.prev-btn',
//                 nextEl: '.next-btn',
//               }}
//               autoplay={{
//                 delay: 2000,
//                 disableOnInteraction: false,
//               }}
//               loop
//             >
//               {reviews.map((item, index) => (
//                 <SwiperSlide key={index}>
//                   <Box
//                     sx={{
//                       p: 5,
//                       borderRadius: '30px',

//                       background:
//                         'rgba(255,255,255,0.35)',

//                       backdropFilter:
//                         'blur(25px)',

//                       border:
//                         '1px solid rgba(255,255,255,0.5)',

//                       boxShadow:
//                         '0 10px 40px rgba(0,0,0,.08)',

//                       minHeight: 420,
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         color: '#999',
//                         mb: 2,
//                       }}
//                     >
//                       Posted on
//                     </Typography>

//                     <Typography
//                       sx={{
//                         fontSize: '3rem',
//                         fontWeight: 700,
//                         color: '#4285F4',
//                         mb: 4,
//                       }}
//                     >
//                       Google
//                     </Typography>

//                     <Typography
//                       sx={{
//                         color: '#444',
//                         lineHeight: 2,
//                         fontSize: '1.05rem',
//                       }}
//                     >
//                       {item.review}
//                     </Typography>

//                     <Box
//                       sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 2,
//                         mt: 5,
//                       }}
//                     >
//                       <Avatar
//                         sx={{
//                           bgcolor: '#5C6BC0',
//                           width: 60,
//                           height: 60,
//                         }}
//                       >
//                         {item.logo}
//                       </Avatar>

//                       <Typography
//                         sx={{
//                           fontWeight: 700,
//                           fontSize: '1.6rem',
//                         }}
//                       >
//                         {item.name}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Navigation */}

//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'flex-end',
//                 gap: 2,
//                 mt: 3,
//               }}
//             >
//               <IconButton
//                 className="prev-btn"
//                 sx={{
//                   bgcolor: '#f59e0b',
//                   color: '#fff',
//                 }}
//               >
//                 <ChevronLeft />
//               </IconButton>

//               <IconButton
//                 className="next-btn"
//                 sx={{
//                   bgcolor: '#f59e0b',
//                   color: '#fff',
//                 }}
//               >
//                 <ChevronRight />
//               </IconButton>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import 'swiper/css';
import 'swiper/css/navigation';

interface Review {
  _id?: string;
  name: string;
  review: string;
  content?: string;
  logo?: string;
  imageUrl?: string;
  designation?: string;
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        console.log('Testimonials API:', data);

        if (Array.isArray(data)) {
          setReviews(data);
        } else if (Array.isArray(data?.data)) {
          setReviews(data.data);
        } else {
          setReviews([]);
        }
      })
      .catch((err) => {
        console.error('Testimonials Error:', err);
        setReviews([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        background:
          'linear-gradient(180deg,#f7fbff 0%,#edf6ff 100%)',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 3,
            md: '10%',
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '40% 60%',
            },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Left Side */}
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                lineHeight: 1.4,
                fontSize: {
                  xs: '2rem',
                  md: '3rem',
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  color: '#ed3c0a',
                }}
              >
                Burnix
              </Box>{' '}
              is used by tens of thousands of
              founders to start, manage and grow
              their business
            </Typography>

            <Typography
              sx={{
                mt: 3,
                fontWeight: 700,
                color: '#0f4c81',
                fontSize: {
                  xs: '1.8rem',
                  md: '2.5rem',
                },
              }}
            >
              50,000+
              <Box
                component="span"
                sx={{
                  color: '#ed3c0a',
                  ml: 1,
                }}
              >
                Happy Customers
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 4,
                color: '#555',
                lineHeight: 1.8,
              }}
            >
              We are one of India highest-rated
              service providers helping founders
              launch and scale businesses.
            </Typography>
          </Box>

          {/* Right Side */}
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <Avatar
              sx={{
                position: 'absolute',
                top: -40,
                right: 180,
                width: 70,
                height: 70,
                border: '3px solid #f59e0b',
                zIndex: 2,
              }}
            />

            <Avatar
              
              sx={{
                position: 'absolute',
                top: 80,
                right: -30,
                width: 70,
                height: 70,
                border: '3px solid #f59e0b',
                zIndex: 2,
              }}
            />

            {loading ? (
              <Typography>Loading testimonials...</Typography>
            ) : (
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: '.prev-btn',
                  nextEl: '.next-btn',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={reviews.length > 1}
              >
                {reviews.map((item, index) => (
                  <SwiperSlide key={item._id || index}>
                    <Box
                      sx={{
                        p: 5,
                        borderRadius: '30px',
                        background: item.imageUrl
                          ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${item.imageUrl})`
                          : 'rgba(255,255,255,0.35)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backdropFilter: item.imageUrl ? 'none' : 'blur(25px)',
                        border: item.imageUrl
                          ? '1px solid rgba(255,255,255,0.3)'
                          : '1px solid rgba(255,255,255,0.5)',
                        boxShadow:
                          '0 10px 40px rgba(0,0,0,.08)',
                        minHeight: 420,
                      }}
                    >
                      <Typography
                        sx={{
                          color: item.imageUrl ? '#fff' : '#999',
                          mb: 2,
                        }}
                      >
                        Posted on
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: item.imageUrl ? '#fff' : '#4285F4',
                          mb: 4,
                        }}
                      >
                        Google
                      </Typography>

                      <Typography
                        sx={{
                          color: item.imageUrl ? '#fff' : '#444',
                          lineHeight: 2,
                          fontSize: '1.05rem',
                        }}
                      >
                        {item.review || item.content}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mt: 5,
                        }}
                      >
                        <Avatar
                          src={item.imageUrl}
                          sx={{
                            bgcolor: '#5C6BC0',
                            width: 60,
                            height: 60,
                            border: item.imageUrl ? '2px solid #fff' : 'none',
                          }}
                        >
                          {!item.imageUrl &&
                            (item.logo ||
                              item.name?.charAt(0)?.toUpperCase())}
                        </Avatar>

                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '1.6rem',
                              color: item.imageUrl ? '#fff' : 'inherit',
                            }}
                          >
                            {item.name}
                          </Typography>
                          {item.designation && (
                            <Typography
                              sx={{
                                fontSize: '0.9rem',
                                color: item.imageUrl ? '#ddd' : '#666',
                              }}
                            >
                              {item.designation}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 2,
                mt: 3,
              }}
            >
              <IconButton
                className="prev-btn"
                sx={{
                  bgcolor: '#f59e0b',
                  color: '#fff',
                }}
              >
                <ChevronLeft />
              </IconButton>

              <IconButton
                className="next-btn"
                sx={{
                  bgcolor: '#f59e0b',
                  color: '#fff',
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}