import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, Phone, ArrowLeft, KeyRound, Send, CheckCircle } from 'lucide-react';
import { buildContactMailtoHref, openContactMailto } from '@/lib/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleLogin = () => {
    const success = loginAdmin(password);
    if (!success) {
      setError(true);
      setPassword('');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const extraLines = [
      `Referencia: ${refCode}`,
      `Sector: ${sector}`,
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Teléfono: ${formData.phone}` : '',
      formData.message?.trim() ? `Mensaje: ${formData.message.trim()}` : '',
    ].filter(Boolean) as string[];

    openContactMailto(extraLines);
    setFormSent(true);
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

              {/* Contactar Button */}
              {!showContactForm && !formSent && (
                <Button
                  onClick={() => openContactMailto([`Referencia: ${refCode}`, `Sector: ${sector}`])}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-md"
                >
                  Contactar
                </Button>
              )}

              {/* Contact Panel */}
              {showContactForm && !formSent && (
                <div className="w-full max-w-md space-y-6 pt-2 text-left">
                  {/* Quick contact links */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+376337670"
                      className="flex items-center justify-center gap-2 bg-stone-700 hover:bg-stone-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +376 337 670
                    </a>
                    <a
                      href={buildContactMailtoHref([`Referencia: ${refCode}`, `Sector: ${sector}`])}
                      className="flex items-center justify-center gap-2 bg-stone-700 hover:bg-stone-800 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-stone-200" />
                    <span className="text-xs text-stone-400 uppercase tracking-wider">o envieu-nos un missatge</span>
                    <div className="flex-1 h-px bg-stone-200" />
                  </div>

                  {/* Form */}
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-stone-700 mb-1 block">Nom complet *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                        placeholder="El vostre nom"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium text-stone-700 mb-1 block">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                          placeholder="email@exemple.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-stone-700 mb-1 block">Telèfon</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                          placeholder="+376..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-stone-700 mb-1 block">
                        Què us interessa saber? *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                        placeholder="Expliqueu breument el vostre interès en aquest negoci..."
                        rows={4}
                        required
                      />
                    </div>
                    <p className="text-xs text-stone-400">
                      Ref: {refCode} · {sector}
                    </p>
                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-5 text-base font-semibold"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar sol·licitud
                    </Button>
                  </form>
                </div>
              )}

              {/* Success State */}
              {formSent && (
                <div className="flex flex-col items-center space-y-4 py-4">
                  <CheckCircle className="w-14 h-14 text-green-600" />
                  <h2 className="text-xl font-semibold text-stone-800">Sol·licitud enviada!</h2>
                  <p className="text-stone-600 max-w-sm">
                    Gràcies pel vostre interès. Ens posarem en contacte amb vosaltres el més aviat possible.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a href="tel:+376337670" className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-800">
                      <Phone className="w-4 h-4" /> +376 337 670
                    </a>
                    <a href={buildContactMailtoHref([`Referencia: ${refCode}`, `Sector: ${sector}`])} className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-800">
                      <Mail className="w-4 h-4" /> info@buscobusiness.com
                    </a>
                  </div>
                </div>
              )}

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
