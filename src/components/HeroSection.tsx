import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext.js';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { HeroSlideItem } from '../types/index.js';

const DEFAULT_SLIDES: HeroSlideItem[] = [
  {
    id: 'delivery-ad-banner-01',
    tagBn: 'হোম ডেলিভারি',
    tagEn: 'HOME DELIVERY',
    titleLine1Bn: 'অর্ডার করুন ঘরে বসে',
    titleLine1En: 'Order From Home',
    titleLine2Bn: 'হোম ডেলিভারি',
    titleLine2En: 'Home Delivery',
    titleLine3Bn: 'সারা বাংলা দেশে',
    titleLine3En: 'Across Bangladesh',
    subheadBn: 'ফাস্ট ডেলিভারি, হাই কোয়ালিটি এবং ১০০% স্যাটিসফ্যাকশন গ্যারান্টি',
    subheadEn: 'Fast Delivery, High Quality & 100% Satisfaction Guarantee',
    ctaBn: 'পণ্যসমূহ দেখুন',
    ctaEn: 'Explore Products',
    category: 'all',
    image: '/assets/aistudio/Tawzoon_Home_Delivery_Advertisement_4c0ccbb4.png',
    desktopImage: '/assets/aistudio/image_b4c018c1.png',
    isFullBanner: true,
  },
  {
    id: 'shopping-collection-banner-02',
    tagBn: 'শপিং কালেকশন',
    tagEn: 'SHOPPING COLLECTION',
    titleLine1Bn: 'আপনার প্রতিদিনের',
    titleLine1En: 'Everything For Your',
    titleLine2Bn: 'প্রয়োজনের সব',
    titleLine2En: 'Daily Shopping',
    titleLine3Bn: 'শপিং পণ্য এক জায়গায়',
    titleLine3En: 'In One Place',
    subheadBn: 'পোশাক, ফ্যাশন এবং দৈনন্দিন ব্যবহারের নানান পণ্য—সবই এখানে',
    subheadEn: 'Clothing, fashion and daily essentials — all in one place',
    ctaBn: 'পণ্যসমূহ দেখুন',
    ctaEn: 'Explore Products',
    category: 'shop',
    image: '/assets/aistudio/image_b77ddca5.png',
    desktopImage: '/assets/aistudio/image_c26710b3.png',
    isFullBanner: true,
  },
  {
    id: 'gadgets-collection-banner-03',
    tagBn: 'গ্যাজেট কালেকশন',
    tagEn: 'GADGETS COLLECTION',
    titleLine1Bn: 'আপনার প্রতিদিনের',
    titleLine1En: 'Everything For Your',
    titleLine2Bn: 'প্রয়োজনের সেরা',
    titleLine2En: 'Best Gadgets &',
    titleLine3Bn: 'গ্যাজেট পণ্য এক জায়গায়',
    titleLine3En: 'Tech In One Place',
    subheadBn: 'মোবাইল, ল্যাপটপ, হেডফোন, স্মার্টওয়াচ এবং সকল গ্যাজেট আইটেম—সবই এখানে',
    subheadEn: 'Mobile, laptop, headphones, smartwatch and all gadget items — all here',
    ctaBn: 'গ্যাজেট দেখুন',
    ctaEn: 'Explore Gadgets',
    category: 'gadgets',
    image: '/assets/aistudio/image_93f522a6.png',
    desktopImage: '/assets/aistudio/image_d2e63940.png',
    isFullBanner: true,
  },
  {
    id: 'others-collection-banner-04',
    tagBn: 'আদার্স প্রোডাক্টস',
    tagEn: 'OTHERS PRODUCTS',
    titleLine1Bn: 'আপনার প্রতিদিনের',
    titleLine1En: 'Everything For Your',
    titleLine2Bn: 'প্রয়োজনের সবকিছু',
    titleLine2En: 'Daily Needs & Essentials',
    titleLine3Bn: 'এক জায়গায়',
    titleLine3En: 'In One Place',
    subheadBn: 'কাপড়, গৃহস্থালি, রান্নাঘরের সামগ্রী, ব্যক্তিগত যত্ন, খেলনা, ছাতা, ব্যাগ এবং আরও অনেক প্রয়োজনীয় পণ্য—সবই এখানে',
    subheadEn: 'Household, kitchenware, personal care, toys, umbrella, bags and more essentials — all here',
    ctaBn: 'আদার্স পণ্য দেখুন',
    ctaEn: 'Explore Others',
    category: 'others',
    image: '/assets/aistudio/image_96f645c2.png',
    desktopImage: '/assets/aistudio/image_a1d50f15.png',
    isFullBanner: true,
  },
];

