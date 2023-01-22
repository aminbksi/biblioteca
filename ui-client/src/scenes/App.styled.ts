import { createGlobalStyle } from "styled-components";
import image from "../static/images/PublicImages/image-2.jpg";

export const GlobalStyles = createGlobalStyle`
:root{
    --mainOpacity: rgba(0, 0, 0, 0.55);
}

.header {
    background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${image});
    opacity: var(--mainOpacity);
    height: 25em !important;
}

.dark-overlay {
    background-color: rgba(0, 0, 0, 0.35);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

.main-color {
background-color: #0e76a8 ;
}

.col-image-left {
    background-image: url("./Images/PublicImages/image-4.jpg");
    height: 25em !important;
}

.col-image-right {
    background-image: url("./Images/PublicImages/image-1.jpg");
    height: 25em !important;
}

.lost-image {
    background-image: url("./Images/PublicImages/image-3.jpg");
    height: 25em !important;
    width: "720"
}

.homepage-carousel-title {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }

.book-div {
    width: 480px;
    height: 384px;
}

.inactiveLink {
    pointer-events: none;
    cursor: default;
 }


`;
