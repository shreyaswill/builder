import { useState } from "react";

const DragDropHTML5 = () => {
    const [boxes, setBoxes] = useState<number[]>([]);

    const handleDragStart = (event: React.DragEvent) => {
        event.dataTransfer.setData("text/plain", "box");
    };

    const handleDrop = (event: React.DragEvent) => {
        event.preventDefault();
        setBoxes((prev) => [...prev, prev.length + 1]);
    };

    return (
        <div className="flex gap-4 p-4">
            <div className="w-32 p-4 bg-gray-200">
                <div className="p-2 bg-blue-500 text-white cursor-pointer" draggable={true} onDragStart={handleDragStart}>
                    Drag Me
                </div>
            </div>
            <div
                className="w-full h-64 border-2 border-dashed flex items-center justify-center"
                onDragOver={(e) => e.preventDefault()} // Allow drop
                onDrop={handleDrop} // Handle drop
            >
                Drop Here
            </div>
            <div className="p-4">
                {boxes.map((box) => (
                    <div key={box} className="p-2 bg-green-500 text-white m-2">
                        Box {box}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragDropHTML5;
