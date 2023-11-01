import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ListItem from "./components/ListItem";


export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ListItem
        task={props.task}
        deleteTask={props.deleteTask}
        disactiveTask={props.disactiveTask}
        filter={props.filter}
      ></ListItem>
    </div>
  );
}
