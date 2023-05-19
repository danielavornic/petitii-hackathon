import React, { createContext, useState } from "react";

interface User {
  name: string;
  surname: string;
  id: string;
  location: string;
  isResident: boolean;
  birthDate: Date;
}

interface UserContextInterface {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
