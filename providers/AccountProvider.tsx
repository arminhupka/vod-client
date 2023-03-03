import { GetMeResponsesDto, OkResponseDto } from "../api/api-types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { client } from "../api/client";

type accountContextType = {
  user: GetMeResponsesDto | null;
  logout: () => Promise<void>;
};

const accountContentDefaultValue: accountContextType = {
  user: null,
  logout: async () => {},
};

const AccountContext = createContext<accountContextType>(
  accountContentDefaultValue,
);

export const useAccountContext = () =>
  useContext<accountContextType>(AccountContext);

interface IAccountProvider {
  children: ReactNode;
  account: GetMeResponsesDto | null;
}

export const AccountProvider = ({ children, account }: IAccountProvider) => {
  const [userAccount, setUserAccount] = useState<GetMeResponsesDto | null>(
    null,
  );

  const logout = async () =>
    client
      .get<OkResponseDto>("/auth/logout", { withCredentials: true })
      .then(() => setUserAccount(null));

  const value = useMemo<accountContextType>(
    () => ({
      user: userAccount || null,
      logout,
    }),
    [userAccount],
  );

  useEffect(() => {
    setUserAccount(account);
  }, [account]);

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
