import { getTranslations } from 'next-intl/server'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { AnimateIn } from '@/components/ui/AnimateIn'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  return { title: `${t('title')} | Teleferic Grand Hotel` }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })

  const translations = {
    name: t('name'),
    email: t('email'),
    subject: t('subject'),
    message: t('message'),
    send: t('send'),
    sending: t('sending'),
    thankYou: t('thankYou'),
    weWillReply: t('weWillReply'),
    sendAnother: t('sendAnother'),
    nameRequired: t('nameRequired'),
    emailInvalid: t('emailInvalid'),
    messageRequired: t('messageRequired'),
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-white/70">{t('subtitle')}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimateIn>
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-heading)] text-navy mb-8">
                {t('sendMessage')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t('phone')}</h3>
                    <a href="tel:+40368100200" className="text-charcoal/70 hover:text-gold transition-colors block">
                      0368 100 200
                    </a>
                    <a href="tel:+40368100200" className="text-charcoal/70 hover:text-gold transition-colors block">
                      +40 368 100 200
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t('email')}</h3>
                    <a href="mailto:rezervari@telefericgrandhotel.ro" className="text-charcoal/70 hover:text-gold transition-colors block">
                      rezervari@telefericgrandhotel.ro
                    </a>
                    <a href="mailto:frontoffice@telefericgrandhotel.ro" className="text-charcoal/70 hover:text-gold transition-colors block">
                      frontoffice@telefericgrandhotel.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t('whatsapp')}</h3>
                    <a href="https://wa.me/40725966730" className="text-charcoal/70 hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                      +40 725 966 730
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t('address')}</h3>
                    <p className="text-charcoal/70">
                      Str. Poiana Soarelui 243<br />
                      Poiana Brașov, Brașov<br />
                      500001, Romania
                    </p>
                  </div>
                </div>
              </div>

              {/* Spa Contact */}
              <div className="mt-10 p-6 bg-cream">
                <h3 className="font-semibold text-navy mb-2">{t('spaWellness')}</h3>
                <p className="text-charcoal/70 text-sm">
                  <a href="mailto:spa@telefericgrandhotel.ro" className="hover:text-gold transition-colors">
                    spa@telefericgrandhotel.ro
                  </a>
                  {' | '}
                  <a href="tel:+40368100206" className="hover:text-gold transition-colors">
                    0368 100 206
                  </a>
                </p>
              </div>
            </div>
            </AnimateIn>

            {/* Contact Form */}
            <AnimateIn delay={0.1}>
            <div>
              <ContactForm translations={translations} />
            </div>
            </AnimateIn>
          </div>

          {/* Map */}
          <div className="mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5!2d25.4548!3d45.5926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35ba47c3fc695%3A0x8e6c4e5c0e7f6fb5!2sTeleferic%20Grand%20Hotel!5e0!3m2!1sen!2sro!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title={t('mapTitle')}
            />
          </div>
        </div>
      </section>
    </>
  )
}
