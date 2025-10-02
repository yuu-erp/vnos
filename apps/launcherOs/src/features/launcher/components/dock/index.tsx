import React, { useState } from "react";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/shared/lib/utils";

const apps = [
  { id: "finder", icon: "/icon_512x512.png" },
  { id: "bitmap", icon: "/Bitmap.png" },
  { id: "safari", icon: "/safari_512x512.png" },
  { id: "message", icon: "/message_512x512.png" },
];

// 1. Wrapper cho từng item
function DockItem({ id, icon }: { id: string; icon: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex flex-col items-center justify-center cursor-pointer ${
        isDragging ? "scale-110 z-50" : ""
      }`}
    >
      <div className="size-13 rounded-2xl overflow-hidden">
        <img src={icon} alt={id} className="w-full h-full" />
      </div>
      <span
        className={cn("size-1 bg-white rounded-full block mt-1", isDragging ? "hidden" : "block")}
      ></span>
    </div>
  );
}

// 2. Dock
export default function Dock() {
  const [items, setItems] = useState(apps.map((a) => a.id));
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <nav className="fixed left-0 right-0 bottom-0 flex justify-center overflow-visible">
      <div className="h-[65px] bg-[#4A4A4A]/40 backdrop-blur-2xl rounded-2xl px-1 flex-row shadow overflow-visible flex items-center">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => {
            const { active, over } = event;
            if (over && active.id !== over.id) {
              setItems((prev) => {
                const oldIndex = prev.indexOf(active.id as string);
                const newIndex = prev.indexOf(over.id as string);
                return arrayMove(prev, oldIndex, newIndex);
              });
            }
          }}
        >
          <SortableContext items={items} strategy={horizontalListSortingStrategy}>
            {items.map((id) => {
              const app = apps.find((a) => a.id === id)!;
              return <DockItem key={app.id} id={app.id} icon={app.icon} />;
            })}
          </SortableContext>
        </DndContext>
      </div>
    </nav>
  );
}
