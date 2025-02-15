
import ChatBox from "./Messages";

const MessagePage = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <ChatBox currentUser="User1" selectedUser="User2" />
      </div>
    );
  };
  
  export default MessagePage;
  