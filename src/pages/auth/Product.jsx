import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Box,
  Grid,
  Typography,
  Rating,
} from '@mui/material';
import {
  Search,
  Favorite,
  ShoppingBagOutlined,
  AccountCircle,
} from '@mui/icons-material';
import logoImg from '../../assets/logo.png';
import LokalLogo from '../../assets/lokal.png';
import tshirtS from '../../assets/Circle(5).png';
import var3 from '../../assets/var3.jpg'; // Placeholder; replace with actual path
import var2 from '../../assets/var2.jpg'; // Placeholder; replace with actual path
import var1 from '../../assets/var1.jpg'; // Placeholder; replace with actual path
import ramy from '../../assets/ramy.jpg';

const ProductPage = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <style>{`
        :root {
          font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          font-weight: 400;
          color-scheme: red;
          color: rgba(5, 5, 5, 0.87);
          background-color: #242424;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: normal;
        }

        body {
          margin: 0;
          min-width: 320px;
          min-height: 100vh;
        }
      `}</style>

      <Box sx={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header: Referral Banner */}
        <Box bgcolor="#334B1C" color="#F8E2CF" py={1} textAlign="center" sx={{ borderBottom: '1px solid #e0e0e0' }}>
          Refer a friend & get <b style={{ color: '#FD862C' }}>200 EGP</b> in credits each ✨
        </Box>

        {/* Header: Navbar */}
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '2px solid #e0e0e0', backgroundColor: 'white' }}>
          <Toolbar sx={{ py: -1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 2 }}>
              <img src={logoImg} alt="Lokal Logo" style={{ height: 70, marginTop: 9, marginRight: 20 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button sx={{ color: "#334B1C", padding: '8px 16px', fontWeight: 550, fontSize: '23px', minWidth: 'max-content' }} onClick={() => navigate('/')}>
                  Home
                </Button>
                <Button sx={{ color: "#334B1C", padding: '8px 16px', fontWeight: 550, fontSize: '23px', minWidth: 'max-content' }} onClick={() => navigate('/shop')}>
                  Shop
                </Button>
                <Button sx={{ color: "#334B1C", padding: '8px 16px', fontWeight: 550, fontSize: '23px', minWidth: 'max-content' }} onClick={() => {}}>
                  Categories
                </Button>
              </Box>
              <Box sx={{ flexGrow: 1, maxWidth: 600, ml: 2, position: 'relative' }}>
                <input placeholder="Search" style={{ padding: '9px 50px 9px 24px', borderRadius: '11px', fontSize: '16px', width: '100%', border: '3px solid #334B1C', outline: 'none', boxSizing: 'border-box' }} />
                <Box sx={{ position: 'absolute', right: '17px', top: '55%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                  <Search sx={{ color: '#334B1C', fontSize: '27px' }} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#334B1C', padding: '8px' }}>
                <Favorite sx={{ fontSize: '37px' }} />
              </IconButton>
              <IconButton sx={{ color: '#334B1C', padding: '8px' }}>
                <ShoppingBagOutlined sx={{ fontSize: '37px' }} />
              </IconButton>
              <IconButton sx={{ color: '#334B1C', padding: '8px' }} onClick={() => navigate('/profile')}>
                <AccountCircle sx={{ fontSize: '37px' }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Body */}
        <Grid container sx={{ flexGrow: 1, py: 4 }}>
          {/* Left Section: Image */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <Box
              component="img"
              src={tshirtS}
              alt="Product"
              sx={{
                width: '100%',
                maxWidth: 800,
                height: '600px',
                maxHeight: 1000,
                borderRadius: 2,
                marginBottom: '350px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                objectFit: 'cover',
              }}
            />
          </Grid>

          {/* Right Section: Product Details */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, bgcolor: '#FFFCFA', marginLeft: '70px' }}>
            <Box sx={{ width: '100%', maxWidth: 800, py: 5, display: 'flex', flexDirection: 'column', gap: 3, marginLeft: '00px' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#334B1C' }}>
                EGP 1,950
              </Typography>
              <Typography sx={{ color: '#00000', fontSize: '1.125rem' }}>
                This soft and warm piece is perfect for any weather, ensuring you stay comfortable and cozy while looking great.
              </Typography>

              {/* Variations */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Typography sx={{ color: '#50554A', fontSize:'30px', fontWeight: 'medium' }}>Variations:</Typography>
                <Typography
                  sx={{
                    color: '#50554A',
                    fontSize: '1rem',
                    padding: '8px 16px',
                    border: '1px solid #50554A',
                    borderRadius: 2,
                    backgroundColor: 'transparent',
                  }}
                >
                  Black
                </Typography>
                <Typography
                  sx={{
                    color: '#50554A',
                    fontSize: '1rem',
                    padding: '8px 16px',
                    border: '1px solid #50554A',
                    borderRadius: 2,
                    backgroundColor: 'transparent',
                  }}
                >
                  M
                </Typography>
              </Box>

              {/* Variant Images */}
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Box
                  component="img"
                  src={var3}
                  alt="Var3"
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 2,
                    objectFit: 'cover',
                  }}
                />
                <Box
                  component="img"
                  src={var2}
                  alt="Var2"
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 2,
                    objectFit: 'cover',
                  }}
                />
                <Box
                  component="img"
                  src={var1}
                  alt="Var1"
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 2,
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Size Guide */}
              <a
                href="/size-guide" // Replace with actual URL or route
                style={{
                  color: '#334B1C',
                  fontSize:'30px',
                  fontWeight: 'medium',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
              >
                Size Guide
              </a>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
                    <Button
                      key={size}
                      variant="outlined"
                      sx={{
                        marginRight:'15px',
                        backgroundColor: '#FFFFFF',
                        color: '#000000',
                        borderWidth: '2px',
                        borderRadius: 2,
                        px: 5,
                        py: 2,
                        borderColor: size === 'M' ? '#F5E8C7' : size === 'XXL' ? '#000000' : size === 'XXXL' ? '#1C2525' : '#000000',
                        backgroundColor: size === 'M' ? '#F8E2CF' : size === 'XXL' ? '#50554A' : size === 'XXXL' ? '#50554A' : '#F9F9F9',
                        '&:hover': { backgroundColor: '#f5f5f5' },
                      }}
                    >
                      {size}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* Quantity */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography sx={{ fontSize:'30px',fontWeight: 'medium', color: '#ff9800',marginRight:'400px', }}>Quantity:</Typography>
                <Button
                  onClick={handleDecrement}
                  disabled={quantity === 1}
                  sx={{
                    borderRadius: '50%',
                    border: '2px solid #50554A',
                    color: '#FD862C',
                    minWidth: 40,
                    minHeight: 40,
                    padding: '1px',
                    '&:hover': { backgroundColor: '#fffff' },
                    '&:disabled': { color: '#a9a9a9', borderColor: '#a9a9a9', cursor: 'not-allowed' },
                  }}
                >
                  −
                </Button>
                <Typography
                  sx={{
                    backgroundColor: '#F8E2CF',
                    borderRadius: 4,
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    minWidth: 30,
                    textAlign: 'center',
                  }}
                >
                  {quantity}
                </Typography>
                <Button
                  onClick={handleIncrement}
                  sx={{
                    borderRadius: '50%',
                    border: '2px solid #50554A',
                    color: '#FD862C',
                    minWidth: 40,
                    minHeight: 40,
                    padding: '1px',
                    '&:hover': { backgroundColor: '#fffff' },
                  }}
                >
                  +
                </Button>
              </Box>

              {/* Delivery */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'semibold',fontSize:'30px',}}>
                  Delivery Options
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      border: '2px solid #FD862C',
                      color:'#334B1C',
                      borderRadius: 2,
                      py: 2,
                      px: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <Typography>Standard </Typography>
                    <Typography> (5-7 days) </Typography>
                    <Typography sx={{ fontWeight: 'medium' }}>Free</Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color:'#334B1C',
                      backgroundColor:'#FD862C',
                      border: '2px solid #FD862C',
                      borderRadius: 2,
                      py: 2,
                      px: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <Typography>Express</Typography>
                    <Typography>(1-2 days)</Typography>
                    <Typography sx={{ fontWeight: 'medium' }}>EGP 30.00</Typography>
                  </Button>
                </Box>
              </Box>

              {/* Ratings */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'semibold',fontSize:'30px',  }}>
                    Rating & Reviews
                  </Typography>
                  <a
                    href="/reviews" // Replace with actual URL or route
                    style={{
                      fontSize:'18px',
                      color: '#334B1C',
                      fontWeight: 'medium',
                      textDecoration: 'none',
                      marginLeft:'350px',
                    }}
                    onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    View all reviews
                  </a>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      component="img"
                      src={ramy}
                      alt="Ramy"
                      sx={{
                        width: 100,
                        height: 100,
                        marginLeft:'2px',
                      }}
                    />
                    <Typography sx={{ fontSize: '2rem', fontWeight: 'medium', color: '#000' }}>
                      Ramy
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Rating value={4.5} readOnly precision={0.5} size="large"/>
                    <Typography sx={{ fontWeight: 'medium' }}>4.5 (25 Reviews)</Typography>
                  </Box>
                </Box>
                <Typography sx={{ color: '#666' }}>
                  "The clothing piece is durable and soft with high quality construction. Fits perfectly and very comfortable to wear all day."
                </Typography>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    sx={{
                      color: '#334B1C',
                      border: '2px solid #334B1C',
                      borderRadius: '50%',
                      padding: '8px',
                      '&:hover': { backgroundColor: '#f5f5f5' },
                    }}
                  >
                    <Favorite sx={{ fontSize: '24px' }} />
                  </IconButton>
                </Box>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ flex: 1, py: 1.5, color: '#ffff', backgroundColor: '#334B1C', '&:hover': { backgroundColor: '#1b5e20' } }}
                >
                  Add to cart
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  sx={{ flex: 1, py: 1.5, backgroundColor: '#334B1C', '&:hover': { backgroundColor: '#1b5e20' } }}
                >
                  Buy Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box bgcolor="#F8E2CF" py={4} sx={{ width: '100%', mt: 'auto' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
              <Grid item xs={12} sm={3}>
                <Box display="flex" alignItems="center" mb={2}>
                  <img src={LokalLogo} alt="Lokal Footer Logo" style={{ height: 60 }} />
                </Box>
                <Typography color="#666" mb={2} fontSize={15}>
                  Download the app:
                </Typography>
                <Box display="flex" gap={1}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '40px', width: 'auto' }} />
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: '40px', width: 'auto' }} />
                </Box>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                  Pages
                </Typography>
                {['Home', 'Shop', 'Categories', 'Cart', 'Profile'].map((page) => (
                  <Typography key={page} color="#666" fontSize={14} mb={1}>{page}</Typography>
                ))}
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                  Customer Service
                </Typography>
                {['Shipping & Returns', 'Terms & Conditions', 'Privacy Policy', 'FAQs', 'Contact Us'].map((item) => (
                  <Typography key={item} color="#666" fontSize={14} mb={1}>{item}</Typography>
                ))}
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                  Contact
                </Typography>
                <Typography color="#666" fontSize={14} mb={1}>📞 (+20) 12345678910</Typography>
                <Typography color="#666" fontSize={14} mb={1}>📧 Lokal123@gmail.com</Typography>
                <Typography color="#666" fontSize={14} mb={1}>📍 2972 Smouha Rd. Garden City St, Alexandria</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                  Follow us
                </Typography>
                <Box display="flex" gap={2} mt={1}>
                  {[
                    { src: "https://cdn-icons-png.flaticon.com/512/124/124010.png", alt: "Facebook" },
                    { src: "https://cdn-icons-png.flaticon.com/512/733/733579.png", alt: "Twitter" },
                    { src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", alt: "Instagram" },
                    { src: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png", alt: "LinkedIn" },
                  ].map(({ src, alt }) => (
                    <IconButton key={alt} sx={{ p: 1, backgroundColor: 'rgba(0,0,0,0.05)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' } }}>
                      <img src={src} alt={alt} width={24} height={24} />
                    </IconButton>
                  ))}
                </Box>
              </Grid>
            </Grid>
            <Box mt={4} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
              <Typography fontSize={14} color="#666">©2025 LoKal. All rights reserved</Typography>
              <Box mt={1} display="flex" gap={1}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" style={{ height: '24px', width: 'auto' }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" style={{ height: '24px', width: 'auto' }} />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;