"use client";
import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

type Props = {
  images: string[]; // Lista över bild-URL:er
};

const PDFGenerator = ({ images }: Props) => {
  const handleGeneratePDF = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensioner i punkter (bredd x höjd)

      const margin = 20; // Marginal runt sidan
      const gridCols = 4; // Antal kolumner (4 bilder per rad)
      const gridRows = 2; // Antal rader (2 rader totalt)
      const cellWidth = (595.28 - margin * 2) / gridCols; // Bredd för varje bild
      const cellHeight = (841.89 - margin * 2) / gridRows; // Höjd för varje bild

      for (let i = 0; i < images.length; i++) {
        const imgUrl = images[i];
        const res = await fetch(imgUrl);
        const imgBytes = await res.arrayBuffer();

        let image;
        if (imgUrl.endsWith(".png")) {
          image = await pdfDoc.embedPng(imgBytes); // För PNG
        } else if (imgUrl.endsWith(".jpg") || imgUrl.endsWith(".jpeg")) {
          image = await pdfDoc.embedJpg(imgBytes); // För JPG
        } else {
          throw new Error(`Bildformatet för ${imgUrl} stöds inte.`);
        }

        // Räkna ut positionen i rutnätet
        const row = Math.floor(i / gridCols); // Rad (0 eller 1)
        const col = i % gridCols; // Kolumn (0 till 3)

        // Räkna ut bildens position
        const x = margin + col * cellWidth;
        const y = 841.89 - margin - (row + 1) * cellHeight;

        // Skala om bilden så att den passar inom rutan
        const aspectRatio = image.width / image.height;
        const fitWidth = cellWidth;
        const fitHeight = cellWidth / aspectRatio;

        const width =
          fitHeight > cellHeight ? cellHeight * aspectRatio : fitWidth;
        const height = fitHeight > cellHeight ? cellHeight : fitHeight;

        // Centrera bilden i cellen
        const offsetX = (cellWidth - width) / 2;
        const offsetY = (cellHeight - height) / 2;

        // Rita bilden på sidan
        page.drawImage(image, {
          x: x + offsetX,
          y: y + offsetY,
          width,
          height,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      saveAs(blob, "Generated_A4.pdf");
    } catch (error) {
      console.error("Fel vid skapandet av PDF:", error);
      alert("Ett fel uppstod vid skapandet av PDF-filen.");
    }
  };

  return (
    <button
      onClick={handleGeneratePDF}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
    >
      Skapa PDF
    </button>
  );
};

export default PDFGenerator;
