import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Info from "../../../components/Teacher/Info";

function TeacherInfo() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <DefaultLayout content={<Info />}></DefaultLayout>
    </div>
  );
}

export default TeacherInfo;
