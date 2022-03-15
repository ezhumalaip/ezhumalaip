const webpack = require("webpack");
export default {
  generate: {
    concurrency: 10,
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {
        hid: "encoding",
        charset: "utf-8",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "",
      },
      {
        hid: "content-type",
        "http-equiv": "Content-Type",
        content: "text/html",
        charset: "UTF-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/images/favicon.png",
        sizes: "16x16",
      },
      {
        rel: "stylesheet",
        href: "/css/bootstrap.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Merriweather",
      },
      {
        rel: "stylesheet",
        href:
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
    script: [
      {
        src: "/js/jquery-1.10.1.js",
        type: "text/javascript",
      },
      {
        id: "pixel-script-poptin",
        src: "https://cdn.popt.in/pixel.js?id=0be2d04d52e22",
        type: "text/javascript",
      },
      {
        src: "/js/bootstrap.js",
        type: "text/javascript",
      },
      {
        src: "/js/common.js",
        type: "text/javascript",
      },
      {
        src: "/js/dropdown-menu.js",
        type: "text/javascript",
      },
      {
        src: "/js/nav.js",
        type: "text/javascript",
      },
      // google tag
      {
        src: "/js/googleTagManager.js",
        type: "text/javascript",
      },
      // {
      //   src:
      //     "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"
      // }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#ff3184",
  },
  /*
   ** Global CSS
   */
  css: [
    // "bootstrap/dist/css/bootstrap.css",
    "@/assets/css/animate.css",
    "@/assets/css/development.css",
  ],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ["~plugins/bootstrap.js"],
  plugins: [
    {
    src:"~plugins/gtm.js",
    ssr: false,
    },
    {
      src:"~plugins/ga.js",
      ssr: false,
      }
  ],
  /*
   ** Nuxt.js dev-modules
   */

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/google-tag-manager",
      "webp-loader",
      {
        id: "GTM-MFHN2HR",
      },
    ],
    ["bootstrap-vue/nuxt"],
    "imagemin-mozjpeg",
    "@nuxtjs/robots",
    "nuxt-robots-module",
    "imagemin-pngquant",
    "imagemin-svgo",


    [
      "@nuxtjs/sitemap",
      {
        hostname: "https://facilio.com",
        path: "/sitemap.xml",
        generate: false,
        routes: [
          "/platform-overview",
          "/rebuild",
          "/iot-edge",
          "/integrations",
          "/property-management",
          "/sustainability-management",
          "/maintenance-management",
          "/workplace-management",
          "/fault-detection-diagnostics",
          "/building-management-system",
          "/hvac-checklist-for-reopening-properties",
          "/industry/commercial-portfolios",
          "/industry/corporate-facilities",
          "/industry/facility-management-services",
          "/solutions/data-driven-portfolio",
          "/solutions/facility-management-visibility",
          "/solutions/asset-lifecycle-management",
          "/solutions/continuous-sustainability",
          "/ebooks/state-of-cre-operations-2020-report",
          "/restart-property-operations",
          "/resources/case-study/al-fajer/",
          "/resources/case-study/quality-fm",
          "/resources/guide/",
          "/resources/infographic/rise-of-real-time-facilities",
          "/resources/state-of-operations-and-maintenance-software",
          "/newsroom/facilio-in-the-news",
          "/newsroom/print",
          "/newsroom/press-release",
          "/futureproof/fp-videos",
          "/futureproof/rebuilding-real-estate-operations-covid19-nihal-nasr",
          "/futureproof/property-management-resources-for-middle-east",
          "/events/",
          "/resources/case-study/",
          "/resources/case-study/green-optima",
          "/why-facilio/",
          "/why-facilio/knowledge-base/real-time-facilities-optimisation",
          "/resources/guide/integrated-asset-energy/",
          "/resources/guide/portfolio-wide/",
          "/resources/guide/evaluating-facilities-management-software",
          "/partners",
          "/about",
          "/resources/case-study/",
          "/contact",
          "/get-started",
          "/get-started-rebuild",
          "/tour",
          "/resources/topics/computer-aided-facility-management",
          "/why-facilio/knowledge-base/everyday-sustainability",
          "/why-facilio/knowledge-base/iot-enabled-bas-integration",
          "/why-facilio/knowledge-base/onboarding-and-migration",
          "/why-facilio/knowledge-base/partner-with-facilio",
          "/newsroom/unifying-operation-at-fm-expo",
          "/newsroom/series-a",
          "/newsroom/future-connected-fm",
          "/newsroom/facilio-challenging-status-quo-by-verdantix-markets-and-markets",
          "/newsroom/dewa-facilio-smart-iot-partnership-gitex-2019",
          "/newsroom/rebuild-remote-operations-toolkit",
          "/newsroom/facilio-helps-quality-group-deliver-frictionless-customer-experience ",
          "/newsroom/icd-brookfield-place-selects-facilio-to-deliver-sustainable-environment",
          "/newsroom/uae-fm-service-providers-harness-technology-to-deliver-seamless-customer-exeperience-amid-pandemic",
          "/newsroom/morohub-joins-forces-with-facilio-to-boost-energy-saving-strategies",
          "/terms-of-service",
          "/features",
          "/webinar/leading-property-operations-with-data",
          "whats-new-in-facilio/july-2020",
          "whats-new-in-facilio/september-2020",
          "/security",
          "/privacy-policy",
          "/gdpr-compliance",
          "/customer-success",
          "/real-estate-leaders-guide",
          "/rebuild/product-walkthrough",
          "/product-walkthrough/videos",
          "/futureproof/property-management-resources-for-north-america",
          "apple-app-site-association",
        ],
      },
    ],
    // ['nuxt-robots-module',

    // ]
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    // componentPlugins: [
    //   'LayoutPlugin',
    //   'FormPlugin',
    //   'FormCheckboxPlugin',
    //   'FormInputPlugin',
    //   'FormRadioPlugin',
    //   'ToastPlugin',
    //   'ModalPlugin',
    //   'BContainer',
    //   'BRow',
    //   'BCol',
    //   'BFormInput',
    //   'BButton',
    //   'BTable',
    //   'BModal',
    //   'IconsPlugin'
    // ],
    // icons: true,
    // directivePlugins: [
    //  'VBPopoverPlugin',
    //  'VBTooltipPlugin',
    //  'VBScrollspyPlugin',
    //  'VBModal',
    //  'VBPopover',
    //  'VBTooltip',
    //  'VBScrollspy'
    // ]
  },
  robots: [
    {
      UserAgent: "Googlebot",
      Disallow: () => "/partner/partner-directory", // accepts function
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "/coming-soon",
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "/404",
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "/dummy-2",
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "/test",
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "/thankyou",
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "/thank-you-for-downloading",
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "/resources/connected-buildings",
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "/webinar/listing-page",
    },
    {
      UserAgent: "Googlebot",
      Disallow: () => "apple-app-site-association",
    },
    {
      UserAgent: "*",
      Disallow: () => "/blog/wp-admin/",
      Disallow: () => "/guide/",
      Allow: () => "/blog/wp-content/uploads/",
    },
  ],
  // optimizedImages: {
  //   optimizeImages: true,
  //   optimizeImagesInDev:true
  // },
  // modules: [
  //   '@nuxtjs/redirect-module'
  // ],
  // redirect: [{
  //   from: 'https://facilio.tv/index.html',
  //   to: 'https://facilio.tv'
  // }],

  /*
  /** Build configuration
   */

  // sitemap: {
  //   routes: [
  //     '/',
  //     '/platform-overview',
  //     '/iot-edge',
  //     '/building-management-system',
  //     '/about',
  //     '/tour',
  //     'events',
  //     'sustainability-management',
  //     'fault-detection-diagnostics',
  //     'integrations'
  //   ],
  //   path: '/sitemap.xml',
  //   gzip: true,
  //   generate: false,
  // },

  transition: {
    name: "fade",
    mode: "out-in",
  },

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },

  build: {
    standalone: true,
    typescript: {
      typeCheck: {
        memoryLimit: 512,
      },
    },
    /*
     ** You can extend wepack config here
     */
    // vendor: ["bootstrap"],
    // plugins: [
    //   // set shortcuts as global for bootstrap
    // ],
    extend(config, ctx) {},
  },
};
