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

type ProjectFromDBProps = {
  projectName: string;
  imgUrl: string;
  projectLink: string;
  type: string;
};

interface AppContextProps {
  loading: boolean;
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
  projectsFromDB: ProjectFromDBProps[];
  projectsFromDBLoader: boolean;
  viewsCount: viewsCountProps | null;
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

  //   console.log(projectsFromDB);

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

  if (projectsFromDBLoader || loading) return <Loader />;

  return (
    <AppContext.Provider
      value={{
        loading,
        setloading,

        projectsFromDB,
        projectsFromDBLoader,
        viewsCount,
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
