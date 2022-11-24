import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #FBFBFB;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .testimonial-swiper {
    padding: 1rem 1rem 80px 1rem;

    & > .swiper-wrapper .swiper-slide {
      height: auto;
    }

    & > .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100% !important;
      padding: 0 1rem;
      background: transparent;
      gap: 2rem;

      & > .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        border-radius: 100%;
        background: #BDD4FF;
        opacity: 1;
        scale: 1;
        margin: 0;
      }

      & > .swiper-pagination-bullet-active {
        width: 20px;
        height: 20px;
        background: ${({ theme }) => theme.colors.secondary};
        display: flex;
        justify-content: center;
        align-items: center;
        
        & > .circle {
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background: #FBFBFB;
        }
      }
    }
  }
`

export default GlobalStyle
