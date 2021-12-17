import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Table, Flex, Button } from "../..";
import {
  RootState,
  fetchEmployees,
  postEmployee,
  useAppDispatch,
} from "../../../store";

const COLUMNS: { title: string; name: string }[] = [
  { name: "id", title: "Id" },
  { name: "first_name", title: "First Name" },
  { name: "last_name", title: "Last Name" },
  { name: "email", title: "Email" },
];

const Agents = () => {
  const dispatch = useAppDispatch();
  const employees = useSelector((state: RootState) => state.employees.data);
  const loadingEmployees = useSelector((state: RootState) => state.employees.loading);
  const loadingEmployee = useSelector((state: RootState) => state.employee.loading);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  if (loadingEmployees || loadingEmployee) {
    return (
      <Flex flexDirection="column" height='100%' justifyContent='center' alignItems='center'>
        <div className="fa-3x">
          <i className="fa-3x fas fa-spinner fa-spin" />
        </div>
      </Flex>
    );
  }

  const handleClick = async () => {
    const response = await dispatch(
      postEmployee({
        first_name: "Bilbo",
        last_name: "Baggins",
        email: "bilbo.baggins@mordor.com",
      })
    );

    if (response?.payload?.id) {
      dispatch(fetchEmployees());
    }
  };

  return (
    <Flex flexDirection="column">
      <Button onClick={handleClick}>New</Button>
      <Table data={employees} columns={COLUMNS} />
    </Flex>
  );
};

export default Agents;
