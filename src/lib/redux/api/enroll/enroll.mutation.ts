const enroll = (courseId: string) => ({
  url: `/enroll/${courseId}`,
  method: "POST",
});
export const enrollMutation = {
  enroll,
};
