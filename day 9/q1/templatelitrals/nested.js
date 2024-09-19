function formatMessage(name, status) {
    return `Welcome back, ${name} Your status is: ${status ? `active` : `inactive`}.`;
  }
  
  console.log(formatMessage("John", true));
