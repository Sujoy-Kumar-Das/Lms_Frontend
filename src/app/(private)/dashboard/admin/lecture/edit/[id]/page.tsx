import React from "react";

export default async function LectureEditPage({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;
  return <div></div>;
}
