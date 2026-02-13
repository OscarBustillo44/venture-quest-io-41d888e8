import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Upload, X, ImageIcon, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Link } from 'react-router-dom';

const sectorKeys = [
  { key: 'sectors.hospitality', value: 'Hostelería' },
  { key: 'sectors.commerce', value: 'Comercio' },
  { key: 'sectors.services', value: 'Servicios' },
  { key: 'sectors.industry', value: 'Industria' },
  { key: 'sectors.technology', value: 'Tecnología' },
  { key: 'sectors.fintech', value: 'Fintech' },
];

const operationTypes = [
  { key: 'buy.operationBuy', value: 'comprar' },
  { key: 'buy.operationSell', value: 'vender' },
  { key: 'buy.operationTransfer', value: 'traspasar' },
  { key: 'buy.operationInvest', value: 'participar' },
];

interface PublishBusinessCardProps {
  onSubmit?: (data: {
    title: string;
    operationType: string;
    sector: string;
    price: string;
    description: string;
    image: File | null;
  }) => void;
}

const PublishBusinessCard = ({ onSubmit }: PublishBusinessCardProps) => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    operationType: '',
    sector: '',
    price: '',
    description: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.operationType || !formData.sector || !formData.price) return;
    
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onSubmit) {
      onSubmit({
        ...formData,
        image: imageFile,
      });
    }
    
    setIsSubmitting(false);
    setIsEditing(false);
    
    // Reset form
    setFormData({ title: '', operationType: '', sector: '', price: '', description: '' });
    setImageFile(null);
    setImagePreview(null);
  };

  const resetForm = () => {
    setIsEditing(false);
    setFormData({ title: '', operationType: '', sector: '', price: '', description: '' });
    setImageFile(null);
    setImagePreview(null);
  };

  // Initial state - Invitation card
  if (!isEditing) {
    return (
      <div 
        onClick={() => setIsEditing(true)}
        className="relative min-h-[320px] h-full rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-dashed border-amber-400/50 bg-gradient-to-br from-stone-800 to-stone-900 group"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
            <Plus className="w-8 h-8 text-amber-400" />
          </div>
          <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-2">
            {t('publish.cardTitle')}
          </h3>
          <p className="text-sm text-stone-300 leading-relaxed max-w-[200px]">
            {t('publish.cardSubtitle')}
          </p>
          <div className="mt-4 px-4 py-2 bg-amber-600/80 rounded-lg text-white text-sm font-medium group-hover:bg-amber-600 transition-colors">
            {t('publish.startButton')}
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-amber-400/30" />
        <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-amber-400/30" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-amber-400/30" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-amber-400/30" />
      </div>
    );
  }

  // Editing state - Interactive form
  return (
    <div className="relative min-h-[320px] h-full rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-stone-800 to-stone-900 border border-amber-500/30">
      {/* Close button */}
      <button
        onClick={resetForm}
        className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-stone-700/80 hover:bg-stone-600 text-stone-300 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="h-full overflow-y-auto p-4 space-y-3">
        {/* Image upload area */}
        <div className="relative">
          {imagePreview ? (
            <div className="relative h-24 rounded-lg overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                onClick={removeImage}
                className="absolute top-1 right-1 p-1 rounded-full bg-red-500/80 hover:bg-red-500 text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-20 rounded-lg border-2 border-dashed border-stone-600 hover:border-amber-500/50 bg-stone-700/30 cursor-pointer transition-colors">
              <ImageIcon className="w-6 h-6 text-stone-400 mb-1" />
              <span className="text-xs text-stone-400">{t('publish.addPhoto')}</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Title */}
        <Input
          placeholder={t('publish.titlePlaceholder')}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="h-9 bg-stone-700/50 border-stone-600 text-white placeholder:text-stone-400 text-sm"
        />

        {/* Operation Type */}
        <Select
          value={formData.operationType}
          onValueChange={(value) => setFormData({ ...formData, operationType: value })}
        >
          <SelectTrigger className="h-9 bg-stone-700/50 border-stone-600 text-white text-sm">
            <SelectValue placeholder={t('publish.operationPlaceholder')} />
          </SelectTrigger>
          <SelectContent className="bg-stone-700 border-stone-600">
            {operationTypes.map((op) => (
              <SelectItem 
                key={op.value} 
                value={op.value}
                className="text-white hover:bg-stone-600 focus:bg-stone-600 focus:text-white"
              >
                {t(op.key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sector */}
        <Select
          value={formData.sector}
          onValueChange={(value) => setFormData({ ...formData, sector: value })}
        >
          <SelectTrigger className="h-9 bg-stone-700/50 border-stone-600 text-white text-sm">
            <SelectValue placeholder={t('publish.sectorPlaceholder')} />
          </SelectTrigger>
          <SelectContent className="bg-stone-700 border-stone-600">
            {sectorKeys.map((sector) => (
              <SelectItem 
                key={sector.key} 
                value={sector.key}
                className="text-white hover:bg-stone-600 focus:bg-stone-600 focus:text-white"
              >
                {t(sector.key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Price */}
        <div className="relative">
          <Input
            placeholder={t('publish.pricePlaceholder')}
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="h-9 bg-stone-700/50 border-stone-600 text-white placeholder:text-stone-400 text-sm pr-8"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">€</span>
        </div>

        {/* Description */}
        <Textarea
          placeholder={t('publish.descriptionPlaceholder')}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="min-h-[50px] resize-none bg-stone-700/50 border-stone-600 text-white placeholder:text-stone-400 text-sm"
          rows={2}
        />

        {/* Submit button */}
        <Button
          onClick={handleSubmit}
          disabled={!formData.title || !formData.sector || !formData.price || isSubmitting}
          className="w-full h-9 bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {t('publish.submitting')}
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              {t('publish.submit')}
            </>
          )}
        </Button>

        {/* Link to full form */}
        <Link 
          to="/vender"
          className="block text-center text-xs text-amber-400 hover:text-amber-300 transition-colors"
        >
          {t('publish.fullFormLink')}
        </Link>
      </div>
    </div>
  );
};

export default PublishBusinessCard;
