import { createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../..";

export const postEmployee = createAsyncThunk(
  "post/employee",
  async (employee: Omit<Employee, 'id'>) => {
    try {
      const response = await fetch("http://localhost:5000/employees", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      }

      return "error";
    } catch (error) {
      console.log(error);
    }
  }
);
