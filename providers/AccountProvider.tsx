import { createContext, ReactNode, useContext, useMemo, useState } from "react";

import { GetMeResponsesDto, OkResponseDto } from "../api/api-types";
import { client } from "../api/client";

type accountContextType = {
  user: GetMeResponsesDto | null;
  watched: string[];
  logout: () => Promise<void>;
};

const accountContentDefaultValue: accountContextType = {
  user: null,
  watched: [],
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
  watched: string[];
}

export const AccountProvider = ({ children, account }: IAccountProvider) => {
  const [userAccount, setUserAccount] = useState<GetMeResponsesDto | null>(
    account,
  );

  const logout = async () =>
    client
      .get<OkResponseDto>("/auth/logout", { withCredentials: true })
      .then(() => setUserAccount(null));

  const value = useMemo<accountContextType>(
    () => ({
      user: userAccount || null,
      watched: [],
      logout,
    }),
    [userAccount],
  );

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};
