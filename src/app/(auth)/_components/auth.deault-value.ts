const defaultFields = {
  login: [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ],
  register: [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ],
};

const defaultValues = {
  login: {
    email: "suju@gmail.com",
    password: "Suju4321@",
  },
  register: {
    name: "",
    email: "",
    password: "",
  },
};

const footerValues = {
  login: {
    title: "Don't have an account?",
    link: "/register",
    linkText: "Register",
  },
  register: {
    title: "Already have an account?",
    link: "/login",
    linkText: "Login",
  },
};

const authValues = {
  defaultValues,
  defaultFields,
  footerValues,
};

export default authValues;
