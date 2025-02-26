const routes = [
  //-------------- WHITE LAYOUT ---------------------//
  {
    path: "/",
    component: () => import("pages/LoginProcess.vue"),
  },
  {
    path: "/:token",
    component: () => import("pages/LoginProcess.vue"),
  },

  {
    path: "/portal",
    component: () => import("src/layouts/PortalLayoutwhite.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "/portal/login",
        component: () => import("pages/LoginPage.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "portalfakulti",
        component: () => import("pages/LandingPage2.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "portalpensyarah",
        component: () => import("pages/LandingPage1.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },
        // meta: { hideBreadcrumbs: false, hideRoleSelection: false }, // show breadcrumbs and role selection
      },
    ],
  },
  {
    path: "/forgot-password",
    component: () => import("pages/forgotPassword.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },

  //-------------- GUIDELINE ---------------------//
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "landingpage2",
        component: () => import("pages/IndexPage2.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "landingpage3",
        component: () => import("src/pages/IndexPageother.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "landingpage4",
        component: () => import("pages/IndexPage4.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      {
        path: "menu1",
        component: () => import("pages/LandingPage1.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },
        // meta: { hideBreadcrumbs: false, hideRoleSelection: false }, // show breadcrumbs and role selection
      },
      {
        path: "menu2",
        component: () => import("pages/LandingPage2.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },
        // meta: { hideBreadcrumbs: false, hideRoleSelection: false }, // show breadcrumbs and role selection
      },
      {
        path: "menu3",
        component: () => import("pages/LandingPage3.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },
        // meta: { hideBreadcrumbs: false, hideRoleSelection: false }, // show breadcrumbs and role selection
      },
      {
        path: "othermenu",
        component: () => import("pages/OtherMenu.vue"),
        meta: {
          hideDrawer: false,
          hideBreadcrumbs: false,
          hideRoleSelection: false,
        },

      },

      {
        path: "form",
        component: () => import("pages/FormPage.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "form2",
        component: () => import("pages/FormPage2.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "chart",
        component: () => import("pages/ChartPage.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      // {
      //   path: "modal",
      //   component: () => import("pages/ComponentModal.vue"),
      //   meta: { hideDrawer: false, hideRoleSelection: true },
      // },
      {
        path: "tab",
        component: () => import("pages/ComponentTab.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "button",
        component: () => import("pages/ComponentButton.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "accordian",
        component: () => import("pages/ComponentCollapsible.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      // {
      //   path: "markahonline",
      //   component: () => import("pages/DashboardPage1.vue"),
      //   meta: { hideDrawer: false, hideRoleSelection: true },
      // },
      // {
      //   path: "Dashboard",
      //   component: () => import("pages/DashboardPage1.vue"),
      //   meta: { hideDrawer: false },
      // },
      {
        path: "report-table",
        component: () => import("pages/reportTable.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "dropdown-table",
        component: () => import("pages/DropdownFiltertable.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "event-calendar",
        component: () => import("pages/EventCalendar.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "schedule-calendar",
        component: () => import("pages/ScheduleCalendar.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        path: "calendar-calendar",
        component: () => import("pages/calendarCalendar.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
      {
        //Example for loading/ skeleton
        path: "example-loading",
        component: () => import("pages/ExampleLoading.vue"),
        meta: { hideDrawer: false, hideRoleSelection: true },
      },
    ],
  },
  //-------------- PENGAMBILAN ---------------------//
  {
    path: "/pengambilan",
    component: () => import("layouts/MainLayoutPengambilan.vue"),
    children: [
      {
        path: "/landingpgsaringan",
        name: "LandingPageSaringan",
        component: () =>
          import("pages/fakulti/LandingPageSaringan.vue"),
      },
      {
        path: "/detailspermohonan/:p001nokp",
        name: "DetailsPermohonan",
        props: true,
        component: () =>
          import("pages/fakulti/DetailsPermohonan.vue"),
      },
      {
        path: "/editdetailspermohonan/:p001nokp",
        name: "EditPermohonan",
        component: () =>
          import("pages/fakulti/EditPermohonan.vue"),
      },
      {
        path: "/test",
        name: "Test",
        component: () => import("pages/fakulti/TestRet.vue"),
        meta: {
          hideDrawer: true,
          hideBreadcrumbs: true,
          hideRoleSelection: true,
        },
        // meta: { hideBreadcrumbs: true, hideRoleSelection: true }, // Index page, hide breadcrumbs and role selection
      },
      //page admin lulus
      {
        path: "/landingpgkelulusan",
        name: "LandingPageKelulusan",
        component: () =>
          import("pages/admin/LandingPageKelulusan.vue"),
      },
      {
        path: "/detailspermohonanadmin/:p001nokp",
        name: "DetailsPermohonanAdmin",
        component: () =>
          import("pages/admin/DetailPermohonanAdmin.vue"),
      },
      {
        path: "/editdetailspermohonanadmin/:p001nokp",
        name: "EditPermohonanAdmin",
        component: () =>
          import("pages/admin/EditPermohonanAdmin.vue"),
      },
      {
        path: "/landingpgoffer",
        name: "LandingPageOffer",
        component: () =>
          import("pages/admin/ListPemohonOffer.vue"),
      },
      {
        path: "/editoffer/:p001nokp",
        name: "EditOffer",
        component: () =>
          import("pages/admin/DetailPemohonOffer.vue"),
      },
    ],
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