// Distinct Color Palettes for the Slides
export const SLIDE_THEMES = [
  {
    // Slide 0: TAWZOON Home Delivery Advertisement Banner (Crisp Mint & Emerald)
    cardBg: 'from-[#e8f7ee] via-[#ffffff] to-[#daf3e4]',
    borderColor: 'border-[#a8e5c1]',
    spotlight: 'from-emerald-300/80 via-teal-200/50 to-transparent',
    dotColor: 'bg-emerald-600/45',
    waveBg: 'rgba(52, 211, 153, 0.18)',
    tagBg: 'from-[#006837] via-[#009245] to-[#00b050]',
    tagShadow: 'rgba(0, 146, 69, 0.35)',
    keywordColor: 'text-[#009245]',
    accentBar: 'border-[#009245]',
    btnGradient: 'from-[#007a3d] via-[#009245] to-[#00a854]',
    btnShadow: 'rgba(0, 146, 69, 0.38)',
  },
  {
    // Slide 1: Shopping Collection Banner (Matching Emerald & Mint Green Theme)
    cardBg: 'from-[#e8f7ee] via-[#ffffff] to-[#daf3e4]',
    borderColor: 'border-[#a8e5c1]',
    spotlight: 'from-emerald-300/80 via-teal-200/50 to-transparent',
    dotColor: 'bg-emerald-600/45',
    waveBg: 'rgba(52, 211, 153, 0.18)',
    tagBg: 'from-[#006837] via-[#009245] to-[#00b050]',
    tagShadow: 'rgba(0, 146, 69, 0.35)',
    keywordColor: 'text-[#009245]',
    accentBar: 'border-[#009245]',
    btnGradient: 'from-[#007a3d] via-[#009245] to-[#00a854]',
    btnShadow: 'rgba(0, 146, 69, 0.38)',
  },
  {
    // Slide 2: Gadgets & Tech Collection Banner (Modern Cool Sky & Electric Cyan Tech)
    cardBg: 'from-[#edf6fd] via-[#e2effa] to-[#cfe4f5]',
    borderColor: 'border-[#b5d6ef]',
    spotlight: 'from-sky-300/80 via-cyan-200/50 to-transparent',
    dotColor: 'bg-sky-600/45',
    waveBg: 'rgba(56, 189, 248, 0.18)',
    tagBg: 'from-[#0284c7] via-[#0369a1] to-[#075985]',
    tagShadow: 'rgba(2, 132, 199, 0.35)',
    keywordColor: 'text-[#0284c7]',
    accentBar: 'border-[#0284c7]',
    btnGradient: 'from-[#0284c7] via-[#0ea5e9] to-[#0369a1]',
    btnShadow: 'rgba(2, 132, 199, 0.45)',
  },
  {
    // Slide 3: Others / আদার্স প্রোডাক্টস Collection Banner (Royal Purple & Electric Violet Theme)
    cardBg: 'from-[#f5f3ff] via-[#faf5ff] to-[#ede9fe]',
    borderColor: 'border-[#c4b5fd]',
    spotlight: 'from-purple-300/80 via-violet-200/50 to-transparent',
    dotColor: 'bg-purple-600/45',
    waveBg: 'rgba(168, 85, 247, 0.18)',
    tagBg: 'from-[#7e22ce] via-[#9333ea] to-[#a855f7]',
    tagShadow: 'rgba(147, 51, 234, 0.35)',
    keywordColor: 'text-[#9333ea]',
    accentBar: 'border-[#9333ea]',
    btnGradient: 'from-[#7c3aed] via-[#9333ea] to-[#6d28d9]',
    btnShadow: 'rgba(124, 58, 237, 0.45)',
  },
];

