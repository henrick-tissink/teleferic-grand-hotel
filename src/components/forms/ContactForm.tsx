'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState, useMemo } from 'react'

function createContactSchema(translations: {
  nameRequired: string
  emailInvalid: string
  messageRequired: string
}) {
  return z.object({
    name: z.string().min(2, translations.nameRequired),
    email: z.string().email(translations.emailInvalid),
    subject: z.string().optional(),
    message: z.string().min(10, translations.messageRequired),
  })
}

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>

interface ContactFormProps {
  translations: {
    name: string
    email: string
    subject: string
    message: string
    send: string
    sending: string
    thankYou: string
    weWillReply: string
    sendAnother: string
    nameRequired: string
    emailInvalid: string
    messageRequired: string
  }
}

export default function ContactForm({ translations }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const contactSchema = useMemo(
    () => createContactSchema(translations),
    [translations]
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (_data: ContactFormData) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="p-8 bg-cream text-navy text-center">
        <p className="text-lg font-semibold">{translations.thankYou}</p>
        <p className="mt-2 text-sm">{translations.weWillReply}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-gold hover:underline"
        >
          {translations.sendAnother}
        </button>
      </div>
    )
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-navy mb-2">
          {translations.name}
        </label>
        <input
          type="text"
          id="contact-name"
          {...register('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors aria-[invalid=true]:border-red-600"
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-navy mb-2">
          {translations.email}
        </label>
        <input
          type="email"
          id="contact-email"
          {...register('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors aria-[invalid=true]:border-red-600"
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-navy mb-2">
          {translations.subject}
        </label>
        <input
          type="text"
          id="contact-subject"
          {...register('subject')}
          className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-2">
          {translations.message}
        </label>
        <textarea
          id="contact-message"
          rows={6}
          {...register('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className="w-full px-4 py-3 border border-cream-dark focus-visible:border-gold focus:outline-none transition-colors resize-none aria-[invalid=true]:border-red-600"
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

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
            <span>{translations.sending}</span>
          </>
        ) : translations.send}
      </button>
    </form>
  )
}
