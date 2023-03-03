import { GetMeResponsesDto } from "../api/api-types";
import { createContext, ReactNode, useContext, useMemo } from "react";

type accountContextType = {
  user: GetMeResponsesDto | null;
};

const accountContentDefaultValue: accountContextType = {
  user: null,
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
  const value = useMemo<accountContextType>(
    () => ({
      user: account || null,
    }),
    [account],
  );

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
