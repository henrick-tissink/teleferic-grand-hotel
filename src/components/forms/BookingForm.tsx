'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState, useMemo } from 'react'

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
  }
  roomOptions: RoomOption[]
  defaults?: {
    checkin?: string
    checkout?: string
    adults?: string
    children?: string
  }
}

export default function BookingForm({ translations, roomOptions, defaults }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false)

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

  const onSubmit = async (_data: BookingFormData) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    reset()
  }

  const handleCheckinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckin = e.target.value
    setValue('checkin', newCheckin)
    // If checkout is before the new checkin, reset checkout
    const currentCheckout = watch('checkout')
    if (currentCheckout && currentCheckout <= newCheckin) {
      setValue('checkout', '')
    }
  }

  if (submitted) {
    return (
      <div className="p-8 bg-cream text-navy text-center">
        <p className="text-lg font-semibold">{translations.successMessage}</p>
        <p className="mt-2 text-sm">{translations.weWillConfirm}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-gold hover:underline"
        >
          {translations.makeAnother}
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Date Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="checkin" className="block text-sm font-medium text-navy mb-2">
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
            className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors aria-[invalid=true]:border-red-600"
          />
          {errors.checkin && (
            <p id="checkin-error" className="mt-1 text-sm text-red-600">{errors.checkin.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="checkout" className="block text-sm font-medium text-navy mb-2">
            {translations.checkOut}
          </label>
          <input
            type="date"
            id="checkout"
            min={checkinValue || today}
            {...register('checkout')}
            aria-invalid={!!errors.checkout}
            aria-describedby={errors.checkout ? 'checkout-error' : undefined}
            className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors aria-[invalid=true]:border-red-600"
          />
          {errors.checkout && (
            <p id="checkout-error" className="mt-1 text-sm text-red-600">{errors.checkout.message}</p>
          )}
        </div>
      </div>

      {/* Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="adults" className="block text-sm font-medium text-navy mb-2">
            {translations.adults}
          </label>
          <select
            id="adults"
            {...register('adults')}
            aria-invalid={!!errors.adults}
            aria-describedby={errors.adults ? 'adults-error' : undefined}
            className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors aria-[invalid=true]:border-red-600"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          {errors.adults && (
            <p id="adults-error" className="mt-1 text-sm text-red-600">{errors.adults.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="children" className="block text-sm font-medium text-navy mb-2">
            {translations.children}
          </label>
          <select
            id="children"
            {...register('children')}
            className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors"
          >
            {[0, 1, 2, 3].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Room Type */}
      <div>
        <label htmlFor="roomType" className="block text-sm font-medium text-navy mb-2">
          {translations.roomType}
        </label>
        <select
          id="roomType"
          {...register('roomType')}
          className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors"
        >
          {roomOptions.map((room) => (
            <option key={room.id} value={room.id}>{room.name}</option>
          ))}
        </select>
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
            {translations.name}
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors aria-[invalid=true]:border-red-600"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
            {translations.email}
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors aria-[invalid=true]:border-red-600"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
          {translations.phone}
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors aria-[invalid=true]:border-red-600"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="requests" className="block text-sm font-medium text-navy mb-2">
          {translations.specialRequests}
        </label>
        <textarea
          id="requests"
          rows={4}
          {...register('requests')}
          className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Discount Info */}
      <div className="bg-cream p-6">
        <p className="text-sm text-charcoal/70">
          {translations.discountInfo}
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gold text-navy font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>{translations.submitting}</span>
          </>
        ) : translations.submit}
      </button>
    </form>
  )
}
