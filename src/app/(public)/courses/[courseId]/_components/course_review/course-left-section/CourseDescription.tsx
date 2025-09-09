import DangerouslySetInnerHTML from "@/_components/shared/DangerouslySetInnerHTML/DangerouslySetInnerHTML";
import decodeHtml from "@/utils/decode_html";

interface CourseDescriptionProps {
  description: string;
}

export default function CourseDescription({
  description,
}: CourseDescriptionProps) {
  return (
    <div className="mt-8 bg-background rounded-xl shadow-sm p-6">
      <DangerouslySetInnerHTML text={description} />
    </div>
  );
}
