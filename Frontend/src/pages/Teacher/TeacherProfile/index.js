import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Profile from "../../../components/Teacher/Profile";

function TeacherProfile() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <DefaultLayout content={<Profile />}></DefaultLayout>
    </div>
  );
}

export default TeacherProfile;
