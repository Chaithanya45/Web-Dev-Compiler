import { Button } from "./ui/button";
import { Save, Share2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HelperHeader() {
  return (
    <div className="_helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="_btn_container flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="success"
        >
          <Save size={16} />
          Save
        </Button>
        <Button
          className="flex justify-center items-center gap-1"
          variant="secondary"
        >
          <Share2 size={16} />
          Share
        </Button>
      </div>
      <div className="_tab_switcher flex justify-center items-center gap-1">
        <small>Current Language:</small>
        <Select defaultValue="html">
          <SelectTrigger className="w-[120px] bg-gray-800 text-white outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
