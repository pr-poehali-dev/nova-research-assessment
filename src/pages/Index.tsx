import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  { icon: "FileCheck2", title: "Разрешение на захоронение", description: "Оформим все документы для захоронения без вашего участия." },
  { icon: "Landmark", title: "Обслуживание колумбарных ниш", description: "Комплексное обслуживание и уход за колумбарными нишами." },
  { icon: "Trees", title: "Благоустройство мест захоронений", description: "Уход и благоустройство территории захоронения." },
  { icon: "Flame", title: "Кремация", description: "Проведение кремации с полным оформлением документов." },
  { icon: "FileSignature", title: "Прижизненный договор", description: "Возможность заранее позаботиться об организации похорон." },
  { icon: "FileText", title: "Архивные справки", description: "Выдача архивных справок о захоронении." },
]

const steps = [
  { icon: "PhoneCall", title: "Вызовите агента", description: "Квалифицированный агент ритуальной службы приедет в больницу, квартиру — куда потребуется." },
  { icon: "MessageCircleQuestion", title: "Получите консультацию", description: "Специалист расскажет, как организовать похороны в Москве и Московской области." },
  { icon: "FileSignature", title: "Оформите договор", description: "Поручите дальнейшие действия опытному и добросовестному агенту." },
]

export default function RitualPage() {
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || !name) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Icon name="CheckCircle" size={64} className="text-primary mx-auto" />
              <h2 className="text-2xl font-bold text-foreground">Заявка принята</h2>
              <p className="text-muted-foreground">
                Спасибо, {name}. Наш агент свяжется с вами по номеру {phone} в ближайшее время
                и окажет всю необходимую поддержку.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                Отправить ещё одну заявку
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Landmark" size={24} />
            <div className="leading-tight">
              <h1 className="text-xl font-bold">ГБУ РИТУАЛ</h1>
              <p className="text-xs opacity-80">Ритуальная служба Москвы</p>
            </div>
          </div>
          <a
            href="tel:610"
            className="hidden md:flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Icon name="PhoneCall" size={18} />
            <span className="font-medium">610 — помощь 24/7</span>
          </a>
        </div>
      </header>

      {/* Hero + Form */}
      <main className="flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Помощь в трудную <span className="text-primary">минуту</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Государственное бюджетное учреждение по вопросам похоронного дела города Москвы.
              Полный спектр ритуальных услуг круглосуточно, без выходных и праздников.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-secondary">Вызвать ритуального агента</CardTitle>
              <CardDescription className="text-center">
                Оставьте заявку — перезвоним в течение нескольких минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Icon name="User" size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Icon name="Phone" size={16} className="absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent hover:text-accent-foreground transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Отправка..." : "Вызвать агента"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-secondary">1 048 222</p>
              <p className="text-xs text-muted-foreground">Всего обращений</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">255</p>
              <p className="text-xs text-muted-foreground">Обращений сегодня</p>
            </div>
          </div>
        </div>
      </main>

      {/* Что делать, если умер близкий человек */}
      <section className="bg-card py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Что делать, если умер близкий человек
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <Card key={step.title}>
                <CardContent className="pt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {i + 1}
                    </span>
                    <Icon name={step.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center text-foreground">Основные направления деятельности</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Card key={service.title} className="text-left">
                <CardContent className="pt-6 space-y-2">
                  <Icon name={service.icon} size={28} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="bg-card py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Icon name="MapPin" size={32} className="text-primary mx-auto" />
          <h2 className="text-2xl font-bold text-foreground">Контакты</h2>
          <p className="text-muted-foreground">Москва, Савёловский проезд, дом 10</p>
          <p className="text-lg font-semibold text-secondary">610 — помощь 24/7</p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Icon name="Clock" size={16} />
            Работаем круглосуточно, без выходных и праздников
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            © 2025 ГБУ «Ритуал». Ритуальная служба города Москвы.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
