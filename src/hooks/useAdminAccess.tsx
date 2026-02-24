import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

const ADMIN_KEY = 'bb_admin_access';
const ADMIN_PASSWORD = 'BuscoBusiness2026!';

interface AdminContextType {
  isAdmin: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(ADMIN_KEY);
    if (stored === 'true') setIsAdmin(true);
  }, []);

  const loginAdmin = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(ADMIN_KEY, 'true');
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    localStorage.removeItem(ADMIN_KEY);
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminAccess = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdminAccess must be used within AdminProvider');
  return context;
};
