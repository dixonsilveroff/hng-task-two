/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
import React, { PureComponent } from "react";
import styled from "@emotion/styled";
import "../App.css";

const Container = styled.div`
  display: flex;
  margin-inline: auto;
  justify-content: space-between;
  align-items: center;
  padding: 26px 4rem;
  background-color: var(--bgrclr);
  color: #fff;
  max-height: 266px;
  height: 266px;
  gap: 2rem; 
`;
const Wrap1 = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  font-family: Archivo;
`;
const Wrap2 = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  font-family: Archivo;
`;
const Wrap3 = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  font-family: Archivo;
`;
const Wrap4 = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  font-family: Archivo;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
`;
const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-family: "Satoshi";
  font-size: 1rem;
  line-height: 20px;
  opacity: 0.5;
  display: block;
  text-align: left;
  margin-bottom: 8px;
  &:hover {
    opacity: 1;
    color: #fff;
    cursor: pointer;
  }
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <Container>
        <Wrap1>
          <p style={{ color: "#fff", textTransform: "uppercase" }}>
            be the first to know about new products
          </p>
          <div style={{ display: "flex" }}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              id="email"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #fff",
                padding: "10px 12px",
                borderRadius: "8px",
                borderRight: "none",
                lineHeight: "1rem",
                maxHeight: "2rem",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                minWidth: "16rem",
                width: "20rem",
              }}
            />
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.133 18.02C4.86234 18.1287 4.60567 18.1067 4.363 17.954C4.12034 17.8013 3.99934 17.5793 4 17.288V13.346L9.846 12L4 10.654V6.71199C4 6.41999 4.12134 6.19799 4.364 6.04599C4.60667 5.89399 4.86334 5.87166 5.134 5.97899L17.646 11.248C17.9727 11.398 18.136 11.65 18.136 12.004C18.136 12.3573 17.9727 12.6067 17.646 12.752L5.133 18.02Z"
                  fill="#1E1E1E"
                />
              </svg>
            </Button>
          </div>
        </Wrap1>
        <Wrap2>
          <p style={{ textAlign: "left", fontWeight: "600" }}>EXPLORE</p>
          <Link href="">New Collections</Link>
          <Link href="">Best Sellers</Link>
          <Link href="">Our Collections</Link>
        </Wrap2>
        <Wrap3>
          <p style={{ textAlign: "left", fontWeight: "600" }}>CONTACT US</p>
          <Link href="tel:+2348123456789">+234 8123456789</Link>
          <Link href="tel:+2348123456789">+234 8123456789</Link>
          <Link href="mailto:sneakers@gmail.com">sneakers@gmail.com</Link>
        </Wrap3>
        <Wrap4>
          <p style={{ textAlign: "left", fontWeight: "600" }}>SOCIAL</p>
          <Link href="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7506 0.83374H18.8174L12.1173 8.49146L19.9994 18.9119H13.8278L8.99397 12.592L3.46298 18.9119H0.394328L7.56069 10.7211L-0.000610352 0.83374H6.32767L10.697 6.6104L15.7506 0.83374ZM14.6742 17.0763H16.3736L5.40429 2.57295H3.58072L14.6742 17.0763Z"
                fill="white"
              />
            </svg>
            &nbsp; Twitter
          </Link>
          <Link href="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2029_107)">
                <path
                  d="M10.0005 -0.00012207C7.28473 -0.00012207 6.94391 0.0117532 5.87726 0.0602954C4.8127 0.109046 4.08605 0.277589 3.45023 0.524884C2.79253 0.780303 2.23463 1.12197 1.6788 1.67802C1.12256 2.23386 0.780904 2.79178 0.524659 3.44929C0.276747 4.08534 0.108001 4.81222 0.060085 5.8764C0.0123776 6.94308 -0.00012207 7.28412 -0.00012207 9.99999C-0.00012207 12.7158 0.0119612 13.0556 0.0602936 14.1223C0.109251 15.1869 0.277789 15.9136 0.524868 16.5494C0.780488 17.2071 1.12215 17.7651 1.67818 18.3209C2.23379 18.8772 2.7917 19.2197 3.44898 19.4751C4.08521 19.7224 4.81207 19.8909 5.87643 19.9397C6.94307 19.9882 7.28369 20.0001 9.99926 20.0001C12.7153 20.0001 13.055 19.9882 14.1217 19.9397C15.1862 19.8909 15.9137 19.7224 16.55 19.4751C17.2075 19.2197 17.7645 18.8772 18.3201 18.3209C18.8764 17.7651 19.218 17.2071 19.4743 16.5496C19.7201 15.9136 19.8889 15.1867 19.9389 14.1225C19.9868 13.0559 19.9993 12.7158 19.9993 9.99999C19.9993 7.28412 19.9868 6.94329 19.9389 5.87661C19.8889 4.81201 19.7201 4.08534 19.4743 3.4495C19.218 2.79178 18.8764 2.23386 18.3201 1.67802C17.7639 1.12177 17.2077 0.780095 16.5493 0.524884C15.9119 0.277589 15.1848 0.109046 14.1202 0.0602954C13.0536 0.0117532 12.714 -0.00012207 9.99739 -0.00012207H10.0005ZM9.10345 1.80198C9.36969 1.80156 9.66677 1.80198 10.0005 1.80198C12.6705 1.80198 12.9869 1.81156 14.0413 1.85948C15.0162 1.90407 15.5454 2.06698 15.8979 2.20386C16.3646 2.38511 16.6973 2.60178 17.047 2.95178C17.397 3.30179 17.6137 3.63513 17.7954 4.1018C17.9322 4.45388 18.0954 4.98306 18.1397 5.95807C18.1876 7.01225 18.1981 7.32892 18.1981 9.99769C18.1981 12.6665 18.1876 12.9831 18.1397 14.0373C18.0951 15.0123 17.9322 15.5415 17.7954 15.8936C17.6141 16.3603 17.397 16.6926 17.047 17.0424C16.6971 17.3924 16.3648 17.609 15.8979 17.7903C15.5458 17.9278 15.0162 18.0903 14.0413 18.1349C12.9871 18.1828 12.6705 18.1932 10.0005 18.1932C7.33036 18.1932 7.01391 18.1828 5.95976 18.1349C4.98478 18.0899 4.45562 17.9269 4.10292 17.7901C3.63626 17.6088 3.30294 17.3922 2.95294 17.0421C2.60295 16.6921 2.38629 16.3596 2.20463 15.8928C2.06775 15.5407 1.90463 15.0115 1.86026 14.0365C1.81234 12.9823 1.80276 12.6656 1.80276 9.99519C1.80276 7.32475 1.81234 7.00975 1.86026 5.95557C1.90484 4.98056 2.06775 4.45138 2.20463 4.09888C2.38587 3.63221 2.60295 3.29887 2.95294 2.94887C3.30294 2.59886 3.63626 2.3822 4.10292 2.20053C4.45542 2.06303 4.98478 1.90052 5.95976 1.85573C6.88224 1.81406 7.23974 1.80156 9.10345 1.79948V1.80198ZM15.3383 3.46242C14.6758 3.46242 14.1383 3.9993 14.1383 4.66201C14.1383 5.32452 14.6758 5.86202 15.3383 5.86202C16.0008 5.86202 16.5383 5.32452 16.5383 4.66201C16.5383 3.9995 16.0008 3.462 15.3383 3.462V3.46242ZM10.0005 4.86451C7.16453 4.86451 4.8652 7.16391 4.8652 9.99999C4.8652 12.8361 7.16453 15.1344 10.0005 15.1344C12.8365 15.1344 15.135 12.8361 15.135 9.99999C15.135 7.16391 12.8365 4.86451 10.0005 4.86451ZM10.0005 6.66662C11.8413 6.66662 13.3338 8.15893 13.3338 9.99999C13.3338 11.8408 11.8413 13.3334 10.0005 13.3334C8.15951 13.3334 6.66725 11.8408 6.66725 9.99999C6.66725 8.15893 8.15951 6.66662 10.0005 6.66662Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2029_107">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp; Instagram
          </Link>
          <Link href="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2029_112)">
                <path
                  d="M18.5596 8.40377C16.8035 8.44279 15.1645 7.89646 13.7597 6.88183V13.8671C13.7597 16.5207 12.1206 18.8622 9.62312 19.7988C7.16461 20.7353 4.35488 20.0329 2.63783 18.0427C0.881753 16.0134 0.569561 13.1647 1.81833 10.8233C3.06709 8.52084 5.64267 7.23305 8.2963 7.58427V11.0964C7.08656 10.7062 5.75975 11.1354 5.01829 12.1501C4.31586 13.2037 4.31586 14.5696 5.05731 15.5842C5.79877 16.5988 7.12558 17.0281 8.2963 16.6378C9.50604 16.2476 10.3255 15.1159 10.3255 13.8671V0.20874H13.7597C13.7597 0.520932 13.7597 0.794099 13.8377 1.10629C14.0718 2.39408 14.8133 3.52578 15.945 4.22821C16.6864 4.73552 17.623 5.00869 18.5596 5.00869V8.40377Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2029_112">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp; Tiktok
          </Link>
        </Wrap4>
      </Container>
    );
  }
}
