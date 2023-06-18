import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import ProfileSetting from "../../../components/Teacher/ProfileSetting";

function TeacherProfileSetting() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--background)" }}>
      <DefaultLayout content={<ProfileSetting />}></DefaultLayout>
    </div>
  );
}

export default TeacherProfileSetting;
