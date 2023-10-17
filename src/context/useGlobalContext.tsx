import {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import useFirestoreCollection from "../hook/useFiretoreCollection";
import { fetchFirestoreData } from "../utils/fetchFirestoreData";
import Loader from "../components/common/Loader";

type viewsCountProps = {
  count: number;
};

export type ProjectFromDBProps = {
  projectName: string;
  client: string;
  projectLink: string;
  imgUrl: string;
  type: string;
  resourceI: string;
  resourceII: string;
  resourceIII: string;
  projectIimage: string;
  projectIIIimage: string;
  projectIIimage: string;
  Description: string;
  id: string;
};

interface AppContextProps {
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  projectsFromDB: ProjectFromDBProps[];
  projectsFromDBLoader: boolean;
  viewsCount: viewsCountProps | null;
  pageType: string;
  setpageType: React.Dispatch<React.SetStateAction<string>>;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  //loading state
  const [loading, setloading] = useState<boolean>(false);

  // get projects from firestore

  const { data: projectsFromDB, loader: projectsFromDBLoader } =
    useFirestoreCollection<ProjectFromDBProps>("Projects");

  // get page count
  const [viewsCount, setViewsCount] = useState<viewsCountProps>({
    count: 0,
  });

  useEffect(() => {
    const getViewsCountDetail = async () => {
      setloading(true);
      const data = await fetchFirestoreData("pageViews", "homepage");
      if (data) {
        setViewsCount(data as viewsCountProps);
      }
      setloading(false);
    };
    getViewsCountDetail();
  }, []);

  //loading state
  const [pageType, setpageType] = useState<string>("home");

  if (projectsFromDBLoader || loading) return <Loader />;

  return (
    <AppContext.Provider
      value={{
        loading,
        setloading,
        projectsFromDB,
        projectsFromDBLoader,
        viewsCount,
        pageType,
        setpageType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { useGlobalContext, AppProvider };
