import { DocsThemeConfig } from 'nextra-theme-docs';
import { useDark } from '@/hooks/useDark';

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/contential/contential-docs/tree/main',
  project: {
    link: 'https://github.com/contential/contential',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Contential',
    };
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://contential.ai" target="_blank">
          Contential
        </a>
      </span>
    ),
  },
  logo: () => {
    const isDark = useDark();

    return (
      <svg
        width="120"
        viewBox="0 0 715 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.4697 94.26C35.2297 94.26 27.2917 92.412 20.6557 88.716C14.1037 84.936 9.06366 79.644 5.53566 72.84C2.00766 65.952 0.24366 57.846 0.24366 48.522C0.24366 39.198 2.00766 31.134 5.53566 24.33C9.06366 17.526 14.1037 12.276 20.6557 8.58C27.2917 4.8 35.2297 2.91 44.4697 2.91C50.6857 2.91 56.2717 3.792 61.2277 5.556C66.2677 7.32 70.5937 9.924 74.2057 13.368L68.9137 26.22C64.9657 23.028 61.1437 20.76 57.4477 19.416C53.8357 17.988 49.6777 17.274 44.9737 17.274C35.9857 17.274 29.0977 20.004 24.3097 25.464C19.6057 30.84 17.2537 38.526 17.2537 48.522C17.2537 58.518 19.6057 66.246 24.3097 71.706C29.0977 77.166 35.9857 79.896 44.9737 79.896C49.6777 79.896 53.8357 79.224 57.4477 77.88C61.1437 76.452 64.9657 74.1 68.9137 70.824L74.2057 83.676C70.5937 87.036 66.2677 89.64 61.2277 91.488C56.2717 93.336 50.6857 94.26 44.4697 94.26ZM125.036 94.26C118.484 94.26 112.814 92.916 108.026 90.228C103.238 87.54 99.4998 83.718 96.8118 78.762C94.2078 73.806 92.9058 67.926 92.9058 61.122C92.9058 54.318 94.2078 48.48 96.8118 43.608C99.4998 38.652 103.238 34.83 108.026 32.142C112.814 29.454 118.484 28.11 125.036 28.11C131.588 28.11 137.258 29.454 142.046 32.142C146.918 34.83 150.656 38.652 153.26 43.608C155.948 48.48 157.292 54.318 157.292 61.122C157.292 67.926 155.948 73.806 153.26 78.762C150.656 83.718 146.918 87.54 142.046 90.228C137.258 92.916 131.588 94.26 125.036 94.26ZM125.036 82.164C129.992 82.164 133.94 80.442 136.88 76.998C139.82 73.47 141.29 68.178 141.29 61.122C141.29 54.066 139.82 48.816 136.88 45.372C133.94 41.928 129.992 40.206 125.036 40.206C120.08 40.206 116.132 41.928 113.192 45.372C110.252 48.816 108.782 54.066 108.782 61.122C108.782 68.178 110.252 73.47 113.192 76.998C116.132 80.442 120.08 82.164 125.036 82.164ZM183.474 93V45.246C183.474 42.642 183.39 39.996 183.222 37.308C183.054 34.62 182.802 31.974 182.466 29.37H197.712L198.972 41.97H197.46C199.476 37.518 202.458 34.116 206.406 31.764C210.354 29.328 214.932 28.11 220.14 28.11C227.616 28.11 233.244 30.21 237.024 34.41C240.804 38.61 242.694 45.162 242.694 54.066V93H226.944V54.822C226.944 49.698 225.936 46.044 223.92 43.86C221.988 41.592 219.048 40.458 215.1 40.458C210.228 40.458 206.364 41.97 203.508 44.994C200.652 48.018 199.224 52.05 199.224 57.09V93H183.474ZM299.21 94.26C291.65 94.26 285.938 92.286 282.074 88.338C278.21 84.39 276.278 78.468 276.278 70.572V41.214H264.056V29.37H276.278V13.116L292.028 9.084V29.37H309.038V41.214H292.028V69.564C292.028 73.932 292.868 76.998 294.548 78.762C296.228 80.526 298.538 81.408 301.478 81.408C303.074 81.408 304.418 81.282 305.51 81.03C306.686 80.778 307.82 80.442 308.912 80.022V92.496C307.484 93.084 305.888 93.504 304.124 93.756C302.444 94.092 300.806 94.26 299.21 94.26ZM362.465 94.26C351.797 94.26 343.439 91.32 337.391 85.44C331.343 79.56 328.319 71.496 328.319 61.248C328.319 54.612 329.621 48.816 332.225 43.86C334.829 38.904 338.441 35.04 343.061 32.268C347.765 29.496 353.225 28.11 359.441 28.11C365.573 28.11 370.697 29.412 374.813 32.016C378.929 34.62 382.037 38.274 384.137 42.978C386.321 47.682 387.413 53.184 387.413 59.484V63.642H341.045V55.326H376.199L374.057 57.09C374.057 51.21 372.797 46.716 370.277 43.608C367.841 40.5 364.271 38.946 359.567 38.946C354.359 38.946 350.327 40.794 347.471 44.49C344.699 48.186 343.313 53.352 343.313 59.988V61.626C343.313 68.514 344.993 73.68 348.353 77.124C351.797 80.484 356.627 82.164 362.843 82.164C366.455 82.164 369.815 81.702 372.923 80.778C376.115 79.77 379.139 78.174 381.995 75.99L386.657 86.574C383.633 89.01 380.021 90.9 375.821 92.244C371.621 93.588 367.169 94.26 362.465 94.26ZM413.35 93V45.246C413.35 42.642 413.266 39.996 413.098 37.308C412.93 34.62 412.678 31.974 412.342 29.37H427.588L428.848 41.97H427.336C429.352 37.518 432.334 34.116 436.282 31.764C440.23 29.328 444.808 28.11 450.016 28.11C457.492 28.11 463.12 30.21 466.9 34.41C470.68 38.61 472.57 45.162 472.57 54.066V93H456.82V54.822C456.82 49.698 455.812 46.044 453.796 43.86C451.864 41.592 448.924 40.458 444.976 40.458C440.104 40.458 436.24 41.97 433.384 44.994C430.528 48.018 429.1 52.05 429.1 57.09V93H413.35ZM529.086 94.26C521.526 94.26 515.814 92.286 511.95 88.338C508.086 84.39 506.154 78.468 506.154 70.572V41.214H493.932V29.37H506.154V13.116L521.904 9.084V29.37H538.914V41.214H521.904V69.564C521.904 73.932 522.744 76.998 524.424 78.762C526.104 80.526 528.414 81.408 531.354 81.408C532.95 81.408 534.294 81.282 535.386 81.03C536.562 80.778 537.696 80.442 538.788 80.022V92.496C537.36 93.084 535.764 93.504 534 93.756C532.32 94.092 530.682 94.26 529.086 94.26ZM562.213 93V29.37H577.963V93H562.213ZM561.331 17.4V2.02799H578.845V17.4H561.331ZM632.236 94.26C626.692 94.26 621.82 92.958 617.62 90.354C613.42 87.666 610.144 83.844 607.792 78.888C605.44 73.932 604.264 68.01 604.264 61.122C604.264 54.234 605.44 48.354 607.792 43.482C610.144 38.526 613.42 34.746 617.62 32.142C621.82 29.454 626.692 28.11 632.236 28.11C637.612 28.11 642.316 29.454 646.348 32.142C650.464 34.746 653.194 38.274 654.538 42.726H653.152L654.538 29.37H669.658C669.406 31.974 669.154 34.62 668.902 37.308C668.734 39.996 668.65 42.642 668.65 45.246V93H653.026L652.9 79.896H654.412C653.068 84.264 650.338 87.75 646.222 90.354C642.106 92.958 637.444 94.26 632.236 94.26ZM636.646 82.164C641.602 82.164 645.592 80.442 648.616 76.998C651.64 73.47 653.152 68.178 653.152 61.122C653.152 54.066 651.64 48.816 648.616 45.372C645.592 41.928 641.602 40.206 636.646 40.206C631.69 40.206 627.7 41.928 624.676 45.372C621.652 48.816 620.14 54.066 620.14 61.122C620.14 68.178 621.61 73.47 624.55 76.998C627.574 80.442 631.606 82.164 636.646 82.164ZM698.401 93V0.263992H714.151V93H698.401Z"
          fill={isDark ? 'white' : 'black'}
        />
      </svg>
    );
  },
  // head: function Head() {
  //   const router = useRouter();
  //   const isDark = useDark();
  //   const { frontMatter, title } = useConfig();
  //   return (
  //     <>
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //       <link
  //         rel="icon"
  //         href={`/logo${isDark ? '-dark' : ''}.svg`}
  //         type="image/svg+xml"
  //       />
  //       <meta name="twitter:card" content="summary_large_image" />
  //       <meta property="og:type" content="website" />
  //       <meta name="og:title" content={title} />
  //       <meta name="og:description" content={frontMatter.description} />
  //       <meta
  //         property="og:url"
  //         content={`https://edge-runtime.vercel.app${router.asPath}`}
  //       />
  //       <meta
  //         property="og:image"
  //         content={`https://edge-runtime.vercel.app${
  //           frontMatter.ogImage ?? '/og-image.png'
  //         }`}
  //       />
  //       <meta property="og:site_name" content="Edge Runtime" />
  //     </>
  //   );
  // },
};

export default config;
