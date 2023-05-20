import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import UserList from "../../../components/Admin/UserList";

function ManagerUser() {
  return <DefaultLayout content={<UserList />}></DefaultLayout>;
}

export default ManagerUser;
