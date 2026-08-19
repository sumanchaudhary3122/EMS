const employees = [
  {
    id: 1,
    firstName: "Asha",
    email: "employee1@example.com",
    password: "123",

    taskCounts: {
      active: 5,
      newTask: 3,
      completed: 3,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Update Customer Records",
        taskDescription:
          "Review and update customer contact information in the CRM.",
        taskDate: "2026-08-16",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Weekly Report",
        taskDescription:
          "Collect weekly performance data and prepare the team report.",
        taskDate: "2026-08-17",
        category: "Reports",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Attend Team Meeting",
        taskDescription:
          "Participate in the weekly team meeting and discuss project progress.",
        taskDate: "2026-08-15",
        category: "Meetings",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review Support Tickets",
        taskDescription:
          "Go through pending customer support tickets and resolve assigned issues.",
        taskDate: "2026-08-18",
        category: "Support",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Submit Inventory Report",
        taskDescription:
          "Check inventory levels and submit the updated inventory report.",
        taskDate: "2026-08-14",
        category: "Inventory",
      },
    ],
  },

  {
    id: 2,
    firstName: "Sneha Chaudhary",
    email: "employee2@example.com",
    password: "123",

    taskCounts: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 2,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription:
          "Create a responsive landing page design for the new product.",
        taskDate: "2026-08-16",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Brand Assets",
        taskDescription:
          "Organize and update logos, icons, and other brand assets.",
        taskDate: "2026-08-17",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: true,
        taskTitle: "Create Social Media Banner",
        taskDescription:
          "Design promotional banners for the upcoming social media campaign.",
        taskDate: "2026-08-15",
        category: "Marketing",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Review UI Prototype",
        taskDescription:
          "Review the latest application prototype and provide design feedback.",
        taskDate: "2026-08-19",
        category: "UI/UX",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prepare Presentation Slides",
        taskDescription:
          "Create presentation slides for the monthly product review.",
        taskDate: "2026-08-13",
        category: "Presentation",
      },
    ],
  },

  {
    id: 3,
    firstName: "Nishma",
    email: "employee3@example.com",
    password: "123",

    taskCounts: {
      active: 5,
      newTask: 4,
      completed: 2,
      failed: 1,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription:
          "Investigate and fix the authentication issue reported by users.",
        taskDate: "2026-08-16",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Dashboard",
        taskDescription:
          "Build the employee dashboard with task and performance sections.",
        taskDate: "2026-08-18",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription:
          "Review the pull request for the employee management module.",
        taskDate: "2026-08-15",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write API Documentation",
        taskDescription:
          "Document the newly created REST API endpoints.",
        taskDate: "2026-08-20",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: true,
        taskTitle: "Deploy Test Build",
        taskDescription:
          "Deploy the latest application build to the testing environment.",
        taskDate: "2026-08-14",
        category: "Deployment",
      },
    ],
  },

  {
    id: 4,
    firstName: "Astha ",
    email: "employee4@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 4,
      failed: 2,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Process Expense Reports",
        taskDescription:
          "Review employee expense submissions and verify receipts.",
        taskDate: "2026-08-16",
        category: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Budget",
        taskDescription:
          "Prepare the department budget for the upcoming month.",
        taskDate: "2026-08-17",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Verify Invoices",
        taskDescription:
          "Check vendor invoices against purchase orders and receipts.",
        taskDate: "2026-08-15",
        category: "Accounting",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Payment Records",
        taskDescription:
          "Update payment statuses for all outstanding vendor invoices.",
        taskDate: "2026-08-19",
        category: "Accounting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Complete Tax Summary",
        taskDescription:
          "Compile the required financial information for the tax summary.",
        taskDate: "2026-08-12",
        category: "Finance",
      },
    ],
  },

  {
    id: 5,
    firstName: "Pretty",
    email: "employee5@example.com",
    password: "123",

    taskCounts: {
      active: 5,
      newTask: 5,
      completed: 3,
      failed: 2,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: true,
        failed: true,
        taskTitle: "Contact New Leads",
        taskDescription:
          "Contact new leads and record their responses in the CRM.",
        taskDate: "2026-08-16",
        category: "Sales",
      },
      {
        active: true,
        newTask: true,
        completed: true,
        failed: true,
        taskTitle: "Prepare Client Proposal",
        taskDescription:
          "Prepare a detailed proposal for the new enterprise client.",
        taskDate: "2026-08-17",
        category: "Sales",
      },
      {
        active: true,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Follow Up With Clients",
        taskDescription:
          "Follow up with existing clients regarding their recent inquiries.",
        taskDate: "2026-08-15",
        category: "Client Relations",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Schedule Product Demo",
        taskDescription:
          "Schedule product employeenstrations with interested customers.",
        taskDate: "2026-08-18",
        category: "Sales",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Close Pending Deal",
        taskDescription:
          "Complete the remaining steps required to close the pending client deal.",
        taskDate: "2026-08-13",
        category: "Sales",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "SUMAN",
    email: "admin@me.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return{employees,admin}
  
};
