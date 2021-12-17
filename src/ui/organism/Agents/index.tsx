import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Table, Flex } from "../..";
import { RootState, fetchEmployees } from "../../../store";

const COLUMNS: { title: string; name: string }[] = [
  { name: "id", title: "Id" },
  { name: "first_name", title: "First Name" },
  { name: "last_name", title: "Last Name" },
  { name: "email", title: "Email" },
];

const Agents = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees.data);
  const loading = useSelector((state: RootState) => state.employees.loading);


  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  if (loading) {
    return <Flex>Loading...</Flex>;
  }

  return (
    <Flex>
      <Table data={employees} columns={COLUMNS} />
    </Flex>  
  );
};

export default Agents;
