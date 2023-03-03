function displayCourse(option) {
  let defaultValues = {
    courseName: "default course name",
    courseDuation: 3,
    courseOwner: "default owner",
  };
  Object.assign(defaultValues, option);
  console.log(
    `Corse name : ${defaultValues.courseName} , duration : ${defaultValues.courseDuation}, course owner : ${defaultValues.courseOwner}`
  );
}

displayCourse({
  courseName: "JS",
  courseDuation: 4,
  courseOwner: "Ali",
});
