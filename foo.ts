import { EmployeeResolvers } from "./types.gen";

export const employeeResolvers: EmployeeResolvers = {
  name: async (parent, args, context) => {
    return parent.name.toUpperCase();
  }
};
