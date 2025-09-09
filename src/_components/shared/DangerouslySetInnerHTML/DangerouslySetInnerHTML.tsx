import decodeHtml from "@/utils/decode_html";

export default function DangerouslySetInnerHTML({ text }: { text: string }) {
  return (
    <div
      className="
          max-w-none space-y-4
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-text-primary
          [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-text-primary
          [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-text-primary
          [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-text-secondary
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:text-text-secondary
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:text-text-secondary
          [&>a]:text-secondary [&>a]:underline hover:[&>a]:opacity-80
          [&>blockquote]:border-l-4 [&>blockquote]:border-secondary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-text-secondary
          [&>code]:bg-background [&>code]:text-secondary [&>code]:px-1 [&>code]:rounded
        "
      dangerouslySetInnerHTML={{ __html: decodeHtml(text) }}
    />
  );
}
