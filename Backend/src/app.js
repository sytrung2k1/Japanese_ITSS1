const express = require("express");

require("dotenv").config();
const app = express();
const port = process.env.PORT;
const programmingLanguagesRouter = require("./routes/programmingLanguages");
const userRoute = require("./routes/userRoutes");
const targetRoutes = require("./routes/targetRoutes");
const teacherProfileRoutes = require("./routes/teacherProfileRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const targetTeacherProfileRoutes = require("./routes/targetTeacherProfileRoute");
const cors = require("cors");

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(cors());
app.get("/", (req, res) => {
	res.json({ message: "ok" });
});
app.use("/programming-languages", programmingLanguagesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({ message: err.message });
	return;
});

app.use("/users", userRoute);
app.use("/targets", targetRoutes);
app.use("/teacher-profiles", teacherProfileRoutes);
app.use("/bookmarks", bookmarkRoutes);
app.use("/feedbacks", feedbackRoutes);
app.use("/target-teacher-profiles", targetTeacherProfileRoutes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