export const HeroSection: React.FC = () => {
  const { lang, setPublicCategory, brandSettings } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slides: HeroSlideItem[] = React.useMemo(() => {
    const baseSlides = (brandSettings?.heroSlides && brandSettings.heroSlides.length > 0)
      ? brandSettings.heroSlides
      : DEFAULT_SLIDES;

    // 1st Slide: Always the Home Delivery ad banner (Order From Home)
    const rawDeliverySlide = baseSlides.find(s => s.id === 'delivery-ad-banner-01' || s.titleLine1Bn?.includes('অর্ডার') || s.image?.includes('Delivery')) || DEFAULT_SLIDES[0];
    const deliverySlide: HeroSlideItem = {
      ...rawDeliverySlide,
      id: 'delivery-ad-banner-01',
      tagBn: rawDeliverySlide.tagBn || 'হোম ডেলিভারি',
      tagEn: rawDeliverySlide.tagEn || 'HOME DELIVERY',
      titleLine1Bn: rawDeliverySlide.titleLine1Bn || 'অর্ডার করুন ঘরে বসে',
      titleLine1En: rawDeliverySlide.titleLine1En || 'Order From Home',
      titleLine2Bn: rawDeliverySlide.titleLine2Bn || 'হোম ডেলিভারি',
      titleLine2En: rawDeliverySlide.titleLine2En || 'Home Delivery',
      titleLine3Bn: rawDeliverySlide.titleLine3Bn || 'সারা বাংলা দেশে',
      titleLine3En: rawDeliverySlide.titleLine3En || 'Across Bangladesh',
      subheadBn: rawDeliverySlide.subheadBn || 'ফাস্ট ডেলিভারি, হাই কোয়ালিটি এবং ১০০% স্যাটিসফ্যাকশন গ্যারান্টি',
      subheadEn: rawDeliverySlide.subheadEn || 'Fast Delivery, High Quality & 100% Satisfaction Guarantee',
      ctaBn: rawDeliverySlide.ctaBn || 'পণ্যসমূহ দেখুন',
      ctaEn: rawDeliverySlide.ctaEn || 'Explore Products',
      category: 'all',
      desktopImage: '/assets/aistudio/image_b4c018c1.png',
      image: '/assets/aistudio/Tawzoon_Home_Delivery_Advertisement_4c0ccbb4.png',
      isFullBanner: true,
    };

    // 2nd Slide: Always the Shopping Collection banner
    const rawShoppingSlide = baseSlides.find(s => s.id === 'shopping-collection-banner-02' || s.desktopImage === '/assets/aistudio/image_c26710b3.png' || s.tagBn?.includes('শপিং') || s.category === 'shop') || DEFAULT_SLIDES[1];
    const shoppingSlide: HeroSlideItem = {
      ...rawShoppingSlide,
      id: 'shopping-collection-banner-02',
      tagBn: rawShoppingSlide.tagBn || 'শপিং কালেকশন',
      tagEn: rawShoppingSlide.tagEn || 'SHOPPING COLLECTION',
      titleLine1Bn: rawShoppingSlide.titleLine1Bn || 'আপনার প্রতিদিনের',
      titleLine1En: rawShoppingSlide.titleLine1En || 'Everything For Your',
      titleLine2Bn: rawShoppingSlide.titleLine2Bn || 'প্রয়োজনের সব',
      titleLine2En: rawShoppingSlide.titleLine2En || 'Daily Shopping',
      titleLine3Bn: rawShoppingSlide.titleLine3Bn || 'শপিং পণ্য এক জায়গায়',
      titleLine3En: rawShoppingSlide.titleLine3En || 'In One Place',
      subheadBn: rawShoppingSlide.subheadBn || 'পোশাক, ফ্যাশন এবং দৈনন্দিন ব্যবহারের নানান পণ্য—সবই এখানে',
      subheadEn: rawShoppingSlide.subheadEn || 'Clothing, fashion and daily essentials — all in one place',
      ctaBn: rawShoppingSlide.ctaBn || 'পণ্যসমূহ দেখুন',
      ctaEn: rawShoppingSlide.ctaEn || 'Explore Products',
      category: 'shop',
      desktopImage: '/assets/aistudio/image_c26710b3.png',
      image: '/assets/aistudio/image_b77ddca5.png',
      isFullBanner: true,
    };

    // 3rd Slide: Always the Gadgets Collection banner
    const rawGadgetSlide = baseSlides.find(s => s.id === 'gadgets-collection-banner-03' || s.id === 2 || s.category === 'gadgets' || s.tagBn?.includes('গ্যাজেট') || s.desktopImage === '/assets/aistudio/image_d2e63940.png') || DEFAULT_SLIDES[2];
    const gadgetSlide: HeroSlideItem = {
      ...rawGadgetSlide,
      id: 'gadgets-collection-banner-03',
      tagBn: rawGadgetSlide.tagBn || 'গ্যাজেট কালেকশন',
      tagEn: rawGadgetSlide.tagEn || 'GADGETS COLLECTION',
      titleLine1Bn: rawGadgetSlide.titleLine1Bn || 'আপনার প্রতিদিনের',
      titleLine1En: rawGadgetSlide.titleLine1En || 'Everything For Your',
      titleLine2Bn: rawGadgetSlide.titleLine2Bn || 'প্রয়োজনের সেরা',
      titleLine2En: rawGadgetSlide.titleLine2En || 'Best Gadgets &',
      titleLine3Bn: rawGadgetSlide.titleLine3Bn || 'গ্যাজেট পণ্য এক জায়গায়',
      titleLine3En: rawGadgetSlide.titleLine3En || 'Tech In One Place',
      subheadBn: rawGadgetSlide.subheadBn || 'মোবাইল, ল্যাপটপ, হেডফোন, স্মার্টওয়াচ এবং সকল গ্যাজেট আইটেম—সবই এখানে',
      subheadEn: rawGadgetSlide.subheadEn || 'Mobile, laptop, headphones, smartwatch and all gadget items — all here',
      ctaBn: rawGadgetSlide.ctaBn || 'গ্যাজেট দেখুন',
      ctaEn: rawGadgetSlide.ctaEn || 'Explore Gadgets',
      category: 'gadgets',
      desktopImage: '/assets/aistudio/image_d2e63940.png',
      image: '/assets/aistudio/image_93f522a6.png',
      isFullBanner: true,
    };

    // 4th Slide: Always the Others / আদার্স প্রোডাক্টস Collection banner
    const rawOthersSlide = baseSlides.find(s =>
      s.id === 'others-collection-banner-04' ||
      s.id === 3 ||
      s.category === 'other' ||
      s.category === 'others' ||
      s.tagBn?.includes('আদার্স') ||
      s.tagBn?.includes('অন্যান্য') ||
      s.desktopImage === '/assets/aistudio/image_a1d50f15.png'
    ) || DEFAULT_SLIDES[3];

    const othersSlide: HeroSlideItem = {
      ...rawOthersSlide,
      id: 'others-collection-banner-04',
      tagBn: rawOthersSlide.tagBn || 'আদার্স প্রোডাক্টস',
      tagEn: rawOthersSlide.tagEn || 'OTHERS PRODUCTS',
      titleLine1Bn: rawOthersSlide.titleLine1Bn || 'আপনার প্রতিদিনের',
      titleLine1En: rawOthersSlide.titleLine1En || 'Everything For Your',
      titleLine2Bn: rawOthersSlide.titleLine2Bn || 'প্রয়োজনের সবকিছু',
      titleLine2En: rawOthersSlide.titleLine2En || 'Daily Needs & Essentials',
      titleLine3Bn: rawOthersSlide.titleLine3Bn || 'এক জায়গায়',
      titleLine3En: rawOthersSlide.titleLine3En || 'In One Place',
      subheadBn: rawOthersSlide.subheadBn || 'কাপড়, গৃহস্থালি, রান্নাঘরের সামগ্রী, ব্যক্তিগত যত্ন, খেলনা, ছাতা, ব্যাগ এবং আরও অনেক প্রয়োজনীয় পণ্য—সবই এখানে',
      subheadEn: rawOthersSlide.subheadEn || 'Household, kitchenware, personal care, toys, umbrella, bags and more essentials — all here',
      ctaBn: rawOthersSlide.ctaBn || 'আদার্স পণ্য দেখুন',
      ctaEn: rawOthersSlide.ctaEn || 'Explore Others',
      category: 'others',
      desktopImage: '/assets/aistudio/image_a1d50f15.png',
      image: '/assets/aistudio/image_96f645c2.png',
      isFullBanner: true,
    };

    // Filter other slides to avoid duplicates
    const otherSlides = baseSlides.filter(s =>
      s.id !== 'delivery-ad-banner-01' &&
      s.id !== 'shopping-collection-banner-02' &&
      s.id !== 'gadgets-collection-banner-03' &&
      s.id !== 'others-collection-banner-04' &&
      s.id !== 2 &&
      s.id !== 3 &&
      !s.titleLine1Bn?.includes('অর্ডার') &&
      !s.tagBn?.includes('শপিং') &&
      !s.tagBn?.includes('গ্যাজেট') &&
      !s.tagBn?.includes('আদার্স') &&
      !s.tagBn?.includes('অন্যান্য') &&
      s.desktopImage !== '/assets/aistudio/image_c26710b3.png' &&
      s.desktopImage !== '/assets/aistudio/image_d2e63940.png' &&
      s.desktopImage !== '/assets/aistudio/image_a1d50f15.png' &&
      s.category !== 'shop' &&
      s.category !== 'gadgets' &&
      s.category !== 'other' &&
      s.category !== 'others'
    );

    return [deliverySlide, shoppingSlide, gadgetSlide, othersSlide, ...otherSlides];
  }, [brandSettings?.heroSlides]);

  // Reset currentSlide if out of range
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [slides.length, currentSlide]);

  // Auto carousel slide every 5 seconds (pauses when backgrounded)
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide] || slides[0] || DEFAULT_SLIDES[0];
  const theme = SLIDE_THEMES[currentSlide % SLIDE_THEMES.length];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleCta = () => {
    const rawCat = slide.category || 'all';
    const targetCat = (rawCat === 'others' || rawCat === 'other') ? 'other' : rawCat;
    setPublicCategory(targetCat);
    // Dispatch custom event for reseller catalog if inside reseller view
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('tawzoon_open_reseller_catalog', {
        detail: { category: (rawCat === 'other' || rawCat === 'others') ? 'others' : rawCat }
      }));
    }
    const el = document.getElementById('catalog-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Touch swipe support for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Is Full Banner Artwork (Slide 0: Home delivery, Slide 1: Shopping Collection, Slide 2: Gadgets Collection, Slide 3: Others Collection)
  const isFullBanner = Boolean(
    slide.isFullBanner ||
    Boolean(slide.desktopImage) ||
    slide.image?.includes('Tawzoon_Home_Delivery') ||
    slide.image?.includes('tawzoon_home_delivery') ||
    slide.id === 'delivery-ad-banner-01' ||
    slide.id === 'shopping-collection-banner-02' ||
    slide.id === 'gadgets-collection-banner-03' ||
    slide.id === 'others-collection-banner-04'
  );

  const desktopSrc = (slide.id === 'delivery-ad-banner-01')
    ? '/assets/aistudio/image_b4c018c1.png'
    : (slide.id === 'shopping-collection-banner-02')
      ? '/assets/aistudio/image_c26710b3.png'
      : (slide.id === 'gadgets-collection-banner-03')
        ? '/assets/aistudio/image_d2e63940.png'
        : (slide.id === 'others-collection-banner-04')
          ? '/assets/aistudio/image_a1d50f15.png'
          : (slide.desktopImage || slide.image);

  const mobileSrc = (slide.id === 'delivery-ad-banner-01')
    ? '/assets/aistudio/Tawzoon_Home_Delivery_Advertisement_4c0ccbb4.png'
    : (slide.id === 'shopping-collection-banner-02')
      ? '/assets/aistudio/image_b77ddca5.png'
      : (slide.id === 'gadgets-collection-banner-03')
        ? '/assets/aistudio/image_93f522a6.png'
        : (slide.id === 'others-collection-banner-04')
          ? '/assets/aistudio/image_96f645c2.png'
          : (slide.image || desktopSrc);
  // Show CTA button on Banners 2, 3, 4 only (Shopping, Gadgets, Others); Slide 0 (Home Delivery ad) has no button
  const showCtaButton = Boolean(
    isFullBanner &&
    slide.id !== 'delivery-ad-banner-01' &&
    currentSlide !== 0
  );

  // Is Fashion slide
  const isFashionSlide = slide.category === 'shop' || slide.id === 3;

  return (
    <section
      className="w-full max-w-[1920px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 pt-2 sm:pt-3 md:pt-4 lg:pt-5 pb-1 sm:pb-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Distinct Color Themed Hero Banner Card with Professional Thin Border & Smooth Zoom Animation */}
      <div
        className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br ${theme.cardBg} border border-slate-300/90 group-hover:border-emerald-500 group-hover:shadow-[0_15px_45px_rgba(0,146,69,0.22)] transition-all duration-700 ease-out select-none`}
      >
        {/* Smooth Zoom Animation on Banner Hover / Drag */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none z-0">
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>
        {/* Interactive Ambient Light Sheen on Hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 pointer-events-none z-15" />
        
        {/* Modern Tech Curved Wave Shapes */}
        {!isFullBanner && (
          <>
            <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-white/40 blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -right-8 -bottom-8 w-80 h-80 rounded-full bg-white/30 blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          </>
        )}
        
        {/* Soft Organic SVG Curved Wave Overlay */}
        {!isFullBanner && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-50 transition-opacity duration-500"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,220 C 300,160 500,320 800,200 C 1000,120 1100,240 1200,180 L 1200,400 L 0,400 Z"
              fill={theme.waveBg}
            />
            <path
              d="M 0,140 C 200,60 450,220 700,140 C 950,60 1100,180 1200,120"
              fill="none"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2"
            />
          </svg>
        )}

        {/* Tech Dot Grid Pattern: Top-Right (4x4) */}
        {!isFullBanner && (
          <div className="absolute top-3.5 right-4 sm:right-7 grid grid-cols-4 gap-1.5 opacity-35 pointer-events-none group-hover:opacity-60 transition-opacity duration-500">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full ${theme.dotColor}`} />
            ))}
          </div>
        )}

        {/* Tech Dot Grid Pattern: Center (2x4) */}
        {!isFullBanner && (
          <div className="absolute top-1/2 -translate-y-1/2 left-[44%] hidden lg:grid grid-cols-4 gap-1.5 opacity-35 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full ${theme.dotColor}`} />
            ))}
          </div>
        )}

        {/* Tech Dot Grid Pattern: Bottom-Left (4x3) */}
        {!isFullBanner && (
          <div className="absolute bottom-3.5 left-4 sm:left-7 grid grid-cols-4 gap-1.5 opacity-35 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full ${theme.dotColor}`} />
            ))}
          </div>
        )}

        {/* Studio Spotlight Halo behind product cutout */}
        {!isFullBanner && (
          <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[45%] pointer-events-none overflow-hidden">
            <div className={`absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-48 sm:w-88 h-48 sm:h-88 rounded-full bg-gradient-to-tr ${theme.spotlight} blur-2xl sm:blur-3xl opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`} />
          </div>
        )}

        {/* Ambient Top Subtle Lighting Sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-transparent to-black/5 pointer-events-none" />

        {/* Left Side Navigation Button (Clean floating icon, no background shape, professional theme color with pulse animation) */}
        {slides.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous Slide"
            className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 ${
              currentSlide === 2
                ? 'text-sky-600 hover:text-sky-800'
                : currentSlide === 3
                  ? 'text-purple-600 hover:text-purple-800'
                  : 'text-emerald-600 hover:text-emerald-800'
            } hover:scale-125 active:scale-90 transition-all duration-300 flex items-center justify-center cursor-pointer drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] animate-pulse`}
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3]" />
          </button>
        )}

        {/* Right Side Navigation Button (Clean floating icon, no background shape, professional theme color with pulse animation) */}
        {slides.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next Slide"
            className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 ${
              currentSlide === 2
                ? 'text-sky-600 hover:text-sky-800'
                : currentSlide === 3
                  ? 'text-purple-600 hover:text-purple-800'
                  : 'text-emerald-600 hover:text-emerald-800'
            } hover:scale-125 active:scale-90 transition-all duration-300 flex items-center justify-center cursor-pointer drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] animate-pulse`}
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[3]" />
          </button>
        )}

        {isFullBanner ? (
          <div className="relative z-10 w-full overflow-hidden flex items-center justify-center rounded-2xl sm:rounded-3xl">
            <picture className="w-full block overflow-hidden rounded-2xl sm:rounded-3xl">
              {/* Ultra-wide desktop Full HD artwork (>=640px) */}
              <source
                media="(min-width: 640px)"
                srcSet={desktopSrc}
              />
              {/* Original 16:9 artwork on mobile screens (<640px) */}
              <img
                key={`${slide.id}-${desktopSrc}-${mobileSrc}`}
                src={mobileSrc}
                alt={lang === 'bn' ? (slide.titleLine1Bn || 'তাওজুন') : (slide.titleLine1En || 'TAWZOON')}
                className="w-full h-auto block select-none pointer-events-none rounded-2xl sm:rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const fallback = slide.id === 'delivery-ad-banner-01'
                    ? '/assets/aistudio/Tawzoon_Home_Delivery_Advertisement_4c0ccbb4.png'
                    : slide.id === 'gadgets-collection-banner-03'
                      ? '/assets/aistudio/image_93f522a6.png'
                      : slide.id === 'others-collection-banner-04'
                        ? '/assets/aistudio/image_96f645c2.png'
                        : '/assets/aistudio/image_b77ddca5.png';
                  if (e.currentTarget.src !== fallback) {
                    e.currentTarget.src = fallback;
                  }
                }}
              />
            </picture>

            {/* Interactive Professional CTA Button Overlay (Placed lower to prevent any text overlay, thinner & wider style) */}
            {showCtaButton && (
              <div className={`absolute ${
                slide.id === 'others-collection-banner-04'
                  ? 'top-[70%] sm:top-[78%] md:top-[81%] lg:top-[82%] xl:top-[83%]'
                  : slide.id === 'gadgets-collection-banner-03'
                    ? 'top-[67%] sm:top-[73%] md:top-[75%] lg:top-[76%] xl:top-[77%]'
                    : 'top-[63%] sm:top-[73%] md:top-[75%] lg:top-[76%] xl:top-[77%]'
              } left-[6.5%] z-20 pointer-events-auto`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCta();
                  }}
                  aria-label={lang === 'bn' ? 'পণ্য দেখুন' : (slide.ctaEn || 'Explore Products')}
                  className={`group/btn relative inline-flex items-center gap-1.5 sm:gap-2.5 ${
                    slide.id === 'shopping-collection-banner-02' || slide.id === 'gadgets-collection-banner-03'
                      ? 'px-3 sm:px-9 md:px-11 py-0.5 sm:py-1.5 text-[10px] sm:text-sm md:text-base'
                      : 'px-3 sm:px-6 md:px-7 py-0.5 sm:py-1.5 text-[10px] sm:text-xs md:text-sm'
                  } rounded-full text-white font-bold tracking-wide shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/60 overflow-hidden ${
                    slide.id === 'gadgets-collection-banner-03'
                      ? 'bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#0369a1] shadow-[0_4px_16px_rgba(2,132,199,0.45)] hover:shadow-[0_6px_22px_rgba(14,165,233,0.65)]'
                      : slide.id === 'others-collection-banner-04'
                        ? 'bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#6d28d9] shadow-[0_4px_16px_rgba(124,58,237,0.45)] hover:shadow-[0_6px_22px_rgba(147,51,234,0.65)]'
                        : 'bg-gradient-to-r from-[#009245] via-[#10b981] to-[#059669] shadow-[0_4px_16px_rgba(0,146,69,0.45)] hover:shadow-[0_6px_22px_rgba(16,185,129,0.65)]'
                  }`}
                >
                  {/* Subtle continuous glowing pulse halo ring for high visual prominence */}
                  <span
                    className={`absolute -inset-0.5 rounded-full opacity-50 blur-xs animate-pulse pointer-events-none ${
                      slide.id === 'gadgets-collection-banner-03'
                        ? 'bg-sky-400'
                        : slide.id === 'others-collection-banner-04'
                          ? 'bg-purple-400'
                          : 'bg-emerald-400'
                    }`}
                  />

                  {/* High-visibility shimmer light sweep across button */}
                  <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 pointer-events-none" />

                  {/* Button Label and Dynamic Arrow */}
                  <span className="relative z-10 drop-shadow-xs font-semibold select-none">
                    {lang === 'bn' ? 'পণ্য দেখুন' : (slide.ctaEn || 'Explore Products')}
                  </span>
                  <ArrowRight className="relative z-10 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5] transition-transform duration-300 group-hover/btn:translate-x-1 shrink-0" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* 2-Column Responsive Layout */
          <div className="relative z-10 grid grid-cols-12 items-center pl-8 pr-7 sm:pl-14 sm:pr-14 lg:pl-16 lg:pr-16 py-3.5 sm:py-7 lg:py-8 min-h-[175px] sm:min-h-[250px] md:min-h-[285px] lg:min-h-[300px] xl:min-h-[320px] max-h-[420px] gap-2 sm:gap-6">
            
            {/* Left Text Column */}
            <div className="col-span-7 sm:col-span-7 space-y-1.5 sm:space-y-3">
              
              {/* Professional Tag (Reduced Round Shape to rounded-lg sm:rounded-xl) */}
              <div className="w-fit flex items-center">
                <div
                  className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-lg sm:rounded-xl bg-gradient-to-r ${theme.tagBg} text-white shadow-[0_4px_12px_${theme.tagShadow}] border border-white/30 select-none whitespace-nowrap shrink-0 group-hover:scale-102 transition-transform duration-300`}
                >
                  <span className="text-[9.5px] sm:text-xs md:text-sm font-extrabold tracking-wide whitespace-nowrap">
                    {lang === 'bn' ? slide.tagBn : slide.tagEn}
                  </span>
                  <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white/90 shrink-0 fill-white/30 animate-pulse" />
                </div>
              </div>

              {/* Main Headline */}
              <div className="leading-[1.16] space-y-0.5">
                <h1 className="text-[13px] sm:text-xl md:text-2xl lg:text-[29px] xl:text-[32px] font-black text-slate-950 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                  {lang === 'bn' ? slide.titleLine1Bn : slide.titleLine1En}
                </h1>
                <h2 className="text-[13px] sm:text-xl md:text-2xl lg:text-[29px] xl:text-[32px] font-black text-slate-950 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                  {lang === 'bn' ? slide.titleLine2Bn : slide.titleLine2En}
                </h2>
                {slide.titleLine3Bn && (
                  <h3 className={`text-[13px] sm:text-xl md:text-2xl lg:text-[29px] xl:text-[32px] font-black ${theme.keywordColor} tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]`}>
                    {lang === 'bn' ? slide.titleLine3Bn : slide.titleLine3En}
                  </h3>
                )}
              </div>

              {/* Subtitle with Vertical Accent Bar */}
              <div className={`border-l-[3px] sm:border-l-4 ${theme.accentBar} pl-2 sm:pl-2.5 py-0.5`}>
                <p className="text-[9.5px] sm:text-xs md:text-sm lg:text-base text-slate-700 font-bold leading-snug line-clamp-2 max-w-sm lg:max-w-md">
                  {lang === 'bn' ? slide.subheadBn : slide.subheadEn}
                </p>
              </div>

              {/* Professional CTA Button (Reduced Round Shape to rounded-xl sm:rounded-2xl with UI Animation) */}
              <div className="pt-0.5 sm:pt-1 flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCta();
                  }}
                  className={`group/btn bg-gradient-to-r ${theme.btnGradient} text-white text-[10px] sm:text-xs md:text-sm font-extrabold px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shadow-[0_4px_16px_${theme.btnShadow}] hover:shadow-[0_8px_24px_${theme.btnShadow}] hover:scale-105 active:scale-95 transition-all duration-200 border border-white/30 cursor-pointer`}
                >
                  <span>{lang === 'bn' ? slide.ctaBn : slide.ctaEn}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>

            </div>

            {/* Right Product Cutout Area with UI Animation */}
            <div className="col-span-5 sm:col-span-5 relative flex justify-end items-center h-full">
              <div
                className={`relative w-full ${
                  isFashionSlide
                    ? 'max-w-[175px] sm:max-w-[290px] md:max-w-[370px] lg:max-w-[420px] xl:max-w-[460px] h-[145px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[300px]'
                    : 'max-w-[160px] sm:max-w-[270px] md:max-w-[340px] lg:max-w-[390px] xl:max-w-[430px] h-[135px] sm:h-[210px] md:h-[250px] lg:h-[270px] xl:h-[290px]'
                } flex items-center justify-end`}
              >
                <img
                  key={slide.id}
                  src={slide.image || DEFAULT_SLIDES[currentSlide % DEFAULT_SLIDES.length]?.image}
                  alt="Showcase Cutout"
                  className={`max-w-full max-h-full object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] group-hover:scale-106 group-hover:-translate-y-1 transition-all duration-500 ease-out select-none ${
                    isFashionSlide ? 'scale-105 sm:scale-110' : ''
                  }`}
                  onError={(e) => {
                    const fallback = DEFAULT_SLIDES[currentSlide % DEFAULT_SLIDES.length]?.image || 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1000&auto=format&fit=crop&q=80';
                    if (e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        )}

        {/* Pagination Dots at Bottom Center */}
        {slides.length > 1 && (
          <div className={`absolute ${isFullBanner ? 'bottom-0.5 sm:bottom-1' : 'bottom-1.5 sm:bottom-3'} left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/25 backdrop-blur-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs pointer-events-auto`}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full hover:scale-125 cursor-pointer ${
                  currentSlide === i
                    ? 'w-5 sm:w-6 h-1 sm:h-1.5 bg-[#009245] shadow-xs'
                    : 'w-1.5 sm:w-2 h-1 sm:h-1.5 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
