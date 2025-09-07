"use client";

import InputFile from "@/_components/form/InputFile";
import { useState } from "react";
import { FaFilePdf, FaMinus, FaPlus } from "react-icons/fa";

export default function LecturePdfCompo() {
  // state for handle multiple pdf file input;
  const [pdfFields, setPdfFields] = useState([{ id: crypto.randomUUID() }]);

  //  handler for increase input field
  const handleAddPdfField = () => {
    setPdfFields((prev) => [...prev, { id: crypto.randomUUID() }]);
  };

  //   handler for remove individual field;
  const handleRemovePdfField = (id: string) => {
    setPdfFields((prev) => prev.filter((field) => field.id !== id));
  };
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-text-primary flex items-center gap-2">
          <FaFilePdf className="text-red-500" /> Lecture Notes (PDF)
        </h3>
        <button
          type="button"
          onClick={handleAddPdfField}
          className="flex items-center gap-2 text-sm btn btn-primary py-2 px-3 rounded"
        >
          <FaPlus className="text-xs" /> Add PDF
        </button>
      </div>

      <div className="space-y-3">
        {pdfFields?.map((field, index) => (
          <div
            key={field.id}
            className="flex items-center gap-3 bg-background p-3 rounded shadow-sm"
          >
            <div className="flex-grow">
              <InputFile
                name={`notes.${index}`}
                label={`PDF File ${index + 1}`}
              />
            </div>

            {pdfFields.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemovePdfField(field.id)}
                className="text-red-500 p-4"
              >
                <FaMinus />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
