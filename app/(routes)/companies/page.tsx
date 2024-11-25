"use client";

import React, { useState } from "react";
import { HeaderCompanies } from "./components/headerCompanies";
import ListCompanies from "./components/listCompanies/ListCompanies";

export default function CompaniesPage() {
  const [formData, setFormData] = useState(null);
  return (
    <div>
      <HeaderCompanies />
      <ListCompanies formData={formData} />
    </div>
  );
}
