import useUserStore from "@Zustand/user";
import { useParams } from "react-router-dom";

const UserInfoScreen = () => {
  const { id } = useParams();
  const { user } = useUserStore();

  return (
    <div>
      {`Hello! params:${id} / zustand:${(user?.id, user?.name)}`}
      <iframe
        src="/godot-export/godot.html"
        title="Godot Exported HTML"
        width="600px"
        height="600px"
      />
    </div>
  );
};

export default UserInfoScreen;
