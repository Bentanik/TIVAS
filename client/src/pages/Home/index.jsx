import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Button } from "@mui/material";
import ResortBox from "~/components/ResortBox";
import RealEstateForSale from "~/components/RealEstateForSale/RealEstateForSale";
import MiddleHome from "~/components/MiddleHome/MiddleHome";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("intro")}>
      <header>
        <div className={cx("title-slogan")}>
          <div>
            <h1 className={cx("title")}>TIVACS</h1>
            <div className={cx("title-right")}>
              <Button className={cx("login-button")}>SIGN IN</Button>
              <div className={cx("register-op")}>REGISTER FOR FREE!</div>
            </div>
          </div>
          <div className={cx("line")}></div>
          <div className={cx("option")}>
            <a>About</a>
            <a>Books</a>
            <a>Hotels</a>
            <a>Vila</a>
            <a>Stories</a>
          </div>
          <div className={cx("slogan")}>
            <span>We LOVE Tivas, it has given us flexibility and tools to make timeshare ownership not a burden, but rather a blessing. We have referred and booked weeks for family and friends through Tivas too! I feel like we are telling people about it everyday. I cannot thank you enough!</span>
          </div>
        </div>
        <div className={cx("main")}>
          <img className={cx("header-img")} src={require("../../assets/The 8 Best Beaches on Koh Samui in Thailand - Northabroad.jpg")}>
          </img>
        </div>
      </header>
      {/* Body */}
      <div className={cx("body")}>
        <h1 className={cx("top-resort")}>
          TOP RESORT
        </h1>
        <div className={cx("list-box")}><ResortBox /></div>
        <div className={cx("list-box3")}><MiddleHome /></div>
        <div>
         <div>
         <h2 className={cx("rentals")}>Real estate for rentals</h2></div>
        
          <div className={cx("list-box2")}><RealEstateForSale /></div>
        </div>
      </div>
      {/*Footerrrrrrrr*/}
      <footer>
        <div>
          <div>
            <div className={cx("footer-wrapper")} style={{display: 'flex'}}>
              <div className={cx("navigation-2")}>
                <div className={cx("nav-item1")}>ABOUT US</div>
                <div className={cx("nav-item")}>Testimonial & Reviews</div>
                <div className={cx("nav-item")}>Contact us</div>
                <div className={cx("nav-item")}>Press</div>
              </div>
              <div className={cx("navigation-2")}>
                <div className={cx("nav-item1")}>ABOUT US</div>
                <div className={cx("nav-item")}>Travel Guides and Tips</div>
                <div className={cx("nav-item")}>Help Resources and Articles</div>
                <div className={cx("nav-item")}>Owner Resources</div>
                <div className={cx("nav-item")}>FAQs</div>
              </div>
              <div className={cx("navigation-2", "footer-contact")}>
                <div>
                  <div className={cx("nav-item-rentals")}>TIMESHARE FOR RENTALS</div>
                  <div className={cx("box-contact")}>
                    <div className={cx("contact-item")}>Find a Timeshare to Rent</div>
                    <div className={cx("contact-item")}>Rent My Timeshare </div>
                  </div>
                </div>
                <div>
                  <div className={cx("nav-item2")}>TIMESHARE FOR SALE</div>
                  <div className={cx("box-contact")}>
                    <div className={cx("contact-item")}>Find a Timeshare for Sale</div>
                    <div className={cx("contact-item")}>Buy Timeshare Points</div>
                    <div className={cx("contact-item")}>Buy Timeshare Points</div>
                  </div>
                </div>
              </div>
              <div className={cx("navigation-2")}>
                <div className={cx("nav-item1")}>ABOUT US</div>
                <div className={cx("nav-item")}>Travel Guides and Tips</div>
                <div className={cx("nav-item")}>Help Resources and Articles</div>
                <div className={cx("nav-item")}>Owner Resources</div>
                <div className={cx("nav-item")}>FAQs</div>
              </div>
              <div className={cx("navigation-2", "footer-contact")}>
                <div className={cx("nav-item1")}>Social</div>
                <div className={cx("box-contact")}>
            </div>
                <div className={cx("social-item")}>
                  {/* Icontwitter */}
                  <div className="icon-social">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 78 78" fill="none">
                      <g clipPath="url(#clip0_806_223)">
                        <path d="M59.5244 0H18.6182C8.65115 0 0.571289 8.18479 0.571289 18.2812V59.7188C0.571289 69.8152 8.65115 78 18.6182 78H59.5244C69.4914 78 77.5713 69.8152 77.5713 59.7188V18.2812C77.5713 8.18479 69.4914 0 59.5244 0Z" fill="white" />
                        <path d="M59.5244 0H18.6182C8.65115 0 0.571289 8.18479 0.571289 18.2812V59.7188C0.571289 69.8152 8.65115 78 18.6182 78H59.5244C69.4914 78 77.5713 69.8152 77.5713 59.7188V18.2812C77.5713 8.18479 69.4914 0 59.5244 0Z" fill="#1D9BF0" />
                        <path d="M60.5988 27.8518C60.6319 28.3353 60.6319 28.8189 60.6319 29.307C60.6319 44.1748 49.4585 61.322 29.0273 61.322V61.3129C22.9916 61.3217 17.0809 59.5706 12.001 56.2688C12.8787 56.3757 13.7605 56.429 14.6448 56.4312C19.6473 56.4351 24.5059 54.7355 28.4399 51.6052C26.122 51.5608 23.8758 50.7838 22.0153 49.3829C20.1548 47.9819 18.7729 46.027 18.0629 43.7915C19.7271 44.1165 21.4427 44.0502 23.0775 43.5977C17.8957 42.5371 14.1675 37.9251 14.1675 32.5686V32.4261C15.7123 33.2976 17.4411 33.7806 19.2086 33.8343C14.3281 30.53 12.8236 23.9527 15.7707 18.8102C18.5593 22.2863 22.0386 25.1294 25.9826 27.1547C29.9267 29.1799 34.2471 30.3421 38.6634 30.5656C38.2231 28.6456 38.2881 26.6421 38.852 24.7556C39.4159 22.869 40.4589 21.1655 41.8767 19.8153C46.3505 15.5552 53.3867 15.7737 57.5922 20.3031C60.0797 19.8057 62.4651 18.8819 64.6458 17.5716C63.8166 20.1769 62.0814 22.3883 59.7629 23.7946C61.9648 23.5318 64.1152 22.9347 66.1416 22.0234C64.6509 24.2848 62.7739 26.2583 60.5988 27.8518Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_806_223">
                          <rect width="77" height="78" fill="white" transform="translate(0.571289)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  {/* icon facebook */}
                  <div className="icon-social">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 78" fill="none">
                      <g clipPath="url(#clip0_806_220)">
                        <path d="M78.5713 39C78.5713 17.461 61.1103 0 39.5713 0C18.0323 0 0.571289 17.4607 0.571289 39C0.571289 58.4659 14.8331 74.6006 33.4775 77.5262V50.2734H23.5752V39H33.4775V30.4078C33.4775 20.6334 39.3001 15.2344 48.2083 15.2344C52.4754 15.2344 56.9385 15.9961 56.9385 15.9961V25.5938H52.0208C47.1757 25.5938 45.665 28.6001 45.665 31.6845V39H56.4814L54.7523 50.2734H45.665V77.5262C64.3095 74.6006 78.5713 58.4662 78.5713 39Z" fill="#1877F2" />
                        <path d="M54.7523 50.2734L56.4814 39H45.665V31.6845C45.665 28.5998 47.176 25.5938 52.0208 25.5938H56.9385V15.9961C56.9385 15.9961 52.4754 15.2344 48.2083 15.2344C39.3001 15.2344 33.4775 20.6334 33.4775 30.4078V39H23.5752V50.2734H33.4775V77.5262C35.4934 77.8421 37.5308 78.0005 39.5713 78C41.6118 78.0006 43.6492 77.8422 45.665 77.5262V50.2734H54.7523Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_806_220">
                          <rect width="78" height="78" fill="white" transform="translate(0.571289)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  {/* icon Insta */}
                  <div className="icon-social">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 78 78" fill="none">
                      <path d="M59.375 0.449219H18.176C8.13768 0.449219 0 8.5869 0 18.6252V59.8242C0 69.8626 8.13768 78.0002 18.176 78.0002H59.375C69.4133 78.0002 77.551 69.8626 77.551 59.8242V18.6252C77.551 8.5869 69.4133 0.449219 59.375 0.449219Z" fill="url(#paint0_radial_806_216)" />
                      <path d="M59.375 0.449219H18.176C8.13768 0.449219 0 8.5869 0 18.6252V59.8242C0 69.8626 8.13768 78.0002 18.176 78.0002H59.375C69.4133 78.0002 77.551 69.8626 77.551 59.8242V18.6252C77.551 8.5869 69.4133 0.449219 59.375 0.449219Z" fill="url(#paint1_radial_806_216)" />
                      <path d="M38.7782 8.9314C30.5511 8.9314 29.5184 8.96745 26.2873 9.11437C23.0623 9.2622 20.8609 9.77264 18.9348 10.5218C16.9421 11.2955 15.2521 12.3306 13.5684 14.0149C11.8832 15.6989 10.848 17.389 10.0719 19.3808C9.32064 21.3074 8.80959 23.5098 8.66448 26.7333C8.51998 29.9647 8.48212 30.9977 8.48212 39.2251C8.48212 47.4524 8.51847 48.4818 8.66509 51.7129C8.81353 54.9379 9.32397 57.1394 10.0725 59.0654C10.8468 61.0581 11.8819 62.7482 13.5663 64.4319C15.2497 66.1171 16.9397 67.1546 18.9309 67.9283C20.8585 68.6775 23.0602 69.1879 26.2846 69.3358C29.516 69.4827 30.5478 69.5187 38.7746 69.5187C47.0026 69.5187 48.0319 69.4827 51.263 69.3358C54.488 69.1879 56.6919 68.6775 58.6195 67.9283C60.6112 67.1546 62.2989 66.1171 63.982 64.4319C65.6672 62.7482 66.702 61.0581 67.4784 59.0663C68.2231 57.1394 68.7344 54.9373 68.8859 51.7135C69.031 48.4824 69.0688 47.4524 69.0688 39.2251C69.0688 30.9977 69.031 29.9653 68.8859 26.7339C68.7344 23.5089 68.2231 21.3078 67.4784 19.3817C66.702 17.389 65.6672 15.6989 63.982 14.0149C62.2971 12.33 60.6119 11.2949 58.6176 10.5221C56.6864 9.77264 54.4838 9.2619 51.2588 9.11437C48.0274 8.96745 46.9986 8.9314 38.7688 8.9314H38.7782ZM36.0606 14.3906C36.8673 14.3894 37.7673 14.3906 38.7782 14.3906C46.8668 14.3906 47.8253 14.4196 51.0195 14.5648C53.9731 14.6999 55.5762 15.1933 56.644 15.6081C58.0578 16.157 59.0657 16.8134 60.1253 17.874C61.1856 18.9343 61.8418 19.9439 62.3922 21.3577C62.8069 22.4241 63.301 24.0272 63.4355 26.9808C63.5806 30.1743 63.6121 31.1334 63.6121 39.2181C63.6121 47.3028 63.5806 48.2622 63.4355 51.4554C63.3004 54.409 62.8069 56.0121 62.3922 57.0788C61.8433 58.4926 61.1856 59.4992 60.1253 60.5589C59.0651 61.6191 58.0584 62.2753 56.644 62.8245C55.5774 63.241 53.9731 63.7333 51.0195 63.8684C47.8259 64.0135 46.8668 64.045 38.7782 64.045C30.6893 64.045 29.7305 64.0135 26.5373 63.8684C23.5837 63.7321 21.9805 63.2386 20.9118 62.8239C19.4983 62.2747 18.4883 61.6185 17.4281 60.5583C16.3678 59.498 15.7116 58.4907 15.1612 57.0763C14.7465 56.0097 14.2524 54.4066 14.1179 51.453C13.9728 48.2595 13.9437 47.3004 13.9437 39.2105C13.9437 31.121 13.9728 30.1667 14.1179 26.9732C14.253 24.0196 14.7465 22.4165 15.1612 21.3486C15.7104 19.9349 16.3678 18.9252 17.4284 17.8649C18.4886 16.8046 19.4983 16.1482 20.9121 15.5981C21.9799 15.1815 23.5837 14.6893 26.5373 14.5535C29.3318 14.4272 30.4148 14.3894 36.0606 14.383V14.3906ZM54.9488 19.4205C52.9419 19.4205 51.3136 21.0472 51.3136 23.0545C51.3136 25.0614 52.9419 26.6897 54.9488 26.6897C56.9557 26.6897 58.584 25.0614 58.584 23.0545C58.584 21.0475 56.9557 19.4193 54.9488 19.4193V19.4205ZM38.7782 23.6679C30.187 23.6679 23.2214 30.6336 23.2214 39.2251C23.2214 47.8166 30.187 54.7789 38.7782 54.7789C47.3697 54.7789 54.3329 47.8166 54.3329 39.2251C54.3329 30.6339 47.3691 23.6679 38.7776 23.6679H38.7782ZM38.7782 29.1271C44.3549 29.1271 48.8762 33.6478 48.8762 39.2251C48.8762 44.8018 44.3549 49.3231 38.7782 49.3231C33.2012 49.3231 28.6805 44.8018 28.6805 39.2251C28.6805 33.6478 33.2012 29.1271 38.7782 29.1271Z" fill="white" />


                      <defs>
                        <radialGradient id="paint0_radial_806_216" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.5995 83.9732) rotate(-90) scale(76.8588 71.4848)">
                          <stop stopColor="#FFDD55" />
                          <stop offset="0.1" stopColor="#FFDD55" />
                          <stop offset="0.5" stopColor="#FF543E" />
                          <stop offset="1" stopColor="#C837AB" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_806_216" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-12.9901 6.03562) rotate(78.681) scale(34.3563 141.618)">
                          <stop stopColor="#3771C8" />
                          <stop offset="0.128" stopColor="#3771C8" />
                          <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            <div className={cx("footer-text")}>
              <div>© 2024 Tivas.com</div>
              <div className={cx("a1")}>Term of service</div>
              <div className={cx("a1")}>Privacy Prolite</div>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
