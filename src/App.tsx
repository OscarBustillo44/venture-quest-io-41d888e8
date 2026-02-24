import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/i18n";
import { AuthProvider } from "./hooks/useAuth";
import { AdminProvider } from "./hooks/useAdminAccess";
import QueOfrecemos from "./pages/QueOfrecemos";
import NotFound from "./pages/NotFound";
import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";
import ComprarNegocio from "./pages/ComprarNegocio";
import NegocioDetalle from "./pages/NegocioDetalle";
import Vender from "./pages/Vender";
import Nosotros from "./pages/Nosotros";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AdminProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ComprarNegocio />} />
            <Route path="/comprar" element={<ComprarNegocio />} />
            <Route path="/que-ofrecemos" element={<QueOfrecemos />} />
            <Route path="/vender" element={<Vender />} />
            <Route path="/negocio/:id" element={<NegocioDetalle />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/cookies" element={<Cookies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </AdminProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
