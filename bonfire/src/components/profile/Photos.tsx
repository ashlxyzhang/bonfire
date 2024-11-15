import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Photos() {
  const [images, setImages] = useState(["", "", "", "", "", ""]);

  const handleImage = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      const index = images.indexOf("");

      setImages((prev) => {
        if (index !== -1) {
          const updatedImages = [...prev];
          updatedImages[index] = newImage;
          return updatedImages;
        }
        return prev;
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor="picture">Add Photos</Label>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            className="w-24 h-36 border border-red-200 rounded-md"
            key={index}
          >
            {image && (
              <img src={image} className="w-24 h-36 rounded-md object-cover" />
            )}
          </div>
        ))}
      </div>

      <Input id="picture" type="file" onChange={handleImage} />

      <Button>Submit Profile</Button>
    </div>
  );
}
