import ColorModeToggle from '@lekoarts/gatsby-theme-emilia/src/components/colormode-toggle';
import SocialMediaList from '@lekoarts/gatsby-theme-emilia/src/components/social-media-list';
import React from 'react';
import { Box, Container, Flex, useColorMode } from 'theme-ui';
// import useEmiliaConfig from '@lekoarts/gatsby-theme-emilia/src/hooks/use-emilia-config';
// @ts-ignore
import AboutMeMDX from '../texts/about-me';

const Footer = () => {
 //  const { showThemeAuthor } = useEmiliaConfig();
 const [colorMode, setColorMode] = useColorMode();
 const isDark = colorMode === `dark`;
 const toggleColorMode = (e) => {
  e.preventDefault();
  setColorMode(isDark ? `light` : `dark`);
 };

 return (
  <Box
   as='footer'
   variant='layout.footer'
   sx={{
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${
     isDark ? `0.35` : `0.15`
    }) 100%)`,
   }}
  >
   <Container>
    <div
     sx={{
      display: `grid`,
      gridGap: 4,
      gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `2fr 1fr`],
     }}
    >
     <div
      sx={{
       p: { mb: 0 },
       h2: {
        mt: 0,
        mb: 1,
       },
      }}
     >
      <AboutMeMDX />
     </div>
     <Flex
      sx={{
       textAlign: [`center`, `center`, `center`, `right`],
       flexDirection: `column`,
       justifyContent: `space-between`,
      }}
     >
      <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      <div sx={{ mt: [4, 4, 4, 0] }}>
       <div sx={{ a: { ml: [1, 1, 1, 2], mr: [1, 1, 1, 0] } }}>
        <SocialMediaList />
       </div>
       <div sx={{ color: `textMuted` }}>
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
       </div>
      </div>
     </Flex>
    </div>
   </Container>
   {/* {showThemeAuthor && (
        <Container
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            color: `text`,
            fontWeight: `semibold`,
            a: { color: `text` },
            mt: 4,
          }}
        >
          {isDark ? (
            <img
              width="30"
              height="30"
              src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png"
              alt="LekoArts Logo"
            />
          ) : (
            <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2_w30.png" alt="LekoArts Logo" />
          )}
          {` `}
          <Link
            aria-label="Link to the theme's GitHub repository"
            sx={{ ml: 2 }}
            href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia"
          >
            Theme
          </Link>
          <div sx={{ mx: 1 }}>by</div>
          {` `}
          <Link
            aria-label="Link to the theme author's website"
            href="https://www.lekoarts.de?utm_source=emilia&utm_medium=Theme"
          >
            LekoArts
          </Link>
        </Container>
      )} */}
  </Box>
 );
};

export default Footer;
