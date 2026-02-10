import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Building2, Shield, TrendingUp, Users, FileText, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es obligatorio" }).max(100),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  phone: z.string().trim().min(9, { message: "Teléfono inválido" }).max(20),
  companyName: z.string().trim().min(1, { message: "El nombre de la empresa es obligatorio" }).max(200),
  sector: z.string().min(1, { message: "Selecciona un sector" }),
  revenue: z.string().min(1, { message: "Selecciona un rango de facturación" }),
  message: z.string().trim().max(1000).optional(),
  privacyAccepted: z.literal(true, { errorMap: () => ({ message: "Debes aceptar la política de privacidad" }) }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Vender = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      sector: '',
      revenue: '',
      message: '',
      privacyAccepted: false as unknown as true,
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Here we would send the data to a backend
    console.log('Form submitted:', data);
    toast({
      title: t('sell.form.successTitle'),
      description: t('sell.form.successMessage'),
    });
    form.reset();
  };

  const processSteps = [
    {
      icon: FileText,
      title: t('sell.process.step1.title'),
      description: t('sell.process.step1.description'),
    },
    {
      icon: Target,
      title: t('sell.process.step2.title'),
      description: t('sell.process.step2.description'),
    },
    {
      icon: Users,
      title: t('sell.process.step3.title'),
      description: t('sell.process.step3.description'),
    },
    {
      icon: CheckCircle2,
      title: t('sell.process.step4.title'),
      description: t('sell.process.step4.description'),
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: t('sell.benefits.confidentiality.title'),
      description: t('sell.benefits.confidentiality.description'),
    },
    {
      icon: TrendingUp,
      title: t('sell.benefits.valuation.title'),
      description: t('sell.benefits.valuation.description'),
    },
    {
      icon: Building2,
      title: t('sell.benefits.preparation.title'),
      description: t('sell.benefits.preparation.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="light" />

      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              {t('sell.hero.headline')}
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-8 leading-relaxed">
              {t('sell.hero.subheadline')}
            </p>
            <p className="text-lg text-amber-500 font-medium">
              {t('sell.hero.keyPhrase')}
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {t('sell.value.title')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('sell.value.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-stone-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <benefit.icon className="w-12 h-12 text-amber-600 mb-6" />
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {t('sell.process.title')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('sell.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-stone-900 flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <span className="text-sm font-bold text-amber-600 mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-stone-200 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-stone-900" id="contacto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                {t('sell.form.title')}
              </h2>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                {t('sell.form.description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">{t('sell.form.promise1.title')}</h4>
                    <p className="text-stone-400 text-sm">{t('sell.form.promise1.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">{t('sell.form.promise2.title')}</h4>
                    <p className="text-stone-400 text-sm">{t('sell.form.promise2.description')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">{t('sell.form.promise3.title')}</h4>
                    <p className="text-stone-400 text-sm">{t('sell.form.promise3.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <Card className="bg-white">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('sell.form.fields.name')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('sell.form.placeholders.name')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('sell.form.fields.email')}</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={t('sell.form.placeholders.email')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('sell.form.fields.phone')}</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder={t('sell.form.placeholders.phone')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('sell.form.fields.companyName')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('sell.form.placeholders.companyName')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="sector"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('sell.form.fields.sector')}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={t('sell.form.placeholders.sector')} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="comercio">{t('sectors.comercio')}</SelectItem>
                                <SelectItem value="hosteleria">{t('sectors.hosteleria')}</SelectItem>
                                <SelectItem value="industria">{t('sectors.industria')}</SelectItem>
                                <SelectItem value="servicios">{t('sectors.servicios')}</SelectItem>
                                <SelectItem value="tecnologia">{t('sectors.tecnologia')}</SelectItem>
                                <SelectItem value="otros">{t('sell.form.sectors.other')}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="revenue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('sell.form.fields.revenue')}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={t('sell.form.placeholders.revenue')} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<500k">{t('sell.form.revenue.under500k')}</SelectItem>
                                <SelectItem value="500k-1M">{t('sell.form.revenue.500kTo1M')}</SelectItem>
                                <SelectItem value="1M-5M">{t('sell.form.revenue.1MTo5M')}</SelectItem>
                                <SelectItem value="5M-10M">{t('sell.form.revenue.5MTo10M')}</SelectItem>
                                <SelectItem value=">10M">{t('sell.form.revenue.over10M')}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('sell.form.fields.message')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={t('sell.form.placeholders.message')} 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacyAccepted"
                      render={({ field }) => (
                        <FormItem className="flex items-start gap-2 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value === true}
                              onChange={(e) => field.onChange(e.target.checked ? true : false)}
                              className="mt-1 accent-amber-600"
                            />
                          </FormControl>
                          <FormLabel className="text-xs text-stone-500 font-normal leading-relaxed cursor-pointer">
                            {t('forms.privacyConsent.text')}{' '}
                            <Link to="/privacidad" className="underline text-amber-600 hover:text-amber-700" target="_blank">
                              {t('forms.privacyConsent.link')}
                            </Link>
                          </FormLabel>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-6"
                    >
                      {t('sell.form.submit')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            {t('sell.cta.title')}
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            {t('sell.cta.subtitle')}
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-stone-900 hover:bg-stone-800 text-white font-bold px-8 py-6"
          >
            <a href="#contacto">{t('sell.cta.button')}</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vender;
