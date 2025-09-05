const enroll = (id: string) => ({
  url: `/course/${id}/enroll`,
  method: "POST",
});

export const courseMutation = {
  enroll,
};
