import React from "react";

const TableHeaders = () => {
  const headers = [
    "Employee Code",
    "First Name",
    "Last Name",
    "Email",
    "Contact",
    "Actions",
  ];

  const generateHeaders = headers.map((header) => (
    <th key={header}>
      <a href="/#" id={header}>
        {header}
      </a>
    </th>
  ));
  
  return (
    <thead>
      <tr>{generateHeaders}</tr>
    </thead>
  );
};

export default TableHeaders;
