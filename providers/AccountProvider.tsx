import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { GetMeResponsesDto, OkResponseDto } from "../api/api-types";
import { client } from "../api/client";

type accountContextType = {
  user: GetMeResponsesDto | null;
  watched: string[];
  logout: () => Promise<void>;
  addLessonToWatched: (id: string) => void;
  addCourse: (id: string, availableUntilDate: string) => void;
};

const accountContentDefaultValue: accountContextType = {
  user: null,
  watched: [],
  logout: async () => {},
  addLessonToWatched: () => {},
  addCourse: (): void => {},
};

const AccountContext = createContext<accountContextType>(
  accountContentDefaultValue,
);

export const useAccountContext = () =>
  useContext<accountContextType>(AccountContext);

interface IAccountProvider {
  children: ReactNode;
  account: GetMeResponsesDto | null;
  watched: string[];
}

export const AccountProvider = ({
  children,
  account,
  watched,
}: IAccountProvider) => {
  const router = useRouter();

  const [userAccount, setUserAccount] = useState<GetMeResponsesDto | null>(
    account,
  );

  const [lessonWatched, setLessonWatched] = useState<string[]>(watched);

  const logout = async (): Promise<void> => {
    try {
      await client.get<OkResponseDto>("/auth/logout", {
        withCredentials: true,
      });
      setUserAccount(null);
      await router.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const addLessonToWatched = (id: string): void => {
    setLessonWatched((prevState) => [...prevState, id]);
  };

  const addCourse = (courseId: string, availableUntilDate: string): void => {
    setUserAccount((prevState) => {
      if (prevState) {
        return {
          ...prevState,
          courses: [
            ...prevState.courses,
            {
              course: {
                _id: courseId,
              },
              watchedLessons: [],
              availableUntil: availableUntilDate,
            },
          ],
        };
      }

      return null;
    });
  };

  const value = useMemo<accountContextType>(
    () => ({
      user: userAccount || null,
      watched: lessonWatched,
      logout,
      addLessonToWatched,
      addCourse,
    }),
    [lessonWatched, userAccount, addCourse, logout, addLessonToWatched],
  );

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
