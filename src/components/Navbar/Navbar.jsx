import React from 'react'

import './Navbar.scss'
import { logo } from '../../assets'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className='menu-items-links'>
        <a href="/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9314 25C19.3259 25 25 19.3382 25 12.5C25 5.67403 19.3137 0 12.4877 0C5.64945 0 0 5.67403 0 12.5C0 19.3382 5.66174 25 12.4999 25H10.9314ZM8.97054 19.3382C7.62252 19.3382 6.93625 18.6519 6.93625 17.2672V7.26717C6.93625 5.89463 7.62252 5.19607 8.97054 5.19607H11.9239V10.1348C11.9239 10.9804 12.3284 11.3725 13.174 11.3725H18.0269V17.2672C18.0269 18.6397 17.3529 19.3382 15.9926 19.3382H8.97054ZM13.272 10.3799C13.0392 10.3799 12.9166 10.2573 12.9166 10.0245V5.26964C13.1862 5.30639 13.4681 5.50247 13.7745 5.82111L17.4019 9.52207C17.7205 9.84071 17.9166 10.1103 17.9534 10.3799H13.272Z" fill="black"></path></svg>
          <p>Docs</p>
        </a>
        <a href="/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4_26)"><path d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z" fill="black"></path><path d="M17.7064 7.9521C16.7209 7.5009 15.6805 7.18081 14.6118 7C14.4656 7.26143 14.3333 7.53041 14.2154 7.8058C13.077 7.63426 11.9194 7.63426 10.781 7.8058C10.6631 7.53043 10.5308 7.26146 10.3846 7C9.31521 7.18234 8.27413 7.50319 7.28762 7.95446C5.32915 10.852 4.79824 13.6777 5.0637 16.4632C6.21063 17.3106 7.49436 17.955 8.85911 18.3685C9.16641 17.9552 9.43834 17.5168 9.67199 17.0578C9.22819 16.892 8.79985 16.6875 8.39191 16.4467C8.49927 16.3688 8.60428 16.2886 8.70574 16.2107C9.89273 16.7689 11.1883 17.0583 12.5 17.0583C13.8117 17.0583 15.1072 16.7689 16.2942 16.2107C16.3969 16.2945 16.5019 16.3747 16.608 16.4467C16.1993 16.6879 15.7702 16.8928 15.3256 17.059C15.559 17.5177 15.8309 17.9558 16.1385 18.3685C17.5044 17.9567 18.7891 17.3125 19.9362 16.4644V16.4644C20.2477 13.2341 19.4042 10.4344 17.7064 7.9521ZM10.0082 14.7501C9.2685 14.7501 8.65737 14.0788 8.65737 13.2529C8.65737 12.4271 9.24727 11.7499 10.0059 11.7499C10.7645 11.7499 11.3709 12.4271 11.3579 13.2529C11.3449 14.0788 10.7621 14.7501 10.0082 14.7501ZM14.9917 14.7501C14.2508 14.7501 13.642 14.0788 13.642 13.2529C13.642 12.4271 14.2319 11.7499 14.9917 11.7499C15.7515 11.7499 16.3532 12.4271 16.3402 13.2529C16.3272 14.0788 15.7456 14.7501 14.9917 14.7501Z" fill="white"></path></g><defs><clipPath id="clip0_4_26"><rect width="25" height="25" fill="white"></rect></clipPath></defs></svg>
          <p>Discord</p>
        </a>
        <a href="/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 12.5C25 19.4062 19.4062 25 12.5 25C5.59375 25 0 19.4062 0 12.5C0 5.59375 5.59375 0 12.5 0C19.4062 0 25 5.59375 25 12.5ZM10.2125 19.0938C15.7562 19.0938 18.7875 14.5 18.7875 10.5188C18.7875 10.3875 18.7875 10.2563 18.7812 10.1313C19.3687 9.70625 19.8813 9.175 20.2875 8.56875C19.75 8.80625 19.1687 8.96875 18.5562 9.04375C19.1812 8.66875 19.6562 8.08125 19.8813 7.375C19.3 7.71875 18.6562 7.96875 17.9688 8.10625C17.4188 7.51875 16.6375 7.15625 15.7688 7.15625C14.1062 7.15625 12.7563 8.50625 12.7563 10.1687C12.7563 10.4062 12.7812 10.6375 12.8375 10.8562C10.3312 10.7312 8.1125 9.53125 6.625 7.70625C6.36875 8.15 6.21875 8.66875 6.21875 9.21875C6.21875 10.2625 6.75 11.1875 7.5625 11.725C7.06875 11.7125 6.60625 11.575 6.2 11.35C6.2 11.3625 6.2 11.375 6.2 11.3875C6.2 12.85 7.2375 14.0625 8.61875 14.3438C8.36875 14.4125 8.1 14.45 7.825 14.45C7.63125 14.45 7.44375 14.4313 7.25625 14.3938C7.6375 15.5938 8.75 16.4625 10.0688 16.4875C9.0375 17.2937 7.7375 17.775 6.325 17.775C6.08125 17.775 5.84375 17.7625 5.60625 17.7313C6.925 18.5938 8.5125 19.0938 10.2125 19.0938Z" fill="black"></path></svg>
          <p>Twitter</p>
        </a>
        <a href="/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 0C5.59792 0 0 5.59688 0 12.5C0 18.0229 3.58125 22.7083 8.54896 24.3615C9.17292 24.4771 9.375 24.0896 9.375 23.7604V21.4333C5.89792 22.1896 5.17396 19.9583 5.17396 19.9583C4.60521 18.5135 3.78542 18.1292 3.78542 18.1292C2.65104 17.3531 3.87187 17.3698 3.87187 17.3698C5.12708 17.4573 5.7875 18.6583 5.7875 18.6583C6.90208 20.5688 8.71146 20.0167 9.425 19.6969C9.53646 18.8896 9.86042 18.3375 10.2188 18.026C7.44271 17.7083 4.52396 16.6365 4.52396 11.8479C4.52396 10.4823 5.0125 9.36771 5.81146 8.49271C5.68229 8.17708 5.25417 6.90521 5.93333 5.18438C5.93333 5.18438 6.98333 4.84896 9.37187 6.46563C10.3687 6.18854 11.4375 6.05 12.5 6.04479C13.5625 6.05 14.6323 6.18854 15.6312 6.46563C18.0177 4.84896 19.0656 5.18438 19.0656 5.18438C19.7458 6.90625 19.3177 8.17813 19.1885 8.49271C19.9906 9.36771 20.475 10.4833 20.475 11.8479C20.475 16.649 17.551 17.7063 14.7677 18.0156C15.2156 18.4031 15.625 19.1635 15.625 20.3302V23.7604C15.625 24.0927 15.825 24.4833 16.4594 24.3604C21.4229 22.7052 25 18.0208 25 12.5C25 5.59688 19.4031 0 12.5 0Z" fill="black"></path></svg>
          <p>GitHub</p>
        </a>
        <a href="/"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z" fill="black"></path><path d="M20.8332 12.5C20.8332 11.4912 20.0145 10.6725 19.0057 10.6725C18.5087 10.6725 18.0701 10.8626 17.7484 11.1842C16.5057 10.2924 14.7806 9.70761 12.88 9.63451L13.7133 5.731L16.418 6.30118C16.4473 6.98831 17.0174 7.54387 17.7192 7.54387C18.4356 7.54387 19.0204 6.95907 19.0204 6.2427C19.0204 5.52632 18.4356 4.94153 17.7192 4.94153C17.2075 4.94153 16.7689 5.23393 16.5642 5.67252L13.5379 5.02925C13.4502 5.01463 13.3625 5.02925 13.2894 5.07311C13.2163 5.11697 13.1724 5.19007 13.1432 5.27779L12.2221 9.63451C10.2777 9.69299 8.53791 10.2632 7.2806 11.1842C6.95896 10.8772 6.50574 10.6725 6.02329 10.6725C5.01451 10.6725 4.1958 11.4912 4.1958 12.5C4.1958 13.2456 4.6344 13.8743 5.27767 14.1667C5.24843 14.3421 5.23381 14.5322 5.23381 14.7222C5.23381 17.5292 8.49405 19.7953 12.5291 19.7953C16.5642 19.7953 19.8245 17.5292 19.8245 14.7222C19.8245 14.5322 19.8098 14.3567 19.7806 14.1813C20.38 13.8889 20.8332 13.2456 20.8332 12.5ZM8.33323 13.8012C8.33323 13.0848 8.91802 12.5 9.6344 12.5C10.3508 12.5 10.9356 13.0848 10.9356 13.8012C10.9356 14.5176 10.3508 15.1023 9.6344 15.1023C8.91802 15.1023 8.33323 14.5176 8.33323 13.8012ZM15.5993 17.2369C14.7075 18.1287 13.0116 18.1871 12.5145 18.1871C12.0174 18.1871 10.3069 18.114 9.42972 17.2369C9.29814 17.1053 9.29814 16.886 9.42972 16.7544C9.5613 16.6228 9.7806 16.6228 9.91218 16.7544C10.4677 17.3099 11.6666 17.5146 12.5291 17.5146C13.3917 17.5146 14.5759 17.3099 15.1461 16.7544C15.2777 16.6228 15.497 16.6228 15.6286 16.7544C15.7309 16.9006 15.7309 17.1053 15.5993 17.2369ZM15.3654 15.1023C14.649 15.1023 14.0642 14.5176 14.0642 13.8012C14.0642 13.0848 14.649 12.5 15.3654 12.5C16.0818 12.5 16.6666 13.0848 16.6666 13.8012C16.6666 14.5176 16.0818 15.1023 15.3654 15.1023Z" fill="#F3F3F3"></path></svg>
          <p>Reddit</p>
        </a>
      </ul>
    </div>
  )
}

export default Navbar