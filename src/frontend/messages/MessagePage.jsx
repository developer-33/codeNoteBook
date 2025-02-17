
// import ChatBox from "./Messages";
import Messenger from "./Message1";
const MessagePage = () => {
    return (
      <div className="bg-white grid grid-3-cols dark:bg-gray-800">
        {/* <div className="box2">
              <ChatBox currentUser="User1" selectedUser="User2" />
        </div> */}
        <div>
             <Messenger />
        </div>
      </div>
    );
  };
  
  export default MessagePage;
  