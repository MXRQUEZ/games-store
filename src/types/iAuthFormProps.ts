import React from "react";

interface IAuthFormProps {
  setAuth: (authState: boolean) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export default IAuthFormProps;
