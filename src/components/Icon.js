import React, { Component } from 'react'

const icons = {
  comment: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>',
  time: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',
  compass: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/></svg>',
  logo: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve"><polygon fill-rule="evenodd" clip-rule="evenodd" points="43,38 43,48 58,48 58,88 68,88 68,48 83,48 83,38 "/> <path d="M0,0v128h128V0H0z M118,118H10V10h108V118z"/></svg>',
  nib: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.4 26" enable-background="new 0 0 158.4 26" xml:space="preserve" preserveAspectRatio="none"><polygon points="0,0 79.2,26 158.4,0 "/></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  hourglass: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M0 262.285c0 23.198 2.17 44.188 6.511 62.967 4.339 18.777 10.348 35.092 18.026 48.946 7.678 13.854 17.442 26.039 29.293 36.554 11.85 10.516 24.703 19.112 38.556 25.788 13.853 6.675 29.668 12.099 47.444 16.273 17.776 4.173 35.928 7.094 54.455 8.764 18.527 1.669 38.89 2.503 61.089 2.503 22.366 0 42.813-.834 61.341-2.503 18.525-1.67 36.721-4.592 54.58-8.764 17.857-4.174 33.756-9.598 47.693-16.273 13.938-6.677 26.873-15.272 38.809-25.788 11.936-10.515 21.781-22.702 29.543-36.554 7.76-13.854 13.811-30.168 18.15-48.946 4.34-18.777 6.51-39.769 6.51-62.967 0-41.395-13.854-77.197-41.559-107.408 1.502-4.006 2.879-8.554 4.131-13.646 1.252-5.091 2.42-12.351 3.504-21.781 1.086-9.432.668-20.321-1.252-32.673-1.918-12.353-5.465-24.953-10.643-37.807l-3.754-.751c-2.672-.5-7.055-.375-13.146.376s-13.186 2.253-21.279 4.507c-8.096 2.253-18.527 6.594-31.297 13.02s-26.248 14.479-40.436 24.16c-24.367-6.677-57.834-10.016-100.396-10.016-42.396 0-75.778 3.339-100.147 10.016-14.188-9.682-27.75-17.734-40.685-24.16S91.8 55.355 84.122 53.103c-7.677-2.254-14.855-3.714-21.531-4.382-6.677-.668-10.892-.876-12.644-.626-1.752.25-3.13.543-4.131.876-5.174 12.854-8.721 25.453-10.64 37.807-1.919 12.352-2.337 23.242-1.252 32.673 1.085 9.43 2.254 16.69 3.505 21.781 1.252 5.092 2.629 9.64 4.131 13.646C13.854 185.088 0 220.89 0 262.285zm62.842 62.842c0-24.035 10.933-46.068 32.798-66.097 6.509-6.012 14.104-10.559 22.783-13.646 8.679-3.089 18.485-4.841 29.418-5.259 10.933-.417 21.406-.334 31.421.251 10.014.584 22.366 1.377 37.054 2.378 14.688 1.002 27.374 1.502 38.056 1.502 10.683 0 23.368-.5 38.056-1.502 14.689-1.001 27.039-1.794 37.057-2.378 10.014-.585 20.486-.668 31.42-.251 10.934.418 20.738 2.17 29.42 5.259 8.678 3.088 16.271 7.635 22.781 13.646 21.865 19.695 32.799 41.728 32.799 66.097 0 14.354-1.795 27.081-5.385 38.182-3.588 11.102-8.178 20.405-13.771 27.915-5.592 7.511-13.352 13.896-23.283 19.153-9.932 5.258-19.611 9.305-29.041 12.146-9.432 2.837-21.533 5.049-36.305 6.635-14.773 1.586-27.959 2.546-39.559 2.879-11.602.334-26.33.501-44.189.501s-32.589-.167-44.189-.501c-11.6-.333-24.787-1.293-39.558-2.879s-26.872-3.798-36.303-6.635c-9.43-2.841-19.111-6.889-29.042-12.146-9.931-5.257-17.693-11.641-23.284-19.153-5.591-7.511-10.182-16.813-13.77-27.915-3.59-11.101-5.384-23.83-5.384-38.182zM320 320.08c0 26.51 14.326 48 32 48s32-21.49 32-48-14.326-48-32-48-32 21.49-32 48zm-192 0c0 26.51 14.327 48 32 48s32-21.49 32-48-14.327-48-32-48-32 21.49-32 48z"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="430.117" height="430.118" viewBox="0 0 430.117 430.118"><path d="M398.355 0H31.782C14.229 0 .002 13.793.002 30.817v368.471c0 17.025 14.232 30.83 31.78 30.83h366.573c17.549 0 31.76-13.814 31.76-30.83V30.817C430.115 13.798 415.904 0 398.355 0zM130.4 360.038H65.413V165.845H130.4v194.193zM97.913 139.315h-.437c-21.793 0-35.92-14.904-35.92-33.563 0-19.035 14.542-33.535 36.767-33.535 22.227 0 35.899 14.496 36.331 33.535 0 18.663-14.099 33.563-36.741 33.563zm266.746 220.723h-64.966v-103.9c0-26.107-9.413-43.921-32.907-43.921-17.973 0-28.642 12.018-33.327 23.621-1.736 4.144-2.166 9.94-2.166 15.728v108.468h-64.954s.85-175.979 0-194.192h64.964v27.531c8.624-13.229 24.035-32.1 58.534-32.1 42.76 0 74.822 27.739 74.822 87.414v111.351zM230.883 193.99c.111-.182.266-.401.42-.614v.614h-.42z"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M296.296 512H200.36V256h-64v-88.225l64-.029-.104-51.976C200.256 43.794 219.773 0 304.556 0h70.588v88.242h-44.115c-33.016 0-34.604 12.328-34.604 35.342l-.131 44.162h79.346l-9.354 88.225-69.926.029-.064 256z"/></svg>',
  twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="512.002" height="512.002" viewBox="0 0 512.002 512.002"><path d="M512.002 97.211c-18.84 8.354-39.082 14.001-60.33 16.54 21.686-13 38.342-33.585 46.186-58.115-20.299 12.039-42.777 20.78-66.705 25.49-19.16-20.415-46.461-33.17-76.674-33.17-58.011 0-105.042 47.029-105.042 105.039 0 8.233.929 16.25 2.72 23.939-87.3-4.382-164.701-46.2-216.509-109.753-9.042 15.514-14.223 33.558-14.223 52.809 0 36.444 18.544 68.596 46.73 87.433-17.219-.546-33.416-5.271-47.577-13.139-.01.438-.01.878-.01 1.321 0 50.894 36.209 93.348 84.261 103-8.813 2.399-18.094 3.687-27.674 3.687-6.769 0-13.349-.66-19.764-1.888 13.368 41.73 52.16 72.104 98.126 72.949-35.95 28.176-81.243 44.967-130.458 44.967-8.479 0-16.84-.496-25.058-1.471 46.486 29.807 101.701 47.197 161.021 47.197 193.211 0 298.868-160.062 298.868-298.872 0-4.554-.104-9.084-.305-13.59 20.526-14.809 38.335-33.309 52.417-54.373z"/></svg>',
  'google-plus': '<svg xmlns="http://www.w3.org/2000/svg" width="432.591" height="432.592" viewBox="0 0 432.591 432.592"><path d="M356.063 0h-133.97c-60.062 0-116.585 45.503-116.585 98.211 0 53.863 40.941 97.333 102.044 97.333 4.249 0 8.378-.085 12.42-.376-3.964 7.593-6.8 16.144-6.8 25.021 0 14.969 8.052 27.104 18.233 37.012-7.692 0-15.12.224-23.226.224-74.391-.001-131.65 47.38-131.65 96.511 0 48.391 62.771 78.656 137.167 78.656 84.812 0 131.653-48.122 131.653-96.514 0-38.801-11.447-62.036-46.843-87.067-12.107-8.571-35.267-29.418-35.267-41.672 0-14.36 4.099-21.434 25.714-38.323 22.156-17.312 37.837-41.651 37.837-69.958 0-33.703-15.011-66.549-43.188-77.386h42.479L356.063 0zM309.27 327.729c1.062 4.486 1.643 9.104 1.643 13.814 0 39.1-25.194 69.655-97.487 69.655-51.421 0-88.558-32.552-88.558-71.65 0-38.321 46.063-70.222 97.482-69.666 12 .127 23.184 2.058 33.334 5.345 27.913 19.414 47.937 30.38 53.586 52.502zm-82.331-145.841c-34.519-1.032-67.317-38.613-73.275-83.93-5.958-45.333 17.185-80.021 51.694-78.995C239.86 20 272.675 56.37 278.636 101.692c5.953 45.33-17.195 81.229-51.697 80.196z"/></svg>'
}

class Icon extends Component {
  htmlIcon() {
    const { name } = this.props
    return {
      __html: icons[name]
    }
  }
  render() {
    const { name } = this.props
    return(
      <span className={`icon icon-${name}`} dangerouslySetInnerHTML={this.htmlIcon()}></span>
    )
  }
}

export default Icon
