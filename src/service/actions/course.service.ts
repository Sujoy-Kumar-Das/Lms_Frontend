"use server";

export const getAllCourse = async () => {
  const res = await fetch(`${process.env.backend_base_url}/course`, {
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch courses");

  const result = await res.json();

  return result.data;
};
