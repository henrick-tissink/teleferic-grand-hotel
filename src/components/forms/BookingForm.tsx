'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState, useMemo } from 'react'
import { AnimateIn } from '@/components/ui/AnimateIn'

function createBookingSchema(translations: {
  nameRequired: string
  emailInvalid: string
  checkinRequired: string
  checkoutRequired: string
  adultsRequired: string
  phoneInvalid: string
}) {
  return z.object({
    checkin: z.string().min(1, translations.checkinRequired),
    checkout: z.string().min(1, translations.checkoutRequired),
    adults: z.string().min(1, translations.adultsRequired),
    children: z.string().optional(),
    roomType: z.string().optional(),
    name: z.string().min(2, translations.nameRequired),
    email: z.string().email(translations.emailInvalid),
    phone: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^[+\d\s]+$/.test(val),
        translations.phoneInvalid
      ),
    requests: z.string().optional(),
  })
}

type BookingFormData = z.infer<ReturnType<typeof createBookingSchema>>

interface RoomOption {
  id: string
  name: string
}

interface BookingFormProps {
  translations: {
    checkIn: string
    checkOut: string
    adults: string
    children: string
    roomType: string
    name: string
    email: string
    phone: string
    specialRequests: string
    discountInfo: string
    submit: string
    submitting: string
    successMessage: string
    weWillConfirm: string
    makeAnother: string
    nameRequired: string
    emailInvalid: string
    checkinRequired: string
    checkoutRequired: string
    adultsRequired: string
    phoneInvalid: string
    stayDates: string
    guestsAndRoom: string
    yourDetails: string
    confirmationTitle: string
    stayLabel: string
    guestsLabel: string
    roomLabel: string
    contactLabel: string
  }
  roomOptions: RoomOption[]
  defaults?: {
    checkin?: string
    checkout?: string
    adults?: string
    children?: string
  }
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-gold font-[family-name:var(--font-heading)] text-sm">{number}</span>
      <div className="h-px flex-1 bg-cream-dark" />
      <h3 className="text-xs uppercase tracking-[0.2em] text-charcoal/60 font-medium">{title}</h3>
      <div className="h-px flex-1 bg-cream-dark" />
    </div>
  )
}

const selectArrowSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23c9a96e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`

export default function BookingForm({ translations, roomOptions, defaults }: BookingFormProps) {
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null)

  const bookingSchema = useMemo(
    () => createBookingSchema(translations),
    [translations]
  )

  const today = new Date().toISOString().split('T')[0]

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      checkin: defaults?.checkin || '',
      checkout: defaults?.checkout || '',
      adults: defaults?.adults || '1',
      children: defaults?.children || '0',
    },
  })

  const checkinValue = watch('checkin')

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmittedData(data)
    reset()
  }

  const handleCheckinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckin = e.target.value
    setValue('checkin', newCheckin)
    const currentCheckout = watch('checkout')
    if (currentCheckout && currentCheckout <= newCheckin) {
      setValue('checkout', '')
    }
  }

  if (submittedData) {
    const roomName = roomOptions.find((r) => r.id === submittedData.roomType)?.name || submittedData.roomType
    return (
      <div className="text-center py-4">
        <AnimateIn>
          {/* Gold checkmark circle */}
          <div className="mx-auto mb-6 w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h3 className="text-2xl font-[family-name:var(--font-heading)] text-navy mb-2">
            {translations.confirmationTitle}
          </h3>
          <p className="text-sm text-charcoal/60 mb-8">{translations.weWillConfirm}</p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="bg-cream p-6 md:p-8 text-left space-y-4 max-w-md mx-auto">
            <div className="flex justify-between items-center border-b border-cream-dark pb-3">
              <span className="text-xs uppercase tracking-widest text-charcoal/50">{translations.stayLabel}</span>
              <span className="text-sm text-navy font-medium">{submittedData.checkin} — {submittedData.checkout}</span>
            </div>
            <div className="flex justify-between items-center border-b border-cream-dark pb-3">
              <span className="text-xs uppercase tracking-widest text-charcoal/50">{translations.guestsLabel}</span>
              <span className="text-sm text-navy font-medium">
                {submittedData.adults} {translations.adults}{submittedData.children && submittedData.children !== '0' ? `, ${submittedData.children} ${translations.children}` : ''}
              </span>
            </div>
            {roomName && (
              <div className="flex justify-between items-center border-b border-cream-dark pb-3">
                <span className="text-xs uppercase tracking-widest text-charcoal/50">{translations.roomLabel}</span>
                <span className="text-sm text-navy font-medium">{roomName}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-charcoal/50">{translations.contactLabel}</span>
              <div className="text-right">
                <p className="text-sm text-navy font-medium">{submittedData.name}</p>
                <p className="text-xs text-charcoal/50">{submittedData.email}</p>
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="mt-8 text-sm text-gold hover:underline underline-offset-4"
          >
            {translations.makeAnother}
          </button>
        </AnimateIn>
      </div>
    )
  }

  const inputClasses = 'w-full py-3 border-0 border-b-2 border-cream-dark bg-transparent text-navy placeholder:text-charcoal/30 focus:border-gold focus:outline-none transition-colors'
  const selectClasses = `w-full py-3 border-0 border-b-2 border-cream-dark bg-transparent text-navy focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer pr-8`
  const labelClasses = 'block text-xs uppercase tracking-widest text-charcoal/60 mb-3'
  const errorInputClasses = 'aria-[invalid=true]:border-red-600'

  return (
    <form className="space-y-10" onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Section 01: Your Stay */}
      <div>
        <SectionHeader number="01" title={translations.stayDates} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="checkin" className={labelClasses}>
              {translations.checkIn}
            </label>
            <input
              type="date"
              id="checkin"
              min={today}
              {...register('checkin', {
                onChange: handleCheckinChange,
              })}
              aria-invalid={!!errors.checkin}
              aria-describedby={errors.checkin ? 'checkin-error' : undefined}
              className={`${inputClasses} ${errorInputClasses}`}
            />
            {errors.checkin && (
              <p id="checkin-error" className="mt-2 text-sm text-red-600 border-l-2 border-gold pl-3">{errors.checkin.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="checkout" className={labelClasses}>
              {translations.checkOut}
            </label>
            <input
              type="date"
              id="checkout"
              min={checkinValue || today}
              {...register('checkout')}
              aria-invalid={!!errors.checkout}
              aria-describedby={errors.checkout ? 'checkout-error' : undefined}
              className={`${inputClasses} ${errorInputClasses}`}
            />
            {errors.checkout && (
              <p id="checkout-error" className="mt-2 text-sm text-red-600 border-l-2 border-gold pl-3">{errors.checkout.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Section 02: Guests & Room */}
      <div>
        <SectionHeader number="02" title={translations.guestsAndRoom} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="adults" className={labelClasses}>
              {translations.adults}
            </label>
            <div className="relative">
              <select
                id="adults"
                {...register('adults')}
                aria-invalid={!!errors.adults}
                aria-describedby={errors.adults ? 'adults-error' : undefined}
                className={`${selectClasses} ${errorInputClasses}`}
                style={{ backgroundImage: selectArrowSvg, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            {errors.adults && (
              <p id="adults-error" className="mt-2 text-sm text-red-600 border-l-2 border-gold pl-3">{errors.adults.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="children" className={labelClasses}>
              {translations.children}
            </label>
            <div className="relative">
              <select
                id="children"
                {...register('children')}
                className={selectClasses}
                style={{ backgroundImage: selectArrowSvg, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
              >
                {[0, 1, 2, 3].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="roomType" className={labelClasses}>
              {translations.roomType}
            </label>
            <div className="relative">
              <select
                id="roomType"
                {...register('roomType')}
                className={selectClasses}
                style={{ backgroundImage: selectArrowSvg, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
              >
                {roomOptions.map((room) => (
                  <option key={room.id} value={room.id}>{room.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Section 03: Your Details */}
      <div>
        <SectionHeader number="03" title={translations.yourDetails} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              {translations.name}
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`${inputClasses} ${errorInputClasses}`}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-600 border-l-2 border-gold pl-3">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              {translations.email}
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`${inputClasses} ${errorInputClasses}`}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-600 border-l-2 border-gold pl-3">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className={labelClasses}>
            {translations.phone}
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`${inputClasses} ${errorInputClasses}`}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-600 border-l-2 border-gold pl-3">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="requests" className={labelClasses}>
            {translations.specialRequests}
          </label>
          <textarea
            id="requests"
            rows={4}
            {...register('requests')}
            className="w-full px-4 py-3 bg-cream border border-cream-dark text-navy placeholder:text-charcoal/30 focus:border-gold focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      {/* Discount Banner */}
      <div className="relative bg-navy p-6 overflow-hidden">
        {/* Decorative gold corner borders */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/60" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold/60" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold/60" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/60" />
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
            <span className="text-gold font-bold text-sm">18%</span>
          </div>
          <p className="text-sm text-white/90 leading-relaxed">
            {translations.discountInfo}
          </p>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full py-4 bg-gold text-navy font-semibold uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>{translations.submitting}</span>
          </>
        ) : (
          <>
            <span>{translations.submit}</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
