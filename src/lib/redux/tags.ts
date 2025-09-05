export const tags = {
  course: "Course",
  user: "User",
  module: "Module",
  lecture: "Lecture",
} as const;

export type TagKey = keyof typeof tags;
export type TagValue = (typeof tags)[TagKey];

export const tagList: TagValue[] = Object.values(tags);
