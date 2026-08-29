export const validateField = (name, value) => {
  let error = "";

  switch (name) {
    case "fullName":
      if (!value.trim()) {
        error = "Full Name is required";
      } else if (value.length > 20) {
        error = "Name cannot exceed 20 characters";
      }
      break;

    case "email":
      if (!value.trim()) {
        error = "Email address is required";
      } else if (!value.includes("@")) {
        error = "Email must contain an '@' symbol";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
      break;

    case "phone":
      if (!value.trim()) {
        error = "Phone number is required";
      } else if (value.replace(/\D/g, "").length > 12) {
        error = "Phone number cannot exceed 12 digits";
      }
      break;

    case "subject":
      if (!value.trim()) {
        error = "Subject is required";
      } else if (value.length > 20) {
        error = "Subject cannot exceed 20 characters";
      }
      break;

    case "message":
      if (!value.trim()) {
        error = "Message is required";
      }
      break;

    default:
      break;
  }

  return error;
};

export const isFormValid = (formData, errors) => {
  const hasErrors = Object.values(errors).some((err) => err !== "");
  const allFieldsFilled = Object.values(formData).every((val) => val.trim() !== "");
  return allFieldsFilled && !hasErrors;
};
