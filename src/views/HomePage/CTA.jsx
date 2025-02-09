import React, { useState } from 'react'

const CTA = () => {

  const [activeBgColor, setActiveBgColor] = useState(null);

  const CTAData = [
    {
      svgImg : 
              <svg className='p-[2px] bs:p-0' xmlns="http://www.w3.org/2000/svg" width="48" height="50" viewBox="0 0 48 50" fill="currentColor">
                <path d="M37.9277 28.1504L28.2832 33.5059V44.2227L37.9277 49.5781L47.5723 44.2227V33.5059L37.9277 28.1504ZM43.2832 41.7031L37.9277 44.6797L32.5723 41.7031V36.0312L37.9277 33.0547L43.2832 36.0312V41.7031Z" fill="currentColor"/>
                <path d="M35.8126 39.2103C35.8577 39.4883 35.9571 39.7547 36.1051 39.9942C36.2531 40.2338 36.4469 40.4419 36.6754 40.6066C36.9038 40.7713 37.1625 40.8893 37.4366 40.9541C37.7107 41.0188 37.9948 41.0289 38.2728 40.9838C38.5508 40.9387 38.8172 40.8393 39.0567 40.6913C39.2963 40.5432 39.5044 40.3495 39.6691 40.121C39.8338 39.8926 39.9518 39.6339 40.0166 39.3598C40.0813 39.0857 40.0914 38.8016 40.0463 38.5236C40.0012 38.2456 39.9018 37.9792 39.7538 37.7396C39.6057 37.5001 39.412 37.292 39.1835 37.1273C38.9551 36.9626 38.6964 36.8445 38.4223 36.7798C38.1482 36.7151 37.8641 36.705 37.5861 36.7501C37.3081 36.7952 37.0417 36.8946 36.8021 37.0426C36.5626 37.1906 36.3545 37.3844 36.1898 37.6129C36.0251 37.8413 35.907 38.1 35.8423 38.3741C35.7776 38.6482 35.7675 38.9323 35.8126 39.2103Z" fill="currentColor"/>
                <path d="M34.3535 24.1133C33.6094 23.75 32.8477 23.4219 32.0742 23.1406C34.9922 20.7793 36.8555 17.1758 36.8555 13.1445C36.8555 6.05469 31.0898 0.289062 24 0.289062C16.9102 0.289062 11.1445 6.05469 11.1445 13.1445C11.1445 17.1816 13.0137 20.791 15.9316 23.1465C6.89648 26.4512 0.427734 35.1289 0.427734 45.2949H4.71094C4.71094 34.6602 13.3652 26.0117 23.9941 26.0117C26.9648 26.0117 29.8125 26.668 32.4609 27.9629L34.3535 24.1133ZM24 4.57227C28.7285 4.57227 32.5723 8.41602 32.5723 13.1445C32.5723 17.873 28.7285 21.7168 24 21.7168C19.2715 21.7168 15.4277 17.873 15.4277 13.1445C15.4277 8.41602 19.2773 4.57227 24 4.57227Z" fill="currentColor"/>
              </svg>,
      title : "Customer Delight"
    },
    {
      svgImg : 
              <svg className='p-[6px] bs:p-0'  xmlns="http://www.w3.org/2000/svg" width="60" height="56" viewBox="0 0 60 56" fill="currentColor">
                <path d="M59.5313 13C59.25 12.8125 58.875 12.7187 58.5938 12.9062L39.4688 19.75L26.0625 14.875C26.8125 13 27.1875 11.3125 27.1875 9.90625C27.1875 7.375 26.25 5.125 24.4688 3.34375C22.6875 1.5625 20.3438 0.625 17.9063 0.625C12.75 0.625 8.625 4.75 8.625 9.90625C8.625 11.6875 9.28125 13.8438 10.4063 16.4688L0.65625 19.75C0.28125 19.9375 0 20.3125 0 20.6875V54.4375C0 54.8125 0.1875 55.0937 0.46875 55.2812C0.65625 55.375 0.84375 55.4688 1.03125 55.4688C1.125 55.4688 1.3125 55.4688 1.40625 55.375L20.5313 48.625L39.0938 55.4688C39.2813 55.5625 39.5625 55.5625 39.75 55.4688L59.25 48.5313C59.625 48.3438 59.9063 47.9688 59.9063 47.5938V13.8437C60 13.4687 59.8125 13.1875 59.5313 13ZM17.9063 2.5C19.875 2.5 21.6563 3.25 22.9688 4.65625C24.375 5.96875 25.125 7.84375 25.125 9.71875C25.125 11.0312 24.6563 12.8125 23.7188 14.875C22.0313 18.625 19.2188 22.5625 17.9063 24.3438C17.7188 24.1563 17.625 23.9688 17.4375 23.6875C16.2188 22 14.25 19.1875 12.8438 16.2813C11.4375 13.5625 10.7813 11.3125 10.7813 9.625C10.6875 5.78125 13.9688 2.5 17.9063 2.5ZM57.9375 46.8437L39.4688 53.4062L20.9063 46.5625C20.8125 46.5625 20.625 46.4688 20.5313 46.4688C20.4375 46.4688 20.25 46.4687 20.1563 46.5625L2.0625 53.0313V21.4375L11.4375 18.1563C11.4375 18.1563 11.4375 18.1563 11.4375 18.25C11.5313 18.3438 11.5313 18.4375 11.625 18.5313C11.7188 18.7188 11.8125 18.9063 11.9063 19.0938C12 19.1875 12 19.2812 12.0938 19.375C12.1875 19.5625 12.2813 19.75 12.375 19.9375C12.4688 20.0313 12.4688 20.125 12.5625 20.2188C12.6563 20.4063 12.75 20.5938 12.8438 20.6875C12.9375 20.7813 12.9375 20.875 13.0313 20.9688C13.125 21.1563 13.2188 21.25 13.3125 21.4375C13.4063 21.5313 13.4063 21.625 13.5 21.7188C13.5938 21.9063 13.6875 22 13.7813 22.1875C13.875 22.2813 13.875 22.375 13.9688 22.4688C14.0625 22.6563 14.1563 22.75 14.25 22.9375C14.3438 23.0313 14.3438 23.125 14.4375 23.2188C14.5313 23.4063 14.625 23.5 14.7188 23.6875C14.8125 23.7813 14.8125 23.875 14.9063 23.875C15 24.0625 15.0938 24.1563 15.1875 24.25C15.1875 24.3438 15.2813 24.3438 15.2813 24.4375C15.375 24.625 15.4688 24.7188 15.5625 24.8125L15.6563 24.9063C15.75 25 15.8438 25.1875 15.9375 25.2813L16.0313 25.375C16.125 25.4688 16.2188 25.6563 16.3125 25.75C16.4063 25.8438 16.5 25.9375 16.5938 26.0313C16.7813 26.3125 16.9688 26.5 16.9688 26.5938C17.1563 26.875 17.4375 26.9688 17.8125 26.9688C18.0938 26.9688 18.375 26.7813 18.6563 26.5938C18.6563 26.5938 18.75 26.5 18.9375 26.3125L19.0313 26.2188C19.125 26.125 19.125 26.125 19.2188 26.0313L19.3125 25.9375C19.4063 25.8437 19.4063 25.75 19.5 25.6563C19.5 25.5625 19.5938 25.5625 19.5938 25.4688C19.6875 25.375 19.7813 25.2813 19.7813 25.1875C19.875 25.0938 19.875 25 19.9688 24.9063C20.0625 24.8125 20.1563 24.7188 20.25 24.5312C20.3438 24.4375 20.3438 24.3438 20.4375 24.25C20.5313 24.1563 20.625 24.0625 20.7188 23.875C20.8125 23.7813 20.9063 23.6875 20.9063 23.5938C21 23.5 21.0938 23.3125 21.1875 23.2188C21.2813 23.125 21.375 22.9375 21.4688 22.8438C21.5625 22.75 21.6563 22.5625 21.75 22.4688C21.8438 22.375 21.9375 22.1875 22.0313 22.0938C22.125 21.9063 22.2188 21.8125 22.3125 21.625C22.4063 21.5313 22.5 21.3438 22.5938 21.25C22.6875 21.0625 22.7813 20.9688 22.875 20.7812C22.9688 20.5937 23.0625 20.5 23.1563 20.3125C23.25 20.125 23.3438 20.0313 23.4375 19.8438C23.5313 19.6562 23.625 19.5625 23.7188 19.375C23.8125 19.1875 23.9063 19.0938 24 18.9062C24.0938 18.7187 24.1875 18.625 24.2813 18.4375C24.375 18.25 24.4688 18.1563 24.5625 17.9688C24.6563 17.7812 24.75 17.6875 24.8438 17.5C24.9375 17.3125 25.0313 17.125 25.125 17.0312C25.2188 16.8437 25.3125 16.75 25.3125 16.5625C25.3125 16.5625 25.3125 16.5625 25.3125 16.4688L39.1875 21.5313C39.375 21.625 39.6563 21.625 39.8438 21.5313L57.9375 15.0625V46.8437Z" fill="currentColor"/>
                <path d="M49.2188 37.75C49.4063 37.8437 49.6876 37.8437 49.8751 37.8437C50.4376 37.8437 51.0001 37.6562 51.4688 37.375C52.1251 36.9062 52.5938 36.25 52.7813 35.5C52.9688 34.75 52.7813 33.9062 52.4063 33.25C51.9376 32.5937 51.2813 32.125 50.5313 31.9375C48.9376 31.5625 47.2501 32.5937 46.8751 34.1875C46.6876 34.9375 46.8751 35.7812 47.2501 36.4375C47.8126 37.0937 48.4688 37.5625 49.2188 37.75ZM48.9376 34.5625C49.0313 34 49.5938 33.7187 50.0626 33.8125C50.3438 33.9062 50.5313 34 50.6251 34.2812C50.7188 34.4687 50.8126 34.75 50.7188 35.0312C50.6251 35.3125 50.5313 35.5 50.2501 35.5937C50.0626 35.6875 49.7813 35.7812 49.5001 35.6875C49.2188 35.5937 49.0313 35.5 48.9376 35.2187C48.9376 35.0312 48.9376 34.8437 48.9376 34.5625Z" fill="currentColor"/>
                <path d="M10.3125 34.6563L9.65628 35.0313L9.28128 34.375C9.00003 33.9063 8.34378 33.7188 7.87503 34.0938C7.40628 34.375 7.21878 35.0313 7.59378 35.5L7.96878 36.1563L7.31253 36.5313C6.84378 36.8125 6.65628 37.4688 7.03128 37.9375C7.12503 38.3125 7.50003 38.4063 7.78128 38.4063C7.96878 38.4063 8.15628 38.3125 8.34378 38.2188L9.00003 37.8438L9.37503 38.5C9.56253 38.7813 9.93753 38.9688 10.2188 38.9688C10.4063 38.9688 10.5938 38.875 10.7813 38.7813C11.25 38.5 11.4375 37.8438 11.0625 37.375L10.6875 36.7188L11.3438 36.3438C11.8125 36.0625 12 35.4063 11.625 34.9375C11.4375 34.4688 10.7813 34.375 10.3125 34.6563Z" fill="currentColor"/>
                <path d="M19.9687 37.4687C18.75 37.4687 17.1562 37.2812 16.125 37C15.5625 36.9062 15 37.2812 14.9062 37.8437C14.8125 38.4062 15.1875 38.9687 15.75 39.0625C16.7812 39.25 18.4687 39.5312 19.9687 39.5312C20.5312 39.5312 21 39.0625 21 38.5C21 37.9375 20.5312 37.4687 19.9687 37.4687Z" fill="currentColor"/>
                <path d="M27.6563 33.9062C27 34.8437 26.25 35.5937 25.3125 36.1562C25.0313 36.3437 24.6563 36.5312 24.2813 36.7187C23.7188 36.9062 23.5312 37.5624 23.7187 38.1249C23.9062 38.4999 24.2812 38.7812 24.6562 38.7812C24.75 38.7812 24.9375 38.7812 25.0313 38.6874C25.5 38.4999 25.875 38.3124 26.25 38.0312C27.375 37.2812 28.3125 36.4374 29.1563 35.3124C29.5313 34.8437 29.4375 34.1874 28.9688 33.9062C28.6875 33.3437 28.0313 33.4374 27.6563 33.9062Z" fill="currentColor"/>
                <path d="M35.1562 27.1562C34.125 27.1562 33.5625 27.4375 33 27.625C31.6875 28.1875 30.5625 29.4063 30.2812 29.7813C29.9062 30.25 30 30.9062 30.375 31.2812C30.5625 31.4687 30.8437 31.5625 31.0312 31.5625C31.3125 31.5625 31.5937 31.4688 31.7812 31.1875C32.25 30.625 33 29.9688 33.75 29.5938C34.3125 29.4063 34.5 29.3125 35.1562 29.2187C35.7187 29.2187 36.1875 28.75 36.1875 28.1875C36.1875 27.625 35.7187 27.1562 35.1562 27.1562Z" fill="currentColor"/>
                <path d="M39 28.7499C38.8125 29.3124 39 29.8749 39.5625 30.1562C40.5938 30.6249 42.0937 31.3749 43.2187 32.2187C43.4062 32.3124 43.5938 32.4062 43.7813 32.4062C44.1563 32.4062 44.4375 32.2187 44.625 31.9374C44.9062 31.4687 44.8125 30.8124 44.3438 30.5312C43.0313 29.6874 41.5313 28.8437 40.3125 28.3749C39.8438 27.9999 39.2812 28.2812 39 28.7499Z" fill="currentColor"/>
                <path d="M17.9063 12.25C19.6875 12.25 21.0938 10.8438 21.0938 9.0625C21.0938 7.28125 19.6875 5.875 17.9063 5.875C16.125 5.875 14.7188 7.28125 14.7188 9.0625C14.7188 10.8438 16.2188 12.25 17.9063 12.25ZM17.9063 7.9375C18.4688 7.9375 19.0312 8.40625 19.0312 9.0625C19.0312 9.625 18.5625 10.1875 17.9063 10.1875C17.3438 10.1875 16.7812 9.71875 16.7812 9.0625C16.875 8.5 17.3438 7.9375 17.9063 7.9375Z" fill="currentColor"/>
              </svg>,
      title : "Trusted Adventure"
    },
    {
      svgImg : 
            <svg className='p-[6px] bs:p-0' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
              <g clip-path="url(#clip0_346_646)">
              <path d="M59.7914 57.1659L48.928 35.4389L58.9166 30.4446C59.5794 30.1134 59.9981 29.4359 59.9981 28.6948C59.9981 27.9537 59.5794 27.2762 58.9166 26.945C46.4346 20.7039 47.0964 21.019 46.8435 20.9464C45.5935 20.5853 44.347 21.5343 44.347 22.8256V26.2766C43.7863 25.1552 32.263 2.10883 31.7499 1.0825C31.0309 -0.356094 28.9706 -0.358086 28.2503 1.0825C27.8954 1.79219 16.2094 25.1644 15.6533 26.2765C15.6533 21.1645 15.6607 21.4693 15.6358 21.2734C15.4823 20.0718 14.2916 19.315 13.1571 19.6422C12.8051 19.7431 13.0833 19.641 1.08374 25.6408C0.420924 25.9721 0.00221323 26.6495 0.00221323 27.3906C0.00221323 28.1317 0.420924 28.8092 1.08374 29.1405L11.5939 34.3956L0.208463 57.1659C-0.440521 58.4638 0.504244 59.9971 1.95842 59.9971C3.12725 59.9971 56.3666 59.9971 58.0415 59.9971C59.4931 59.9971 60.4415 58.4659 59.7914 57.1659ZM48.2596 25.9913L53.6669 28.695L48.2596 31.3987V25.9913ZM30 6.33215L35.0103 16.3529L33.9128 17.4504L31.3833 14.9209C30.6193 14.157 29.3805 14.157 28.6166 14.9209L26.0871 17.4504L24.9895 16.3527L30 6.33215ZM23.145 20.0419L24.7036 21.6006C25.4669 22.364 26.7064 22.3647 27.4703 21.6006L29.9998 19.0711L32.5292 21.6006C33.2932 22.3646 34.532 22.3646 35.2959 21.6006L36.8546 20.0419L40.0097 26.352L35.9051 30.4566L31.4192 25.9708C30.6553 25.2068 29.4165 25.2068 28.6526 25.9708L24.0852 30.5382L19.9596 26.4126L23.145 20.0419ZM6.33303 27.3906L11.7404 24.687V30.0944L6.33303 27.3906ZM44.9038 56.0843L41.7383 49.7533V46.3023C41.7383 45.9986 41.6676 45.6989 41.5317 45.4274L37.6189 37.6019C37.1359 36.6354 35.9607 36.2434 34.9943 36.727C34.0278 37.21 33.6362 38.3852 34.1194 39.3516L37.8255 46.7641V50.215C37.8255 50.5186 37.8962 50.8182 38.0321 51.0899L40.5293 56.0842H31.9564V46.3022C31.9564 45.2218 31.0805 44.3458 30 44.3458C28.9195 44.3458 28.0435 45.2218 28.0435 46.3022V56.0842H19.4708L21.968 51.0899C22.1039 50.8183 22.1744 50.5187 22.1744 50.215V46.7641L25.8807 39.3516C26.364 38.3853 25.9721 37.21 25.0058 36.727C24.0395 36.2436 22.8642 36.6355 22.381 37.6019L18.4683 45.4274C18.3323 45.6991 18.2618 45.9986 18.2618 46.3023V49.7533L15.0962 56.0843H5.12378L12.0756 42.1807C12.4274 42.7002 13.0221 43.0417 13.6966 43.0417C14.7771 43.0417 15.6531 42.1657 15.6531 41.0853V35.0259L18.1153 30.1015L22.702 34.6882C23.4661 35.4523 24.7048 35.4523 25.4687 34.6882L30.0361 30.1209L34.5219 34.6067C35.2858 35.3706 36.5246 35.3706 37.2886 34.6067L41.8544 30.0408L44.3469 35.0259V42.3896C44.3469 43.47 45.2229 44.346 46.3033 44.346C47.252 44.346 48.0424 43.6708 48.2214 42.7748L54.8762 56.0843H44.9038Z" fill="currentColor"/>
              </g>
              <defs>
              <clipPath id="clip0_346_646">
              <rect width="60" height="60" fill="currentColor"/>
              </clipPath>
              </defs>
            </svg>,
      title : "Expert Guides"
    },
    {
      svgImg : 
              <svg className='p-[6px] bs:p-0' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                <g clip-path="url(#clip0_346_673)">
                <path d="M30 0C13.4316 0 0 13.4316 0 30C0 46.5684 13.4316 60 30 60C46.5684 60 60 46.5684 60 30C60 13.4316 46.5684 0 30 0ZM30 58.125C14.4666 58.125 1.875 45.5325 1.875 30C1.875 14.4666 14.4666 1.875 30 1.875C45.5334 1.875 58.125 14.4666 58.125 30C58.125 45.5325 45.5334 58.125 30 58.125Z" fill="currentColor"/>
                <path d="M30 30.9375C30.5178 30.9375 30.9375 30.5178 30.9375 30C30.9375 29.4822 30.5178 29.0625 30 29.0625C29.4822 29.0625 29.0625 29.4822 29.0625 30C29.0625 30.5178 29.4822 30.9375 30 30.9375Z" fill="currentColor"/>
                <path d="M34.6228 30.645C34.6519 30.4322 34.6875 30.2213 34.6875 30C34.6875 28.4709 33.945 27.1275 32.8125 26.2706V13.125C32.8125 11.5716 31.5534 10.3125 30 10.3125C28.4466 10.3125 27.1875 11.5716 27.1875 13.125V26.2706C26.055 27.1266 25.3125 28.4709 25.3125 30C25.3125 32.5894 27.4106 34.6875 30 34.6875C30.2203 34.6875 30.4322 34.6519 30.645 34.6228L38.6184 42.5963C39.7172 43.695 41.4966 43.6941 42.5953 42.5953C43.6941 41.4966 43.6941 39.7172 42.5953 38.6184L34.6228 30.645ZM29.0625 13.125C29.0625 12.6066 29.4816 12.1875 30 12.1875C30.5184 12.1875 30.9375 12.6066 30.9375 13.125V25.4072C30.6347 25.3453 30.3216 25.3125 30 25.3125C29.6784 25.3125 29.3653 25.3453 29.0625 25.4072V13.125ZM27.1875 30C27.1875 28.4466 28.4466 27.1875 30 27.1875C31.5534 27.1875 32.8125 28.4466 32.8125 30C32.8125 31.5534 31.5534 32.8125 30 32.8125C28.4466 32.8125 27.1875 31.5534 27.1875 30ZM41.2697 41.2697C40.9031 41.6372 40.3106 41.6372 39.9441 41.2706L32.5819 33.9084C33.1088 33.5597 33.5597 33.1088 33.9084 32.5819L41.2697 39.9441C41.6353 40.3097 41.6353 40.9031 41.2697 41.2697Z" fill="currentColor"/>
                <path d="M30 3.75C15.5025 3.75 3.75 15.5025 3.75 30C3.75 44.4975 15.5025 56.25 30 56.25C44.4975 56.25 56.25 44.4975 56.25 30C56.25 15.5025 44.4975 3.75 30 3.75ZM47.8828 46.5563L45.9113 44.5837C45.5428 44.2181 44.9503 44.2181 44.5847 44.5837C44.2181 44.9512 44.2181 45.5428 44.5847 45.9103L46.5572 47.8828C42.4237 51.7125 36.9619 54.1237 30.9384 54.3516L30.9394 51.5634C30.9375 51.045 30.5184 50.6259 30.0019 50.6259C29.4825 50.6269 29.0644 51.045 29.0644 51.5634L29.0634 54.3516C23.04 54.1237 17.5781 51.7134 13.4447 47.8847L15.4172 45.9122C15.7828 45.5447 15.7828 44.9522 15.4172 44.5866C15.0487 44.22 14.4581 44.22 14.0916 44.5866L12.1191 46.5591C8.29031 42.4256 5.87906 36.9637 5.65031 30.9403H8.43844C8.95688 30.9394 9.37594 30.5203 9.37594 30.0028C9.375 29.4834 8.95688 29.0653 8.43844 29.0653H5.64844C5.87625 23.0419 8.28656 17.5791 12.1153 13.4456L14.0878 15.4181C14.4544 15.7847 15.0469 15.7847 15.4134 15.4181C15.78 15.0506 15.78 14.4591 15.4134 14.0925L13.4409 12.12C17.5744 8.29031 23.0372 5.87906 29.0606 5.65125V8.4375C29.0606 8.95594 29.4797 9.375 29.9981 9.375C30.5166 9.375 30.9356 8.95594 30.9356 8.4375V5.64844C36.9591 5.87625 42.4219 8.28656 46.5553 12.1163L44.5828 14.0887C44.2163 14.4553 44.2163 15.0478 44.5828 15.4144C44.9494 15.7809 45.5419 15.7809 45.9084 15.4144L47.8819 13.4419C51.7106 17.5753 54.1219 23.0381 54.3497 29.0616H51.5625C51.0441 29.0616 50.625 29.4806 50.625 29.9991C50.625 30.5175 51.0441 30.9366 51.5625 30.9366H54.3516C54.1228 36.9609 51.7125 42.4228 47.8828 46.5563Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_346_673">
                <rect width="60" height="60" fill="currentColor"/>
                </clipPath>
                </defs>
              </svg>,
      title : "Time Flexibility"
    }
  ]
  return (
    <div className='w-full justify-center items-center mx-auto'>
        <div className='bg-image'> {/* max-w */}
          <div className='w-full h-full justify-center items-center mx-auto max-w-full  bw:max-w-[540px] md:max-w-[720px] bs:max-w-[960px] bm:max-w-[1140px] 2xl:max-w-[1320px]'>
              <div className='h-[80px] bs:h-[140px]'></div>
              <div className='w-full grid grid-cols-1 bw:grid-cols-2 bs:grid-cols-4 mx-auto gap-y-[40px]'>

                  {
                    CTAData.map((ele,id) => (
                      <div key={id} onMouseOut={()=> setActiveBgColor(null)} onMouseMove={()=>setActiveBgColor(id)}>
                        <div className='w-full flex flex-col justify-center items-center mx-auto px-[0.8rem]'>
                          <div className={`${activeBgColor === id ? "bg-[#3FD0D4]" : "bg-white"} rounded-xl w-[85px] h-[85px] bs:w-[106px] bs:h-[106px] flex flex-col justify-center items-center mx-auto`}>
                            <p>
                              {React.cloneElement(ele.svgImg, { className: `${activeBgColor === id ? "text-white" : "text-[#3FD0D4]"} duration-300` })}
                            </p>
                          </div>
                          <h2 className='mt-4 bs:mt-8 flex w-full justify-center items-center mx-auto travel_top_text font-semibold text-[#102039] text-[20px] bs:text-[22px] 2xl:text-[24px]'>
                            {ele.title}
                          </h2>
                          <p className='text-[#666666] leading-[1.6em] flex w-full deliver 2xl:px-[1rem] text-center justify-center items-center mx-auto text-[16px] mt-2 bs:mt-3'>
                              We deliver the best service and you to
                              experience for our customer we est
                              service and you to experie
                          </p>
                        </div>
                      </div>
                    ))
                  }

              </div>
              <div className='h-[80px] bs:h-[133px]'></div>
          </div>
        </div>

        <div className='h-[75px] bs:h-[135px]'></div>
    </div>
  )
}

export default CTA;