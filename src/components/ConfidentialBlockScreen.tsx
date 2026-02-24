import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, Phone, ArrowLeft, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useAdminAccess } from '@/hooks/useAdminAccess';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ConfidentialBlockScreenProps {
  sector: string;
  refCode: string;
}

const ConfidentialBlockScreen = ({ sector, refCode }: ConfidentialBlockScreenProps) => {
  const { loginAdmin } = useAdminAccess();
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
    const success = loginAdmin(password);
    if (!success) {
      setError(true);
      setPassword('');
    }
    // If success, parent component will re-render and show the detail
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar variant="dark" />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <Link to="/comprar" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Tornar a la llista
        </Link>

        <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-stone-50 shadow-xl">
          <CardContent className="py-12 px-8">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Lock Icon */}
              <div className="w-20 h-20 bg-stone-800 rounded-full flex items-center justify-center">
                <Lock className="w-9 h-9 text-amber-400" />
              </div>

              {/* Reference */}
              <span className="text-xs font-mono tracking-wider text-stone-400 bg-stone-100 px-3 py-1 rounded">
                Ref: {refCode}
              </span>

              {/* Title */}
              <h1 className="text-2xl font-serif font-bold text-stone-800">
                Informació Confidencial — {sector}
              </h1>

              {/* Message */}
              <p className="text-stone-600 leading-relaxed max-w-md">
                Aquesta fitxa conté informació confidencial i no és accessible públicament.
                Si esteu interessats en obtenir més informació sobre aquest negoci, poseu-vos en contacte amb nosaltres.
              </p>

              {/* Contact Info */}
              <div className="w-full max-w-sm space-y-4 pt-4">
                <a
                  href="mailto:info@buscobusiness.com"
                  className="flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-lg text-base font-semibold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@buscobusiness.com
                </a>
                <a
                  href="tel:+376337670"
                  className="flex items-center justify-center gap-3 bg-stone-700 hover:bg-stone-800 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +376 337 670
                </a>
              </div>

              {/* Admin access */}
              <div className="pt-6 w-full max-w-sm">
                {!showPasswordInput ? (
                  <button
                    onClick={() => setShowPasswordInput(true)}
                    className="text-xs text-stone-300 hover:text-stone-500 transition-colors flex items-center gap-1 mx-auto"
                  >
                    <KeyRound className="w-3 h-3" />
                    Accés intern
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      type="password"
                      placeholder="Contrasenya"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setError(false); }}
                      onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                      className={error ? 'border-red-400' : ''}
                    />
                    <Button onClick={handleLogin} size="sm" className="bg-stone-700 hover:bg-stone-800">
                      Entrar
                    </Button>
                  </div>
                )}
                {error && <p className="text-xs text-red-500 mt-1">Contrasenya incorrecta</p>}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ConfidentialBlockScreen;
