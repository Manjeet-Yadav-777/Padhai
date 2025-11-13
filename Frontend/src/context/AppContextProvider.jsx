import { StudentProvider } from "./StudentContext";
import { TeacherProvider } from "./TeacherContext";
import { UserProvider } from "./userContext";

export const AppContextProvider = ({ children }) => {
  const providers = [UserProvider, TeacherProvider, StudentProvider];

  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, children);
};
